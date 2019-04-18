export default class Storage {
  constructor(provider = window.localStorage) {
    this.storage = provider;
  }

  get(key) {
    return this.storage.getItem(key);
  }

  set(key, value) {
    return this.storage.setItem(key, value);
  }

  remove(key) {
    return this.storage.removeItem(key);
  }

  clear() {
    return this.storage.clear();
  }
}
