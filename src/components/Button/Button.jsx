import React from 'react';
import s from './Button.module.css';

const Button = ({ text, action, click = '' }) => {
  return (
    <button className={s.item} onClick={() => action(click)}>
      {text}
    </button>
  );
};

export default Button;
