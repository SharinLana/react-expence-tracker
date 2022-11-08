import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0px;
  width: 70%;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 5px;
  align-self: flex-start;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: none;
  padding: 3px 10px;
  font-size: 16px;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 0px 10px;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 20px;
  background-color: #40035d;
`;