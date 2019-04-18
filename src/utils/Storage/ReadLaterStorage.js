import Storage from './Storage';

const storage = new Storage();

const READ_LATER_KEY = 'read-later-storage';

const getAll = () => {
  const itemsStr = storage.get(READ_LATER_KEY);
  if (itemsStr === null) return [];
  try {
    const items = JSON.parse(itemsStr);
    return items;
  } catch (err) {
    console.warn(err); // eslint-disable-line no-console
    return [];
  }
};

const add = (item) => {
  if (!item.id) {
    console.warn('Invalid item provided'); // eslint-disable-line no-console
    return false;
  }
  const items = getAll();
  // item already exists
  if (items.some(i => i.id === item.id)) return false;
  items.push(item);
  storage.set(READ_LATER_KEY, JSON.stringify(items));
  return true;
};

const remove = (id) => {
  if (!id) {
    console.warn('Invalid id provided'); // eslint-disable-line no-console
    return false;
  }
  const items = getAll();
  const newItems = items.filter(item => item.id !== id);
  storage.set(READ_LATER_KEY, JSON.stringify(newItems));
  return true;
};

const ReadLaterStorage = {
  getAll,
  add,
  remove,
};

export default ReadLaterStorage;
