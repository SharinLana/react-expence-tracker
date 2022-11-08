import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerContainer = styled.div`
  height: 100%;
  width: 12px;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #c3b4f3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Filler = styled.div`
  background-color: #4826b9;
  width: 100%;
  height: ${props => props.annualPercent + "%"};
  transition: all 0.3s ease-out;
`;

export const MonthName = styled.div`
  font-size: 12px;
  font-weight: 600;
  margin-top: 6px;
`;