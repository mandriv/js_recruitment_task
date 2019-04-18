import React from 'react';

import AppHeader from '/shared/AppHeader';


export default function Main() {
  return (
    <main className="wrapper">
      <AppHeader title="Recruitment task" />
      <section className="container filtersContainer">
        <div className="row">
          <div className="column searchColumn">
            <label htmlFor="newsContentSearch">News content search</label>
            <input type="search" placeholder="News content search" id="newsContentSearch" />
          </div>
          <div className="column">
            <label htmlFor="sectionSelect">Section</label>
            <select id="sectionSelect">
              <option value="all">All</option>
              <option value="books">Books</option>
              <option value="business">Business</option>
              <option value="culture">Culture</option>
              <option value="Sport">Sport</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="column column-20">
            <label htmlFor="activePageSelect">Active Page</label>
            <select id="activePageSelect">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
      </section>
      <section className="container newsContainer">
        <div className="row">
          <div className="column column-65">
            <h2 className="newsColumnTitle">News List</h2>

            <ul className="newsList">
              <li>
                <article className="news">
                  <header>
                    <h3>Sample news title</h3>
                  </header>
                  <section className="newsDetails">
                    <ul>
                      <li>
                        <strong>Section Name:</strong>
                        {' '}
                        Sample Section
                      </li>
                      <li>
                        <strong>Publication Date:</strong>
                        {' '}
                        06.12.2018
                      </li>
                    </ul>
                  </section>
                  <section className="newsActions">
                    <a href="https://theguardian.com" className="button">Full article</a>
                    <button className="button button-outline">Read Later</button>
                  </section>
                </article>
              </li>
            </ul>
          </div>
          <div className="column column-55">
            <h2 className="newsColumnTitle">Read Later</h2>
            <ul className="readLaterList">
              <li>
                <h4 className="readLaterItem-title">Saved news title</h4>
                <section>
                  <a href="https://theguardian.com" className="button button-clear">Read</a>
                  <button className="button button-clear">Remove</button>
                </section>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
