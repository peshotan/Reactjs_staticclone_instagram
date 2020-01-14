import React from 'react';
import styled ,{css} from "styled-components";
import UserGrid from "./UserGrid";
import IMAGES from "./Images";
import {Link} from "react-router-dom";

const PhotoGrid = styled.div`
        display : grid;
        grid-template-columns : repeat(3, 305px);
        justify-content : center;
        grid-gap : 10px;
        margin : 20px auto;
        ${({cascade}) => cascade && css`
            grid-auto-rows : 200px;
        `}
        
        @media (max-width : 990px) {
           grid-gap : 5px;
           grid-template-columns : repeat(3, 1fr);
           grid-auto-rows : calc(33vw -10px);
        }
`;

const LinkGrid = styled.div`
        display : grid;
        grid-template-columns : auto auto;
        justify-content : center;
        grid-gap : 10px;
        max-width : 300px;
        margin : 0 auto;
`;

const Tablink = styled(Link)`
        text-decoration : none;
        color : #ccc;
        text-transform : uppercase;
        letter-spacing : 0.1rem;
        ${({selected}) => selected && 'color : black;'}
`;

const ImageLink =  styled(Link)`
  width: 305px;
  height : 305px;
  background: no-repeat center/170% url(/img/${({index}) => index}.jpeg);
  ${({inModal}) => !inModal && css`
  : hover {
        opacity : 0.7
    }`};

   ${({inModal}) => inModal && css`
     width : 100%;
     height : 50vh;
  `}
  
  ${({cascade}) => cascade && css`
        width: auto;
        height : auto;
        background-size : cover;
        grid-gap:5px;
    
        &:nth-of-type(2n) {
            grid-row-start : span 2;
            }
  `}
`;

function Gallery(props) {

    const cascade  = props.location.search === '?type=cascade';

    return (
        <>
            <UserGrid/>

            <LinkGrid>
                <Tablink selected={props.location.search === '?type=cascade'} exact to={{pathname : `${props.match.url}`, search : "?type=cascade"}}>Cascade</Tablink>
                <Tablink selected={!(props.location.search === '?type=cascade')} exact to={{pathname : `${props.match.url}`}}>Square</Tablink>
            </LinkGrid>

            <PhotoGrid cascade={cascade}>
                {IMAGES.map((i) => (
                    <ImageLink
                        cascade={cascade}
                        index={i.id}
                        key={i.id}
                        to={{
                            pathname: `/img/${i.id}`,
                            // this is the trick!
                            state: { modal: true }
                        }}
                    />
                ))}
            </PhotoGrid>
        </>
    );
}

export default Gallery;
