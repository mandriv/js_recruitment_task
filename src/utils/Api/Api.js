const CORS = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = 'https://content.guardianapis.com';
const { API_KEY } = process.env;

const defaultParams = {
  'api-key': API_KEY,
};
const defaultConfig = {};

// acts as a axios-like wrapper around fetch
const request = async (endpoint = '', params = defaultParams, config = defaultConfig) => {
  // construct url-encoded params string
  const paramsString = Object.entries({ ...defaultParams, ...params }).reduce((str, entry) => {
    const key = entry[0];
    const value = entry[1];
    if (!key || !value) return str;
    const keyValue = `${key}=${value}`;
    return str === '' ? `?${keyValue}` : `${str}&${keyValue}`;
  }, '');

  const url = `${CORS}${BASE_URL}${endpoint}${paramsString}`;
  const mergedConfig = { ...defaultConfig, ...config };
  const fetchResponse = await fetch(url, mergedConfig);
  // detect error
  if (!fetchResponse.ok) {
    let errorResponseBody = null;
    if (fetchResponse.headers.get('Content-Type') === 'application/json') {
      errorResponseBody = await fetchResponse.json();
    } else {
      errorResponseBody = await fetchResponse.text();
    }
    const error = new Error(fetchResponse.statusText);
    error.statusCode = fetchResponse.status;
    error.data = errorResponseBody;
    throw error;
  }
  // response ok, transform response body
  if (fetchResponse.headers.get('Content-Type') === 'application/json') {
    return fetchResponse.json();
  }
  return fetchResponse.text();
};

const Api = {
  get: (endpoint, params) => request(endpoint, params),
  // TODO: POST, PUT, PATCH (or just use axios)
};

export default Api;
