import deepEqual from '/utils/helpers/deepEqual';

import Storage from './Storage';

const storage = new Storage();

const DEFAULT_TTL = 600;

export const get = (url, config) => {
  const string = storage.get(url);
  if (string === null) {
    return null;
  }
  try {
    const data = JSON.parse(string);
    // check if same
    if (!deepEqual(config, data.config)) {
      return null;
    }
    // check ttl
    const { ttl, createdAt } = data;
    if (!ttl || !createdAt) {
      storage.remove(url);
      return null;
    }
    const createdAtDate = new Date(createdAt);
    const now = new Date();
    const diffSecs = Math.abs((now.getTime() - createdAtDate.getTime()) / 1000);
    return diffSecs < ttl ? data.response : null;
  } catch (err) {
    console.warn(err); // eslint-disable-line no-console
    return null;
  }
};

export const put = (url, data) => {
  const { config, response } = data;
  if (config && response) {
    const stringToSave = JSON.stringify({
      config,
      response,
      ttl: data.ttl || DEFAULT_TTL,
      createdAt: new Date().toISOString(),
    });
    storage.set(url, stringToSave);
    return;
  }
  console.warn('Invalid data format'); // eslint-disable-line no-console
};

const ResponsesCache = {
  get,
  put,
};

export default ResponsesCache;
