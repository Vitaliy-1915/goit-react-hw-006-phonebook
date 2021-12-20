import { useState } from 'react';
import Button from '../Button/Button';
import { connect, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-actions';
import s from '../Form/Form.module.css';

function Form({ onSubmit }) {
  const contacts = useSelector(state => state.contacts.items);
  // console.log(contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const findContacts = contacts.find(cont =>
    cont.name.toLowerCase().includes(name.toLowerCase()),
  );

  const handleSubmit = e => {
    if (findContacts) {
      alert(`${name} is already in contacts`);
    } else {
      e.preventDefault();

      onSubmit({ name, number });

      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          onChange={handleChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <Button type="submit" text="Add contact" />
    </form>
  );
}
// console.log(addContact());
const mapDispatchToProps = dispatch => ({
  onSubmit: value => dispatch(addContact(value)),
});

export default connect(null, mapDispatchToProps)(Form);
