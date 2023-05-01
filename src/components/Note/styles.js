import styled from "styled-components";


export const Container = styled.button`
  width: 100%;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_4};

  border: none;
  border-radius: 1rem;

  padding: 2.2rem;
  margin-bottom: 1.6rem;

  svg{
    color: ${({theme}) => theme.COLORS.PINK};
  }

  >h1{
    flex: 1;

    text-align: left;
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  .Rate{
    text-align: left ;
    margin: 0.8rem 0 1.5rem;
  }

  >p{
    color: ${({theme}) => theme.COLORS.GRAY_2};
    text-align: left;
  }

  >footer{
    width: 100%;

    display: flex;

    margin-top: 2.4rem;
  }
`;