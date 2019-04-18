import { useState, useEffect } from 'react';

import ReadLaterStorage from '/utils/Storage/ReadLaterStorage';

export default function useReadLater() {
  const [items, setItems] = useState([]);

  const fetchAllItems = () => {
    setItems(ReadLaterStorage.getAll());
  };

  const add = (item) => {
    ReadLaterStorage.add(item);
    fetchAllItems();
  };

  const remove = (item) => {
    ReadLaterStorage.remove(item.id);
    fetchAllItems();
  };

  const init = () => {
    fetchAllItems();
  };

  useEffect(init, []);

  return {
    items,
    add,
    remove,
  };
}
