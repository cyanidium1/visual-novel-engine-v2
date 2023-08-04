import React from 'react';
import s from './Copyright.module.css';
import iglogo from '../../ui/instagram-seeklogo.com.svg'
import emlogo from '../../ui/email-svgrepo-com.svg'
import ghlogo from '../../ui/github-142-svgrepo-com.svg'

const Copyright = () => {
  return (
    <div className={s.box}>
      <p className={s.text}>photos, idea and code by cyanidium</p>
      <a className={s.link} 
      href="mailto:cyanidium1@gmail.com">
        <img src={emlogo} 
        className={s.svg}
        alt='email'></img>
      </a>
      <a
        className={s.link}
        target="_blank"
        rel="noreferrer"
        href="http://instagram.com/cyanidium"
      >
        <img src={iglogo} 
        className={s.svg}
        alt='instagram'></img>
      </a>
      <a
        className={s.link}
        target="_blank"
        rel="noreferrer"
        href="https://github.com/cyanidium1/visual-novel-engine-v2"
      >
       
        <img src={ghlogo}
         className={s.svg}
        alt='ghub'></img>
      </a>
    </div>
  );
};

export default Copyright;
