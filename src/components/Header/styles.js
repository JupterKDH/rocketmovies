import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 10.4rem;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.LINE};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.4rem;

  padding: 0 12.3rem;

  >h1{
    font-size: 3.4rem;
    font-weight: 700;
    line-height: 3.2rem;
    color: ${({theme}) => theme.COLORS.PINK};
  }

`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  >img{
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }

  >div{
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-right: 0.9rem;
    line-height: 2.4rem;

    min-width: 15rem;
    text-align:right;

    a{
      font-size: 1.4rem;
      color: ${({theme}) => theme.COLORS.GRAY_1};
      
    }

    strong{
      font-size: 1.8rem;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
`;