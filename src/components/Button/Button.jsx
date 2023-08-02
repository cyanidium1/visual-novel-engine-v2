import React from 'react';
import s from './Button.module.css';

const Button = ({ text, action, click = '', fz = 24 }) => {
  return (
    <button style={{fontSize: `${fz}px`, margin: fz/24*10, padding: fz/24*5}} className={s.item} onClick={() => action(click)}>
      {text}
    </button>
  );
};

export default Button;
