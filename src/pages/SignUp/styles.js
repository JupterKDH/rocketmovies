import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 13.6rem;

  min-width: 63.7rem;

  display: flex;
  flex-direction: column;
  
  justify-content: center;

  background: ${({theme}) => theme.COLORS.BACKGROUND};

  >h1{
    
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 6.3rem;  
    color: ${({theme}) => theme.COLORS.PINK};
  }

  >h2{
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.2rem;

    margin: 4.8rem 0;

  }

  >p{
    font-size: 1.4rem;
    color: ${({theme}) => theme.COLORS.GRAY_1};
  }

  >Button{
    margin-top: 0.8rem;
  }

  >a{
    margin: 4.2rem auto 0;

    color: ${({theme}) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

export const Background = styled.div`
  flex: 1;

  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

  filter:brightness(0.3);
`;