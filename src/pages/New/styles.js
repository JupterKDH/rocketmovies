import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas: 
  "header" 
  "content";

  >main{
    grid-area: content;
    overflow-y: auto;
  }

  Section{

    >h2{

      color: ${({theme}) => theme.COLORS.GRAY_2};
    }
  }

  .tags{
    display: flex;
    gap: 2.4rem;
    flex-wrap: wrap;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_3};
    padding: 1.6rem;

    margin-top: 2.4rem;
  }
`;

export const Form = styled.form`
  padding: 0 12.3rem;

  margin: 3.8rem auto;

  >header{
    display: flex;
    flex-direction: column;
    align-items: left;

    margin-bottom: 3.6rem;

    >h1{
      font-weight: 500;
      font-size: 36px;
      line-height: 47px;
    }
  }

  .Inputs{
    display:flex;
    flex-direction: row;
    gap: 4rem;

    margin-bottom: 4rem;
  }

  .Buttons{
    display:flex;
    flex-direction: row;
    gap: 4rem;

    margin-top: 4rem;

    >Button{
      margin-top: 4rem;
    
    }
    >Button:first-child{
      background-color: ${({theme}) => theme.COLORS.BACKGROUND_3};
      color: ${({theme}) => theme.COLORS.PINK};
    }
  
  }

  
  
`;