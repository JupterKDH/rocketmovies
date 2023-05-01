import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled(Link)`
  background: none;

  color: ${({theme}) => theme.COLORS.PINK};
  font-size: 1.6rem;

  border: none;

  display: flex;
  align-items: center;
  gap: 0.8rem;
`;