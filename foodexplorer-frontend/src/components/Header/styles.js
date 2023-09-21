import styled from "styled-components";

export  const Container = styled.header`
    grid-area: header;

    height: 114px;
    width: 100%;

    background-color: ${({theme}) => theme.COLORS.DARK_700 };

    display: flex;
    padding: 56px 28px 24px;
    
    font-size: 24px;
   


`

export const Logo = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;

    font-size: 32px;
    color: ${({theme}) => theme.COLORS.CAKE_100};

    > p{
        margin-left: 8px ;
        font-size: 21px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.LIGHT_100};

    }
    
`