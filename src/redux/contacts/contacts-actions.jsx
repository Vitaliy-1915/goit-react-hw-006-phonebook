import { v4 as unId } from 'uuid';
import { ADD, DELETE } from './contacts-types';

export const addContact = value => ({
  type: ADD,
  payload: {
    id: unId(),
    ...value,
  },
});

export const deleteContact = contactId => ({
  type: DELETE,
  payload: contactId,
});

// export const testAction = {
//   type: 'ADD_NOTE',
//   payload: 'Redux is awesome!',
// };

// export const dinTestAction = (value) => ({
//   type: 'ADD_NOTE',
//   payload: value,
// });
