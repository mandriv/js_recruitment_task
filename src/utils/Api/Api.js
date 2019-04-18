const CORS = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = 'https://content.guardianapis.com';
const { API_KEY } = process.env;

const defaultParams = {
  'api-key': API_KEY,
};
const defaultConfig = {};

const request = async (endpoint = '', params = defaultParams, config = defaultConfig) => {
  // construct url-encoded params string
  const paramsString = Object.entries({ ...defaultParams, ...params }).reduce((str, entry) => {
    const key = entry[0];
    const value = entry[1];
    const keyValue = `${key}=${value}`;
    return str === '' ? `?${keyValue}` : `${str}&${keyValue}`;
  }, '');

  const url = `${CORS}${BASE_URL}${endpoint}${paramsString}`;
  const mergedConfig = { ...defaultConfig, ...config };
  try {
    const fetchResponse = await fetch(url, mergedConfig);
    if (fetchResponse.headers.get('Content-Type') === 'application/json') {
      const { response } = await fetchResponse.json();
      return response;
    }
    return await fetchResponse.text();
  } catch (err) {
    throw new Error(err);
  }
};

const Api = {
  get: (endpoint, params) => request(endpoint, params),
  // TODO: POST, PUT, PATCH (or just use axios)
};

export default Api;
