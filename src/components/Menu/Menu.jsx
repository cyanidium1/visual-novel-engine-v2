import StyledLink from 'components/StyledLink/StyledLink';
import React from 'react';
import s from './Menu.module.css';

const Menu = () => {
  return (
    <div>
      <ul className={s.box}>
        <li>
          <StyledLink link={'/intro'} text={'Play!'} />
        </li>
        <li>
          <StyledLink link={'/about'} text={'About'} />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
