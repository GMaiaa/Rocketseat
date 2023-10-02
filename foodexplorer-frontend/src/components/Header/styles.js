import styled from "styled-components";

export  const Container = styled.header`
    grid-area: header;

    height: 114px;
    width: 100%;

    background-color: ${({theme}) => theme.COLORS.DARK_700 };

    display: flex;
    padding: 56px 28px 24px;
    box-shadow: 0 2px 2px rgba(0,0,0,0.5);

    
    font-size: 24px;
   

`

export const Logo = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;

    font-size: 30px;
    color: ${({theme}) => theme.COLORS.CAKE_100};

    > p{
        margin-left: 8px ;
        font-size: 21px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.LIGHT_100};

    }
    
`

export const Receipt = styled.div`
    font-size: 26px;
    
   

    > button{
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        justify-content: center;
        align-items: center;
        font-family: 'Poppins', sans-serif;
        font-size: 11px;
        background-color: ${({theme}) => theme.COLORS.TOMATO_100 };
        border: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        z-index: 1;
        position: fixed;
        
    }

`
