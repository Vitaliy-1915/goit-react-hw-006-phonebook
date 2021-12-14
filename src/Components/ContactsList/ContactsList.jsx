import React from 'react';
import Button from '../Button/Button';
import s from '../ContactsList/ContactsList.module.css';
// import { v4 as unId } from "uuid";

function ContactsList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.ul}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.li} key={id}>
          {name}: {number}
          <Button
            type="button"
            text="Delete"
            onClick={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default ContactsList;
