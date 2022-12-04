import React from 'react';
import style from './card.module.scss';
import CSSModules from 'react-css-modules';

function Card({props, theme}) {
  return (
    <div styleName={theme}>
      <div className={style.titleCard}>{props.title}</div>
      <div className={style.priceCard}>руб <span>{props.price}</span> /мес</div>
      <div className={style.speedCard}>{props.speed}</div>
      <div className={style.trafficCard}>{props.traffic}</div>
    </div>
  );
}

export default CSSModules(Card, style);
