import React from 'react';
import { Wrapper, InnerContainer, Filler, MonthName } from './AnnualChartBar.styled';

const AnnualChartBar = ({ year, totalForAllYears }) => {
    const annualPercent = Math.round((year.valuePerYear * 100) / totalForAllYears);
   
  return (
    <Wrapper>
        <InnerContainer>
            <Filler annualPercent={annualPercent}></Filler>
        </InnerContainer>
        <MonthName>{year.name}</MonthName>
    </Wrapper>
  )
}

export default AnnualChartBar;