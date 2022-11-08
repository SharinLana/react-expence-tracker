import React from 'react';
import { Wrapper, InnerContainer, Filler, MonthName } from './ChartBar.styled';

const ChartBar = ({ month, totalPerYear }) => {
    const percentPerMonth = Math.round((month.valuePerMonth * 100) / totalPerYear);
    
  return (
    <Wrapper>
        <InnerContainer>
            <Filler percentPerMonth={percentPerMonth}></Filler>
        </InnerContainer>
        <MonthName>{month.name}</MonthName>
    </Wrapper>
  )
}

export default ChartBar;