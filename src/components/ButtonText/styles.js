
import styled from "styled-components";


export const Container = styled.button`
  background: none;

  color: ${({theme}) => theme.COLORS.PINK};
  font-size: 1.6rem;

  border: none;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  margin-bottom: 2.4rem;
`;