import React from 'react'
import AnnualChartBar from './AnnualChartBar';
import { Wrapper } from './AnnualChart.styled';

const AnnualChart = ({ data }) => {
    const years = [
        {name: '2023', valuePerYear: 0},
        {name: '2022', valuePerYear: 0},
        {name: '2021', valuePerYear: 0},
        {name: '2020', valuePerYear: 0},
    ];

    for (let expense of data) {
        for (let object of years) {
            if (expense.date.getFullYear() === Number(object.name)) {
                object.valuePerYear += expense.price;
            }
        }
    }

    const totalForAllYears = data.reduce((total, amount) => total += amount.price, 0);

  return (
    <Wrapper>
        {years.map((year, index) => <AnnualChartBar year={year} totalForAllYears={totalForAllYears} key={index}/>)}
    </Wrapper>
  )
}

export default AnnualChart;