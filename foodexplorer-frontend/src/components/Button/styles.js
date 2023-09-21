import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};

    height: 48px;
    border: 0;
    padding: 0 12px;
    margin-top: 12px;
    border-radius: 5px;

    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-family: 'Poppins', sans-serif;
    font-weight: 500;

    &:disabled{
        opacity: 0.5;
    }
`