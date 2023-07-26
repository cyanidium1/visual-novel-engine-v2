import StyledLink from 'components/StyledLink/StyledLink';
import React from 'react';
import s from './Story.module.css';

const Story = () => {
  return (
    <div className={s.box}>
      <StyledLink link={'/'} text={'Menu'} />
      <p className={s.text}>
        You can create and run your visual novel using my code. Change the
        plot.json file in data on your own and pictures. Name the pictures
        according to plot frames. To create your plot.json file use my
        VisualNovelCreator. The code works but it still undinished so sorry for
        any bugs! You can send feedback or bugreports to my email or Instagram
        (prefered).
      </p>
      <div className={s.links}>
        <a
          className={s.item}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/cyanidium1/visual-novel-engine-v2"
        >
          Source code of VNEngine
        </a>
        <a
          className={s.item}
          target="_blank"
          rel="noreferrer"
          href="https://cyanidium1.github.io/visual-novel-creator/"
        >
          VNCreator App
        </a>
        <a
          className={s.item}
          target="_blank"
          rel="noreferrer"
          href="https://instagram.com/cyanidium"
        >
          My instagram
        </a>
        <a className={s.item} href="mailto:cyanidium1@gmail.com">
          My email
        </a>
      </div>
    </div>
  );
};

export default Story;
