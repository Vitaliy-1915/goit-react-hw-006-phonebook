import { combineReducers } from 'redux';
import { ADD, DELETE } from './contacts-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return state.find(s =>
        s.name.toLowerCase().includes(payload.name.toLowerCase()),
      )
        ? alert(`${payload.name.toLowerCase()} is already in contacts`) ?? state
        : [...state, payload];

    case DELETE:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', action) => {
  return state;
};

export default combineReducers({
  items,
  filter,
});
