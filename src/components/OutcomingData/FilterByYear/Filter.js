import React from 'react';
import { Wrapper, Title, Select} from './Filter.styled';

const Filter = ({ getSelectedYear }) => {
    const selectedYear = (e) => {
        getSelectedYear(e.target.value);
    };

  return (
    <Wrapper>
        <Title>Filter by year</Title>
        <Select onChange={selectedYear}>
            <option>Year</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
        </Select>
    </Wrapper>
  )
}

export default Filter;