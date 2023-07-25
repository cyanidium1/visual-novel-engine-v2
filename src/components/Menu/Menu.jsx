import StyledLink from 'components/StyledLink/StyledLink';
import React from 'react';
import s from './Menu.module.css';
import Copyright from 'components/Copyright/Copyright';

const Menu = () => {
  return (
    <div className={s.box}>
      <ul className={s.list}>
        <li>
          <StyledLink link={'/intro'} text={'Play!'} />
        </li>
        <li>
          <StyledLink link={'/about'} text={'About'} />
        </li>
      </ul>
      <div className={s.cr}>
        <Copyright />
      </div>
    </div>
  );
};

export default Menu;
