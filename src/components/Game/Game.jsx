import StyledLink from 'components/StyledLink/StyledLink';
import React, { useState } from 'react';
import plot from '../../data/plot.json';
import s from './Game.module.css';
import Button from 'components/Button/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const images = require.context('../../images', true);
const imageList = images.keys().map(image => images(image));

const Game = ({ ch }) => {
  //other
  const [height, setHeight] = useState(0);
  const notify = text => toast(text);

  // gameplay
  const [frame, changeFrame] = useState('p0');
  const [history, updHistory] = useState(['p0']);

  const scene = plot[frame];

  const adaptive = {
    text: {
      fontSize: `${24 * ch}px`,
    },
  };

  const styleSheet = ch === 1 ? null : adaptive;

  //   console.log(imageList[0]);

  //localstorage saves
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

  const bgId = imageList.indexOf(
    imageList.find(i => i.includes(`/static/media/${scene.bg}.`))
  );

  //   console.log(
  //     'bgId:' + bgId + 'imglistbg' + imageList[bgId] + 'scene bg' + scene.bg
  //   );

  function onButtonClick(click) {
    if (click === 'ptryAgain') {
      changeFrame('p0');
      updHistory(['p0']);
      return;
    }

    changeFrame(click);
    updHistory([...history, click]);
  }

  function ctrlZ() {
    if (history.length > 1) {
      changeFrame(history[history.length - 2]);
      updHistory(history.slice(0, -1));
      return;
    }
    notify('wanna return up to your birthday?');
  }
  return (
    <div
      style={
        scene.bg
          ? {
              backgroundImage: `url(${imageList[bgId]})`,
              // backgroundImage: require('../../images/1.jpg'),
              backgroundPosition: 'center',
            }
          : { backgroundColor: 'black' }
      }
      className={s.box}
    >
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <StyledLink width={`${100 * ch}px`} link={'/'} text={'Menu'} />
      <div className={s.undo}>
        <Button action={ctrlZ} text={'undo'} fz={24 * ch} />
      </div>
      {scene.hb1 && (
        <div
          className={s.hiddenBtn}
          style={{
            width: scene.hb1.width,
            height: scene.hb1.height,
            top: scene.hb1.top,
            left: scene.hb1.left,
          }}
          onClick={() => onButtonClick(scene.hb1.hf1)}
        ></div>
      )}
      {scene.hb2 && (
        <div
          className={s.hiddenBtn}
          style={{
            width: scene.hb2.width,
            height: scene.hb2.height,
            top: scene.hb2.top,
            left: scene.hb2.left,
          }}
          onClick={() => onButtonClick(scene.hb2.hf2)}
        ></div>
      )}
      {scene.hb3 && (
        <div
          className={s.hiddenBtn}
          style={{
            width: scene.hb3.width,
            height: scene.hb3.height,
            top: scene.hb3.top,
            left: scene.hb3.left,
          }}
          onClick={() => onButtonClick(scene.hb3.hf3)}
        ></div>
      )}
      <div style={{ bottom: height + 'px' }} className={s.textButtons}>
        {ch === 1 && (
          <div className={s.moveBtns}>
            <button
              onClick={() => setHeight(height + 10)}
              className={s.moveBtn}
            >
              /\
            </button>
            <button
              onClick={() => setHeight(height - 10)}
              className={s.moveBtn}
            >
              \/
            </button>
          </div>
        )}

        {/* <div>
          <span>
            {scene.f1}
            {scene.f2}
            {scene.f3}
          </span>
        </div> */}

        <p className={s.text} style={styleSheet?.text}>
          {scene.p}
        </p>
        <div className={s.btns}>
          {scene.b1 && (
            <Button
              text={scene.b1}
              action={onButtonClick}
              click={scene.f1}
              fz={24 * ch}
            />
          )}
          {scene.b2 && (
            <Button
              text={scene.b2}
              action={onButtonClick}
              click={scene.f2}
              fz={24 * ch}
            />
          )}
          {scene.b3 && (
            <Button
              text={scene.b3}
              action={onButtonClick}
              click={scene.f3}
              fz={24 * ch}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
