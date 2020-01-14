import React from 'react';
import styled, {css} from "styled-components";

const Photo = styled.div`
  width : 200px;
  height : 200px;
  border-radius : 50%;  
  background : no-repeat center/190% url(/img/4.jpeg);
  margin : 40px;
  ${({mini}) => mini && css`
    width : 50px;
    height : 50px;
    margin : 10px;
  `}
  
  @media (max-width : 990px) {
        height: 120px;
        width : 120px;
        margin : 10px;
    }
   
`;

export default Photo