import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  border-radius: 1rem;
  margin-bottom: 0.8rem;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_2};

  color: ${({theme}) => theme.COLORS.GRAY_1};

  >input{
    height: 5.6rem;
    width: 100%;

    padding: 1.9rem 2.4rem;

    color: ${({theme}) => theme.COLORS.WHITE};

    background: transparent;

    border: 0;
    

    &:placeholder{
      color: ${({theme}) => theme.COLORS.GRAY_1};
    }
  }

  >svg{
      margin-left: 1.6rem;
  }
`;