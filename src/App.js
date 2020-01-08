import React from "react";
import styled from "styled-components";
import Logo from "./assets/Logo.svg";

const Page = styled.div`
  text-align: center;

  small {
    font-size: 0.8rem;
    color: #545454;
  }
`;

const Wrapper = styled.div`
  color: white;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoBar = styled.div`
  margin: auto;
  text-align: center;

  img {
    margin: auto;
    width: 7%;
  }
`;

const Content = styled.div`
  max-width: 80%;
  text-align: center;
  

  h4 {
    letter-spacing: 5px;
  }

  p {
    max-width: 660px;
    font-size: 0.95rem;
    line-height: 1.6;
    font-weight: 400;
    margin: auto;
  }

  .sendMail{
    color: white;
    font-weight: 800;
    text-decoration: none;
    transition: all 0.5s ease;
  }

  .sendMail:hover {
    text-shadow: 0px 0px 12px #fff;
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
            <Page>
                <Wrapper>
                    <Content>
                        <LogoBar>
                            <img alt="logo" src={Logo} />
                        </LogoBar>
                        <div>
                            <h4>RAVISARA</h4>
                            <p>
                                Hi, I'm a UI/UX Designer & Frontend developer based in
                                Colombo, Sri Lanka. my home-town is Galle. turning complex
                                problems into simple. When i'm not working most of the time
                                passionate about travel & spend my time playing games. you can
                                find me and my portfolio by following below links. or <a className="sendMail" href="mailto:ravisara.dev@gmail.com">Mail me</a>
                            </p>
                        </div>
                        <Social>
                            <ul class="social-menu">
                                <li>
                                    <a
                                        rel="noopener noreferrer"
                                        href="https://www.instagram.com/ravisaradev/"
                                        target="_blank"
                                    >
                                        <i class="fab fa-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        rel="noopener noreferrer"
                                        href="https://twitter.com/ravisaradev"
                                        target="_blank"
                                    >
                                        <i class="fab fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        rel="noopener noreferrer"
                                        href="https://www.linkedin.com/in/nipunravisara/"
                                        target="_blank"
                                    >
                                        <i class="fab fa-linkedin-in" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        rel="noopener noreferrer"
                                        href="https://github.com/RavisaraDev"
                                        target="_blank"
                                    >
                                        <i class="fab fa-github"></i>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        rel="noopener noreferrer"
                                        href="https://codepen.io/ravisaradev"
                                        target="_blank">
                                        <i class="fab fa-codepen"></i>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        rel="noopener noreferrer"
                                        href="https://www.behance.net/Nipun_Ravisara"
                                        target="_blank"
                                    >
                                        <i class="fab fa-behance" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        rel="noopener noreferrer"
                                        href="https://dribbble.com/Ravisaradev"
                                        target="_blank"
                                    >
                                        <i class="fab fa-dribbble" />
                                    </a>
                                </li>
                            </ul>
                            <div />
                        </Social>
                        <small>Made with lots of coffee in sri lanka</small>
                    </Content>
                </Wrapper>
            </Page>
        );
    }
}

export default App;