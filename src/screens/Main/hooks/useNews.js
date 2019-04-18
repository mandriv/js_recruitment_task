import { useState, useEffect } from 'react';

import { News } from '/utils/Api';
import transformToNewsItem from '/utils/transformToNewsItem';

const INITITAL_CONTROL = {
  searchQuery: '',
  activeSection: 'all',
  activePage: 1,
  availablePages: 1,
};

export default function useAdmins() {
  const [control, setControl] = useState(INITITAL_CONTROL);
  const [news, setNews] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  let timeout = null;

  const fetchNews = () => {
    // add delay so we we don't fire api calls all the time
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(async () => {
      try {
        setLoading(true);
        const { searchQuery, activePage, activeSection } = control;
        // news from last month
        const fromDate = new Date();
        fromDate.setMonth(fromDate.getMonth() - 1);
        // specify params based on control
        const params = {
          q: searchQuery,
          section: activeSection === 'all' ? '' : activeSection,
          page: activePage,
          'from-date': fromDate.toISOString(),
        };
        // make request
        const { response } = await News.search(params);
        setControl(prevControl => ({
          ...prevControl,
          availablePages: response.pages,
        }));
        const newsItems = response.results.map(r => transformToNewsItem(r));
        setNews(newsItems);
        setError(false);
      } catch (err) {
        // catch error with invalid page that can be handled
        if (
          err.data && err.data.response
          && err.data.response.message === 'requested page is beyond the number of available pages'
        ) {
          setControl(prevControl => ({
            ...prevControl,
            activePage: 1,
          }));
          return;
        }
        console.warn(err); // eslint-disable-line
        setError('Oops! Something went wrong.');
      } finally {
        setLoading(false);
      }
    }, 500);
  };

  const refresh = () => {
    fetchNews();
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  };

  const handleControlUpdate = (ev) => {
    const { name, value } = ev.target;
    setControl(prevControl => ({
      ...prevControl,
      [name]: value,
    }));
  };

  useEffect(refresh, [
    control.searchQuery,
    control.activeSection,
    control.activePage,
  ]);

  return {
    error,
    loading,
    news,
    control,
    handleControlUpdate,
  };
}
