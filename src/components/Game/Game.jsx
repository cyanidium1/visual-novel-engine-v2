import StyledLink from 'components/StyledLink/StyledLink';
import React, { useState } from 'react';
import plot from '../../data/plot.json';
import s from './Game.module.css';
import Button from 'components/Button/Button';

const Game = () => {
  const [frame, changeFrame] = useState('p0');
  const [history, updHistory] = useState(['p0']);
  //   const [history, updHistory] = useState(
  //     () => localStorage.getItem('contacts') ?? ['p0']
  //   );

  //   useEffect(() => {
  //     try {
  //       localStorage.setItem('contacts', JSON.stringify(history));
  //     } catch (e) {
  //       console.log('error message:', e);
  //     }
  //   }, [history]);

  const scene = plot[frame];

  function onButtonClick(click) {
    changeFrame(click);
    updHistory([...history, click]);
  }

  function ctrlZ() {
    if (history.length > 1) {
      changeFrame(history[history.length - 2]);
      updHistory(history.slice(0, -1));
      return;
    }
    alert('wanna return up to your birthday?');
  }

  return (
    <div
      style={
        scene.bg
          ? { backgroundImage: `url(${scene.bg})` }
          : { backgroundColor: 'black' }
      }
      className={s.box}
    >
      <StyledLink width={'100px'} link={'/'} text={'Menu'} />
      <div className={s.undo}>
        <Button action={ctrlZ} text={'undo'} />
      </div>
      <div className={s.textButtons}>
        <p className={s.text}>{scene.p}</p>
        <div className={s.btns}>
          {scene.b1 && (
            <Button text={scene.b1} action={onButtonClick} click={scene.f1} />
          )}
          {scene.b2 && (
            <Button text={scene.b2} action={onButtonClick} click={scene.f2} />
          )}
          {scene.b3 && (
            <Button text={scene.b3} action={onButtonClick} click={scene.f3} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
