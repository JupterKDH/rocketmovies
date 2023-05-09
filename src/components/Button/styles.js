import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  background-color: ${({theme}) => theme.COLORS.PINK};

  color: ${({theme}) => theme.COLORS.BACKGROUND_5};
  font-weight: 500;

  border: 0;
  border-radius: 1rem;

  padding: 0 14.5rem;
  margin-top: 2.4rem;

  &:disabled{
    opacity: 0.5;
  }
`;