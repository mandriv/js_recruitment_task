import Api from './Api';

const News = {
  search: (params = {}) => Api.get('/search', params),
};

export default News;
