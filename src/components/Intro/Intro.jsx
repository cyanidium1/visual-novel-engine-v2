import React from 'react';
import s from './Intro.module.css';
import StyledLink from 'components/StyledLink/StyledLink';
// I hate css animation.
const Intro = () => {
  return (
    <div className={s.bg}>
      {/* controls */}
      <div className={s.backBtn}>
        <StyledLink width={'100px'} link={'/'} text={'Menu'} />
      </div>
      <div className={s.nextBtn}>
        <StyledLink width={'100px'} link={'/game'} text={'Go!'} />
      </div>
      {/* flow text */}
      <div className={s.starWars}>
        <div className={s.crawl}>
          <p className={s.text}>
            Since childhood you have been lured by the darkness of the metro
            tunnels. Riding underground on trains you have often noticed various
            branches in the tunnels. Spending hours at the computer you found a
            lot of information about the capital's underground and decided to
            move to the active phase of research - to climb into the
            underground!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
