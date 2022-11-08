import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #4b4b4b;
    width: 90%;
    position: relative;
    margin: 8px;
    padding: 10px 20px;
    border-radius: 10px;
    color: white;
`;

export const Title = styled.p`
    font-weight: 500;
    font-size: 20px;
    color: white;
    margin: 10px 20px;
`;

export const Price = styled.p`
    position: absolute;
    top: 15px;
    right: 20px;
    font-weight: 400;
    font-size: 20px;
    color: white;
    padding: 10px 20px;
    background-color: #40035d;
    border: 1px solid white;
    border-radius: 10px;
`;