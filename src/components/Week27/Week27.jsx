import React from 'react';
import Card from '../Card/Card';
import style from './week27.module.scss';

const data = [
    {title: "Безлимитный 300", price: "300", speed:"до 10 Мбит/сек", traffic:"Объём включённого трафика не ограничен", isSelected: false},
    {title: "Безлимитный 450", price: "450", speed:"до 50 Мбит/сек", traffic:"Объём включённого трафика не ограничен", isSelected: false},
    {title: "Безлимитный 550", price: "550", speed:"до 100 Мбит/сек", traffic:"Объём включённого трафика не ограничен", isSelected: true},
    {title: "Безлимитный 1000", price: "1000", speed:"до 200 Мбит/сек", traffic:"Объём включённого трафика не ограничен", isSelected: false}
];

const arrStyle = ["themeBlue", "themeGreen", "themeRed", "themeBlack"];

function Week27() {
  return (
    <div className={style.container}>
      <h3>Неделя 27. Тарифы</h3>
      <div className={style.block}>
      {
        data.map((d, index)=>
      <Card title={d.title} price={d.price} speed={d.speed} traffic={d.traffic} theme={arrStyle[index]} key={index} isSelected={d.isSelected}></Card>
      )}
      </div>
    </div>
  )
}

export default Week27;
