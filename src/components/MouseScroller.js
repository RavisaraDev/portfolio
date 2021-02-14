import React from "react";
import styled from "styled-components";

const Mouse = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 100px 0px;
    
     .mouse {
          border: 1px solid #ffff;
          border-radius: 10px;
          width: 18px;
          height: 30px;
        }
        
        .scroller {
          position: relative;
          top: 5px;
          margin: auto;
          width: 5px;
          height: 5px;
          border-radius: 10px;
          background: #ffff;
          -webkit-animation: scrollWheel 5s infinite; /* Safari 4.0 - 8.0 */
          animation: scrollWheel 5s infinite;
          transition: all 2s ease;
        }
        
        @-webkit-keyframes scrollWheel {
          0%   {top: 5px;}
          20%   {top: 20px;}
          40%   {top: 5px;}
        }
        
        @keyframes scrollWheel {
          0%   {top: 5px;}
          20%   {top: 20px;}
          40%   {top: 5px;}
        }
`;

export function MouseScroller() {
    return (
        <Mouse>
            <div className="mouse">
                <div className="scroller"/>
            </div>
        </Mouse>
    );
}
