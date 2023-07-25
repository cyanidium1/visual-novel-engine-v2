import React from 'react';
import s from './Copyright.module.css';

const Copyright = () => {
  return (
    <div className={s.box}>
      <p className={s.text}>photos, idea and code by cyanidium</p>
      <a className={s.text} href="mailto:cyanidium1@gmail.com">
        email
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className={s.text}
        href="http://instagram.com/cyanidium"
      >
        instagram
      </a>
    </div>
  );
};

export default Copyright;
