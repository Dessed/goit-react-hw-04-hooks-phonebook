import styled from 'styled-components';

export const InputField = styled.form`
    width: 1000px;
    border: black solid 2px;
`;
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const Name = styled.span`
    font-size: 40px;
    font-weight: 500;
`;

export const Input = styled.input`
       width: 400px;
       height: 50px;
       margin: 20px 0;
       padding: 10px;
       font-size: 30px;
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

