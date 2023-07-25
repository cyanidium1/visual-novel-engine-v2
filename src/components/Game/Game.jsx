import StyledLink from 'components/StyledLink/StyledLink';
import React, { useState } from 'react';
import plot from '../../data/plot.json';
import s from './Game.module.css';
import Button from 'components/Button/Button';

const Game = () => {
  const [frame, changeFrame] = useState('p0');

  const scene = plot[frame];

  function onButtonClick(click) {
    changeFrame(click);
  }

  return (
    <div style={{ backgroundImage: `url(${scene.bg})` }} className={s.box}>
      <StyledLink width={'100px'} link={'/'} text={'back'} />
      <div className={s.textButtons}>
        <p className={s.text}>{scene.p}</p>
        <div className={s.btns}>
          <Button text={scene.b1} action={onButtonClick} click={scene.f1} />
          <Button text={scene.b2} action={onButtonClick} click={scene.f2} />
          <Button text={scene.b3} action={onButtonClick} click={scene.f3} />
        </div>
      </div>
    </div>
  );
};

export default Game;
