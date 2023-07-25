import React from 'react';
import s from './Intro.module.css';
import StyledLink from 'components/StyledLink/StyledLink';
// I hate css animation.
const Intro = () => {
  return (
    <div className={s.bg}>
      {/* controls */}
      <div className={s.backBtn}>
        <StyledLink width={'100px'} link={'/'} text={'back'} />
      </div>
      <div className={s.nextBtn}>
        <StyledLink width={'100px'} link={'/game'} text={'go!'} />
      </div>
      {/* flow text */}
      <div className={s.starWars}>
        <div className={s.crawl}>
          <p className={s.text}>
            It is a period of civil war. Rebel spaceships, striking from a
            hidden base, have won their first victory against the evil Galactic
            Empire. During the battle, Rebel spies managed to steal secret plans
            to the Empire’s ultimate weapon, the DEATH STAR, an armored space
            station with enough power to destroy an entire planet. Pursued by
            the Empire’s sinister agents, Princess Leia races home aboard her
            starship, custodian of the stolen plans that can save her people and
            restore freedom to the galaxy….
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
