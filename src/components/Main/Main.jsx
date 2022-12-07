import React from 'react';
<<<<<<< HEAD
import Week25 from '../Week25/Week25';
import Week27 from '../Week27/Week27';
import style from './main.module.scss';

export default function Main() {
    return (
        <div className={style.container}>
             <Week25/>
             <Week27/>
=======
import { Chart } from "react-google-charts";

export const data = [
    ["Task", "Hours per Day"],
    ["Соцсети", 4],
    ["Фоновая музыка", 2.5],
    ["Тестирование", 0.5],
    ["Залипание в экран", 3],
    ["Повторное тестирование, даже если уже всё работает", 1.5],
    ["Написание кода", 1.5],
  ];
  
  export const options = {
    title: "Время, затраченное на программирование",
  };

export default function Main() {
    return (
        <div>
<Chart
  chartType="PieChart"
  data={data}
  options={options}
  width={"100%"}
  height={"400px"}
/>
>>>>>>> 328044b0bfc87abac6904ab9baf6f26e5d5642db
        </div>
    );
}

