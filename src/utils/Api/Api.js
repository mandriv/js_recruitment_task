import { ResponsesCache } from '/utils/Storage';

// would use proxy normally
const CORS = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = 'https://content.guardianapis.com';
const { API_KEY } = process.env;

const defaultParams = {
  'api-key': API_KEY,
};
const defaultConfig = {};

// acts as a axios-like wrapper around fetch
const request = async (endpoint = '', params = defaultParams, config = defaultConfig, useCache = false) => {
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
  // Caching - retrieve
  if (useCache) {
    const response = ResponsesCache.get(url, mergedConfig);
    if (response !== null) return response;
  }
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
    const response = await fetchResponse.json();
    // Caching save
    if (useCache) {
      ResponsesCache.put(url, { config: mergedConfig, response });
    }
    return response;
  }
  return fetchResponse.text();
};

const Api = {
  get: (endpoint, params, config, useCache) => {
    const getConfig = {
      ...config,
      method: 'GET',
    };
    return request(endpoint, params, getConfig, useCache);
  },
  post: (endpoint, params, config, useCache) => {
    const postConfig = {
      ...config,
      method: 'POST',
    };
    return request(endpoint, params, postConfig, useCache);
  },
  put: (endpoint, params, config, useCache) => {
    const putConfig = {
      ...config,
      method: 'put',
    };
    return request(endpoint, params, putConfig, useCache);
  },
  patch: (endpoint, params, config, useCache) => {
    const patchConfig = {
      ...config,
      method: 'PATCH',
    };
    return request(endpoint, params, patchConfig, useCache);
  },
  delete: (endpoint, params, config, useCache) => {
    const deleteConfig = {
      ...config,
      method: 'DELETE',
    };
    return request(endpoint, params, deleteConfig, useCache);
  },
};

export default Api;
