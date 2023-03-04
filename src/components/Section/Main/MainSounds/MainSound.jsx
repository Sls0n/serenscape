import React from 'react';

import classes from './MainSound.module.scss';
import svg from '../../../../assets/svg/sprite.svg';

const MainSound = ({ src, text }) => {
  return (
    <li className={classes['main__sound']}>
      <img className={classes['main__img']} src={src} alt={text} />

      <div className={classes.box}>
        <div className={classes.play}>
          <svg className={classes['main__play-svg']}>
            <use xlinkHref={`${svg}#icon-play`}></use>
          </svg>
        </div>
        <figcaption className={classes.text}>{text}</figcaption>
      </div>
    </li>
  );
};

export default MainSound;
