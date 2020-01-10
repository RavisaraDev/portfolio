import React from "react";
import styled from "styled-components";
import {NavBar} from "./components/NavBar";
import {MouseScroller} from './components/MouseScroller'

const Wrapper = styled.div`
    
`;

const Container = styled.div`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    line-height: 21px;
`;

const Content = styled.div`
    text-align: center;
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
        padding: 22px 0;
    }
    
    @media screen and (max-width: 500px) {
        font-size: 3rem;
        padding: 16px 0;
    }
`;

function App() {
    return (
        <>
            <Container>
                <NavBar/>
                <Content>
                    <FadeTitle>Hello!</FadeTitle>
                </Content>
            </Container>
            <MouseScroller/>
        </>
    );
}

export default App;