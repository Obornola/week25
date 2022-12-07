import React from 'react';
import style from './card.module.scss';
import CSSModules from 'react-css-modules';

function Card({title, price, speed, traffic, theme, isSelected}) {
  return (
    <div styleName={theme} className={isSelected?style.selected:null}>
      <div className={style.titleCard}>{title}</div>
      <div className={style.priceCard}>{price} <span>руб/мес</span></div>
      <div className={style.speedCard}>{speed}</div>
      <div className={style.trafficCard}>{traffic}</div>
    </div>
  );
}

export default CSSModules(Card, style);
