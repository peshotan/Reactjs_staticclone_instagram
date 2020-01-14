import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

const Image =  styled.img`
  width: 300px;
  height: 300px;
  background: no-repeat center/190% url(/img/${({index}) => index}.jpeg);
  ${({inModal}) => !inModal && css`
  : hover {
        opacity : 0.7
    }`};
    
     ${({inModal}) => inModal && css`
     width : 100%;
     height : 50vh;
  `}
`;

export default Image;