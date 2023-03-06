import styled from 'styled-components';

export const User = styled.li`
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 10px;
`;

export const Button = styled.button`
    width: fit-content;
    font-size: 30px;
    font-weight: 500;
    margin: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 10px;
    cursor: pointer;

    :hover {
        background-color: blue;
    }
`;