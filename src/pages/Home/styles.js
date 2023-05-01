
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas: 
  "header"
  "content";
`;


export const Content = styled.div`
  grid-area: content;

  padding: 0 12.3rem;

  overflow-y: auto;

  .Movie{
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;

    margin-top: 5rem;

    >h1{
      font-size: 3.2rem;
      line-height: 4.2rem;
      font-weight: 400;
    }
  }
  
`;

export const NewNote = styled(Link)`
  grid-area: newnote;
  width: 20.7rem;
  height: 5.6rem;

  background-color: ${({theme}) => theme.COLORS.PINK};

  color: ${({theme}) => theme.COLORS.BACKGROUND_5};
  font-weight: 500;

  border: 0;
  border-radius: 1rem;

  padding: 0 3.2rem;

  svg{
    margin-right: 0.8rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
