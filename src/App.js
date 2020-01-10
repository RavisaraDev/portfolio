import React from "react";
import styled from "styled-components";
import { NavBar } from "./components/NavBar";
import  { MouseScroller } from './components/MouseScroller'
import { SocialLinks } from "./components/SocialLinks";

const Wrapper = styled.div`
    color: white;
    line-height: 21px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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

class App extends React.Component {
    render() {
        return (
            <Wrapper>
                <NavBar/>
                <Content>
                    <FadeTitle>Hello!</FadeTitle>
                </Content>
                <MouseScroller/>
                {/*<small>Made with lots of coffee in sri lanka</small>*/}
            </Wrapper>
        );
    }
}

export default App;