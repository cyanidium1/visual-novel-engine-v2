import StyledLink from 'components/StyledLink/StyledLink';
import React from 'react';
import s from './Menu.module.css';
import Copyright from 'components/Copyright/Copyright';

const Menu = ({ch}) => {
  // mobile 
const isVerticalOrient = (window.screen.height / window.screen.width) > 1.2



  return (
    <div className={s.box}>
      {isVerticalOrient && <div className={s.mobile}>Rotate your phone & refresh</div>}
      <ul className={s.list}>
        <li>
          <StyledLink link={'/intro'} text={'Play!'} />
        </li>
        <li>
          <StyledLink link={'/about'} text={'About'} />
        </li>
        <li>
          <StyledLink link={'/story'} text={'Create VN'}  />
        </li>
      </ul>
      <div className={s.cr}>
        <Copyright />
      </div>
    </div>
  );
};

export default Menu;
