import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReduser from './contacts/contacts-reduser';

// const contactsInitialState = {
//     items: [],
//     filter: '',
// };

// const contactsReduser = (state = contactsInitialState, {type, payload}) => {};

const rootReduser = combineReducers({
  contacts: contactsReduser,
});

const store = createStore(rootReduser, composeWithDevTools());

export default store;
