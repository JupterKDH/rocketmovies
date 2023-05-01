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

    padding: 6.4rem 0;
    
   

    .movie{
      display: flex;
      align-items: center;
      margin: 2.4rem 0;

      >h1{
        padding-right: 1.7rem;

        font-size: 3.6rem;
        font-weight: 500;
      }

      svg{
        color: ${({theme}) => theme.COLORS.PINK};

        width: 2rem;
        height: 2rem;

        margin-right: 1rem
      }
    }

    .nameDate{
      display: flex;
      align-items: center;
      gap: 0.8rem;

      >img{
        width: 1.6rem;
        height: 1.6rem;
      }

      svg{
        color: ${({theme}) => theme.COLORS.PINK};
      }
    }
  }
`;

export const Content = styled.div`
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0 12.3rem;
  
  button{
    align-self: start;
  }

  >p{
    font-size: 1.6rem;
    line-height: 2.1rem;
  }
`;