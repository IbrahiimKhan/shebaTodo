/*  Storage related all method will resides here. */

import {MMKV} from 'react-native-mmkv';
import {
  createJSONStorage,
  persist,
  type StateStorage,
} from 'zustand/middleware';

const storage = new MMKV();

const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    storage.set(name, value);
  },
  getItem: name => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: name => {
    storage.delete(name);
  },
};

enum STORAGE_KEYS {
  AUTH_TOKEN_KEY = 'authToken',
}

export {createJSONStorage, persist, storage, STORAGE_KEYS, zustandStorage};
