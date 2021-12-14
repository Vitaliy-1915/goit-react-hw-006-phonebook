import React from 'react';
import s from '../Button/Button.module.css';

function Button({ type, text, onClick }) {
  return (
    <>
      <button type={type} onClick={onClick} className={s.button}>
        {text}
      </button>
    </>
  );
}

export default Button;
