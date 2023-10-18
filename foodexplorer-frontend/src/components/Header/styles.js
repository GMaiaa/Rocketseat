import styled from "styled-components";

export  const Container = styled.header`
    background-color: ${({theme}) => theme.COLORS.DARK_600  };
    gap: 32px;

    height: 104px;
    width: 100%;

    padding: 0 123px;

    display: flex;
    align-items: center;
    
    >img{
        width: 197px;
        height: 30px;
    }
`
export const Logout = styled.button`
    background: none;
    border: none;

    font-size: 32px;
    color: ${({theme}) => theme.COLORS.LIGHT_100};

`

export const Receipt = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 216px;
        height: 56px;
        gap: 8px;

        border: none;
        border-radius: 5px;
        font-size: 16px;

        color: ${({theme}) => theme.COLORS.LIGHT_100};
        background-color: ${({theme}) => theme.COLORS.TOMATO_100}
`