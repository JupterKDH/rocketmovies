
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header"
  "content";

  >main {
    grid-area: content;

    width: 100%;
    max-width: 113.7rem;
    margin: 4.8rem auto;

    header{
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-bottom: 3.8rem;

      h1{
        font-weight: 400;
      }
    }
  }
`;

export const Content = styled.div`
  max-height: calc(100vh - 29.7rem);

  overflow-y: auto;

  ::-webkit-scrollbar{
    width: .8rem;
  }

  ::-webkit-scrollbar-thumb{
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
  }
  
`;

export const NewMovie = styled(Link)`
  background-color: ${({theme}) => theme.COLORS.PINK};

  color: ${({theme}) => theme.COLORS.BACKGROUND_5};
  font-weight: 500;

  border: none;
  border-radius: 1rem;

  padding: 1.3rem 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;
