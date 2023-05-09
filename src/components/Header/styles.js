import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 11.6rem;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.LINE};

  display: flex;
  justify-content: space-between;

  padding: 0 12.3rem;

  position: relative;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  >h1{
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.2rem;
    color: ${({theme}) => theme.COLORS.PINK};
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0 6.4rem;
  flex-grow: 1;
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
    margin-right: 0.9rem;

    line-height: 1.8rem;
    font-size: 1.4rem;

    height: 4rem;

    strong{
      font-size: 1.8rem;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-size: 1.4rem;
  line-height: 1.8rem;

  position: absolute;
  bottom: 3.8rem;
  right: 19.6rem;

`;