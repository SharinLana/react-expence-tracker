import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 20px;
    height: 50px;
    width: 50px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: #2a2a2a;
`;

export const Year = styled.p`
    font-size: 12px;
    font-weight: 200;
    margin: 0;
`;

export const Month = styled.p`
    font-size: 12px;
    font-weight: 300;
    margin: 5px;
`;

export const Day = styled.p`
    font-size: 24px;
    font-weight: 500;
    margin: 0;
`;