import styled from "styled-components";

export const Container = styled.button`
    display: flex ;
    justify-content: center;
    gap: 11px;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};

    height: 48px;
    border: 0;
    padding: 12px 46px;
    border-radius: 5px;
    align-items: center;

    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-family: 'Poppins', sans-serif;
    font-weight: 500;

    &:disabled{
        opacity: 0.5;
    }
`