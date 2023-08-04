import React from 'react';
import s from './Intro.module.css';
import StyledLink from 'components/StyledLink/StyledLink';
import plot from '../../data/plot.json'
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
            {plot.intro}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
