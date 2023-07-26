import StyledLink from 'components/StyledLink/StyledLink';
import React from 'react';
import s from './About.module.css';

const About = () => {
  return (
    <div>
      <StyledLink link={'/'} text={'Menu'} />
      <p className={s.text}>
        This is a "visual novel" type of game. The player is asked to choose
        different story options, search for items and make decisions that
        determine the plot and ending of the game. The photos used here were
        taken by the author of the project in 2016-2018 in the Kyiv metro.
        Events are based on real stories. Enjoy the game!
      </p>
    </div>
  );
};

export default About;
