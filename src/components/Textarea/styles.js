import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_2};

  color: ${({theme}) => theme.COLORS.WHITE};

  border: none;
  border-radius: 1rem;

  resize: none;

  margin-bottom: 0.8rem;
  padding: 1.6rem;

  &::placeholder{
    color: ${({theme}) => theme.COLORS.GRAY_2};
  }
`;