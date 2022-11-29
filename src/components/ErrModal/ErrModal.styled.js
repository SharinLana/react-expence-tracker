import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  min-width: 100%;
  min-height: 180vh;
  background-color: black;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWindow = styled.div`
  border-radius: 10px;
  background-color: #f8dfff;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeaderBackground = styled.div`
  background-color: #40035d;
  color: white;
  width: 100%;
`;

export const Header = styled.h2`
  padding: 10px 30px;
  font-weight: 400;
`;

export const Message = styled.p`
  padding: 10px 30px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 0px 10px;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 20px;
  background-color: #40035d;
  align-self: flex-end;
  margin: 0px 30px 20px 0px;
`;
