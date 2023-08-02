import React from 'react';
import s from './Intro.module.css';
import StyledLink from 'components/StyledLink/StyledLink';
// I hate css animation.
const Intro = ({ch}) => {
  const adaptive = {
    bg: {
      backgroundPosition: `0 0`,
      backgroundSize: '100% 100%', 
      
    }
  }

  const styleSheet = ch === 1 ? null : adaptive

  return (
    <div className={s.bg} style={styleSheet?.bg}>
      {/* controls */}
      <div className={s.backBtn}>
        <StyledLink width={`${100 * ch}px`} link={'/'} text={'Menu'} />
      </div>
      <div className={s.nextBtn}>
        <StyledLink width={`${100 * ch}px`} link={'/game'} text={'Go!'} />
      </div>
      {/* flow text */}
      <div className={s.starWars}>
        <div className={ch === 1 ? s.crawl : s.crawlAdaptive}>
          <p className={ch === 1 ? s.text : s.textAdaptive}>
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
