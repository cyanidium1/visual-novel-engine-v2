import StyledLink from 'components/StyledLink/StyledLink';
import React from 'react';
import s from './About.module.css';
import plot from '../../data/plot.json'

const About = () => {
  return (
    <div className={s.box}>
      <StyledLink link={'/'} text={'Menu'} />
      <p className={s.text}>
        {plot.info}
      </p>
    </div>
  );
};

export default About;
