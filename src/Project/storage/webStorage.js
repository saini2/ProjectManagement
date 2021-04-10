import localforage from 'localforage';

const APP_NAME = 'APP_NAME';
const VERSION = 1.0;

localforage.config({
  name: APP_NAME,
  version: VERSION,
  storeName: APP_NAME + '_' + VERSION
});

export default {
  getItem: localforage.getItem,
  setItem: localforage.setItem,
  removeItem: localforage.removeItem
};
