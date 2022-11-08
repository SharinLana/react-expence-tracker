import React from 'react';
import { Wrapper, Year, Month, Day } from './ExpensesDate.styled';

const ExpensesData = ({ date }) => {
    const year = date.getFullYear();
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.getDate();

  return (
    <Wrapper>
        <Year>{year}</Year>
        <Month>{month}</Month>
        <Day>{day}</Day>
    </Wrapper>
  )
}

export default ExpensesData;