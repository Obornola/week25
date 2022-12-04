import React from 'react';
import { Chart } from 'react-google-charts';

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
    title: "Неделя 25. Время, затраченное на программирование",
  };

export default function Week25() {
    return (
        <>
<Chart
  chartType="PieChart"
  data={data}
  options={options}
  width={"100%"}
  height={"400px"}
/>
        </>
    );
}