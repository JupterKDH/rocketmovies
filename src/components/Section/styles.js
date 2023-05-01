import styled from "styled-components";

export const Container = styled.section`
  margin: 4rem 0;

  >h2{
    padding-bottom: 0.8rem;

    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 1.4rem;
    font-weight: 400;
  }
`;