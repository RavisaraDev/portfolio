import React from "react";
import styled from "styled-components";

const TopBar = styled.div`
    background-color: rgb(28, 28, 32);
    padding: 40px 0;
    position: fixed;
    top: 0;
    left: 0;
    margin: auto;   
    width: 100%;
    
    @media screen and (max-width: 500px) {
        padding: 20px 0;
    }
    
    a{
        text-decoration: none;
    }
    
   .navbar-content{
        padding: 0 70px;
        display: flex;
        justify-content: space-between;
        
         @media screen and (max-width: 500px) {
            padding: 0 31px;
        }
    }
    
    
    
    .logo{
        color: #ffffff;
        font-weight: 500;   
        letter-spacing: 5px;
        text-transform: uppercase;
        
        @media screen and (max-width: 500px) {
            font-size: .8rem;
        }
    }
`;

export class NavBar extends React.Component {
    render() {
        return (
            <>
                <TopBar>
                    <div className="navbar-content">
                        <span className="logo">ravisaradev</span>
                        <a className="sendMail" href="mailto:ravisara.dev@gmail.com"><span className="logo">Mail</span></a>
                    </div>
                </TopBar>
            </>
        );
    }
}
