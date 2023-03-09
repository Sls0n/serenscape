import React, { useState } from 'react';

import classes from './MainSound.module.scss';
import svg from '../../../../assets/svg/sprite.svg';

const MainSound = ({ src, text }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playClickHandler = () => {
    setIsPlaying((prevState) => !prevState);
    console.log(isPlaying);
  };

  return (
    <li className={classes['main__sound']}>
      <div className={classes.box}>
        <img className={classes['box__img']} src={src} alt={text} />

        <button onClick={playClickHandler} className={classes.box__playicon}>
          <svg>
            <use xlinkHref={`${svg}#icon-${isPlaying ? 'pause' : 'play'}`}></use>
          </svg>
        </button>

        <button className={classes.box__hearticon}>
          <svg>
            <use xlinkHref={`${svg}#icon-heart`}></use>
          </svg>
        </button>

        <div className={`${classes.box__menu} ${isPlaying ? '' : classes.hidden}`}>
          <div className={classes.box__icons}>
            <svg className={classes['icon__volume']}>
              <use xlinkHref={`${svg}#icon-volume-2`}></use>
            </svg>
          </div>
        </div>
      </div>

      <div className={classes['main__text']}>
        <h3 className={classes['main__title']}>{text}</h3>
        <p className={classes['main__author']}>by Valdemaras</p>
      </div>
    </li>
  );
};

export default MainSound;
