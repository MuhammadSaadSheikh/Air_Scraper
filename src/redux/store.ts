import rootReducer from './slices';
import { baseApi } from './services/baseApi';
import loaderSlice from './slices/loaderSlice';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';

const persistConfig = {
  storage,
  key: 'root',
  blacklist: [loaderSlice.name],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
