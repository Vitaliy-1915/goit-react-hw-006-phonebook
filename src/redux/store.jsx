import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReduser from './contacts/contacts-reducer';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReduser),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };

// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import contactsReduser from './contacts/contacts-reduser';

// const rootReduser = combineReducers({
//   contacts: contactsReduser,
// });

// const store = createStore(rootReduser, composeWithDevTools());

// export default store;
