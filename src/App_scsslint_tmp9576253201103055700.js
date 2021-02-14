import React from 'react';
import styled from 'styled-components';
import { NavBar } from './components/NavBar';
import { MouseScroller } from './components/MouseScroller';

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    @media only screen and (max-width: 900px) {
   {
        height: auto;
  }
}
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    line-height: 21px;
`;

const Content = styled.div`
    text-align: center;
    margin-top: 60px;
`;

const Description = styled.div`
    margin-left: 14px;
    margin-right: 25px;
    text-align: center;
    max-width: 51rem;
    line-height: 30px;
    
    @media screen and (max-width: 500px) {
      margin-left: 14px;
      margin-right: 25px;
    }
`;

const FadeTitle = styled.h1`
    font-size: 10rem;
    padding: 58px 0;
    background: -webkit-linear-gradient(#2b2b30,#1c1c20);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    
    @media screen and (max-width: 992px) {
        font-size: 5rem;
        line-height: 1.5;
        padding: 22px 0;
    }
    
    @media screen and (max-width: 500px) {
        font-size: 3rem;
        padding: 16px 0;
    }
`;

function App() {
  return (
    <Wrapper>
      <Container>
        <NavBar />
        <Content>
          <FadeTitle>#ravisaradev</FadeTitle>
        </Content>
        <Description>
          <p>
            I am a Developer and a UI/UX Designer based in Colombo,Sri Lanka who begins the journey as a
            freelance designer nearly 3 years ago and inspired by the community, Most of the time I used to
            build digital products while maintaining good and clean codebase. Mainly passionate
            about mobile development and working on improving my experience as a Fullstack developer. you can find
            my portfolio below or just drop me an email.
          </p>
        </Description>
      </Container>
      <MouseScroller />
    </Wrapper>
  );
}

export default App;
