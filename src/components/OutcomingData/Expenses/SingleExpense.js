import React from 'react';
import ExpensesDate from './ExpensesDate';
import { Wrapper, Title, Price } from './SingleExpense.styled';

const SingleExpense = ({ elem }) => {
    
  return (
    <Wrapper>
        <ExpensesDate date={elem.date}/> 
        <Title>{elem.title}</Title>
        <Price>$ {elem.price}</Price>
    </Wrapper>
  )
}

export default SingleExpense;