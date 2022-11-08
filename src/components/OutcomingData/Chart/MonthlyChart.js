import React from 'react'
import ChartBar from './ChartBar';
import { Wrapper } from './MonthlyChart.styled';

const MonthlyChart = ({ filteredYear }) => {
    const months = [
        {name: 'Jan', valuePerMonth: 0},
        {name: 'Feb', valuePerMonth: 0},
        {name: 'Mar', valuePerMonth: 0},
        {name: 'Apr', valuePerMonth: 0},
        {name: 'May', valuePerMonth: 0},
        {name: 'Jun', valuePerMonth: 0},
        {name: 'Jul', valuePerMonth: 0},
        {name: 'Aug', valuePerMonth: 0},
        {name: 'Sep', valuePerMonth: 0},
        {name: 'Oct', valuePerMonth: 0},
        {name: 'Nov', valuePerMonth: 0},
        {name: 'Dec', valuePerMonth: 0},
    ];

    for (let expense of filteredYear) {
        const index = expense.date.getMonth();
        months[index].valuePerMonth += expense.price;
    }

    const totalPerYear = months.reduce((total, amount) => {
        total += amount.valuePerMonth;
        return total;
    }, 0);

  return (
    <Wrapper>
        {months.map((month, index) => <ChartBar month={month} totalPerYear={totalPerYear} key={index}/>)}
    </Wrapper>
  )
}

export default MonthlyChart;