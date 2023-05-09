import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
 
  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_2};

  color: ${({theme}) => theme.COLORS.GRAY_2};

  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_2}` : "none"};
  border-radius:1rem;

  margin-right: 2.4rem;
  margin-bottom: 0.8rem;
  padding-right: 1.6rem;

  >button{
    border:none;

    background:none;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  >input{
    height: 5.6rem;
    width: 100%;

    padding: 1.6rem;

    color: ${({theme}) => theme.COLORS.WHITE};

    background: transparent;

    border: none;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_2};
    }
  }
`;