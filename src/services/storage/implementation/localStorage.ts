import { Storage } from "../storage";

export const localStorage: Storage = {
  getItem: async (key) => {
    const item = window.localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  },
  setItem: async (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: async (key) => {
    window.localStorage.removeItem(key);
  }
};
