import Api from './Api';

const News = {
  search: (params = {}, useCache = false) => Api.get('/search', params, null, useCache),
};

export default News;
