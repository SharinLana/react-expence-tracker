import React, { useState } from 'react';
import AnnualChart from '../Chart/AnnualChart';
import MonthlyChart from '../Chart/MonthlyChart';
import Filter from '../FilterByYear/Filter';
import SingleExpense from './SingleExpense';
import { Wrapper, Paragraph } from './ExpensesMain.styled';


const ExpensesMain = ({ userInput }) => {
  const [selectedYear, setSelectedYear] = useState('Year');

  const getSelectedYear = (year) => {
    setSelectedYear(year)
  };

  const filteredYear = userInput.filter(
    object => object.date.getFullYear() === Number(selectedYear)
  );

  
  return (
    <Wrapper>
      <Filter getSelectedYear={getSelectedYear}/>
      
      {selectedYear !== 'Year' && <MonthlyChart filteredYear={filteredYear}/>}
      {selectedYear === 'Year' && <AnnualChart data={userInput}/>}

      {selectedYear === 'Year' &&  (
        userInput.map((elem, index) => <SingleExpense elem={elem} key={index}/>)
      )}
      {selectedYear !== 'Year' && (
        filteredYear.map((elem, index) => <SingleExpense elem={elem} key={index}/>)
      )}
      {filteredYear.length === 0 && selectedYear !== 'Year'  && (
        <Paragraph>No expenses found</Paragraph>
      )}

    </Wrapper>
  )
}

export default ExpensesMain;