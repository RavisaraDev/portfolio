import React from "react";
import styled from "styled-components";
import {NavBar} from "./components/NavBar";

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
        font-size: 4rem;
        padding: 16px 0;
    }
`;

const Social = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ul {
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
  }

  li {
    margin: 0 10px;
  }

  i {
    font-size: 0.9rem;
    color: white;
  }

  .fa-instagram:hover {
    color: #bc2a8d;
  }

  .fa-twitter:hover {
    color: #55acee;
  }

  .fa-linkedin-in:hover {
    color: #0077b5;
  }

  .fa-behance:hover {
    color: #1769ff;
  }

  .fa-dribbble:hover {
    color: #ea4c89;
  }
  
  .fa-github:hover {
    color: #26C281;
  }
`;

class App extends React.Component {
    render() {
        return (
            <Wrapper>
                <NavBar/>
                <Content>
                    <FadeTitle>builddev</FadeTitle>
                </Content>
                <Social>
                    <ul class="social-menu">
                        <li>
                            <a
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/ravisaradev/"
                                target="_blank"
                            >
                                <i class="fab fa-instagram"/>
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noopener noreferrer"
                                href="https://twitter.com/ravisaradev"
                                target="_blank"
                            >
                                <i class="fab fa-twitter"/>
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/nipunravisara/"
                                target="_blank"
                            >
                                <i class="fab fa-linkedin-in"/>
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noopener noreferrer"
                                href="https://github.com/RavisaraDev"
                                target="_blank"
                            >
                                <i class="fab fa-github"/>
                            </a>
                        </li>

                        <li>
                            <a
                                rel="noopener noreferrer"
                                href="https://codepen.io/ravisaradev"
                                target="_blank">
                                <i class="fab fa-codepen"/>
                            </a>
                        </li>

                        <li>
                            <a
                                rel="noopener noreferrer"
                                href="https://www.behance.net/Nipun_Ravisara"
                                target="_blank"
                            >
                                <i class="fab fa-behance"/>
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noopener noreferrer"
                                href="https://dribbble.com/Ravisaradev"
                                target="_blank"
                            >
                                <i class="fab fa-dribbble"/>
                            </a>
                        </li>
                    </ul>
                    <div/>
                </Social>
                <small>Made with lots of coffee in sri lanka</small>
            </Wrapper>
        );
    }
}

export default App;