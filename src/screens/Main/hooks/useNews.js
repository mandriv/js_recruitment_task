import { useState, useEffect } from 'react';

import { News } from '/utils/Api';
import transformToNewsItem from '/utils/transformToNewsItem';

const INITITAL_CONTROL = {
  searchQuery: '',
  activeSection: 'all',
  activePage: 1,
};

export default function useAdmins() {
  const [control, setControl] = useState(INITITAL_CONTROL);
  const [news, setNews] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const { searchQuery, activePage, activeSection } = control;
      // news from last month
      const fromDate = new Date();
      fromDate.setMonth(fromDate.getMonth() - 1);
      // specify params based on control
      const params = {
        page: activePage,
        'from-date': fromDate.toISOString(),
      };
      if (searchQuery !== '') {
        params.q = searchQuery;
      }
      if (activeSection !== 'all') {
        params.section = activeSection;
      }
      // make request
      const response = await News.search(params);
      const newsItems = response.results.map(r => transformToNewsItem(r));
      setNews(newsItems);
      setError(false);
    } catch (err) {
      console.warn(err); // eslint-disable-line
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const init = () => {
    fetchNews();
  };

  useEffect(init, []);

  return {
    error,
    loading,
    news,
    control,
  };
}
