import React from 'react';
import styled from "styled-components";
import ProfilePhoto from "./ProfilePhoto";

const UserGrid = styled.div`
    display : grid;
    margin : 80px auto 50px auto;
    width : 800px;
    grid-gap : 5px;
    grid-template-areas : "photo name"
                          "photo label"
                          "photo description";
                         
    
    @media (max-width : 990px) {
    grid-template-areas : "photo name"
                          "label ."
                          "description .";
    padding : 10px;
    }
`;

const Photo = styled.div`
    display : grid;
    grid-area : photo;
    justify-content : center;
    align-items : center;
`;

const Name = styled.div`
    grid-area : name;
    font-size : 35px;
    font-family: 'Major Mono Display', monospace;
    align-self : center;
`;

const Label = styled.div`
    grid-area : label;
`;

const Description = styled.div`
    grid-area : description;
    max-width : 100%;
    @media (max-width : 990px) {
        grid-column : 1/3;
    }
`;



export default function () {
    return (
        <UserGrid>
            <Photo><ProfilePhoto/></Photo>
            <Name>Peshotan Irani</Name>
            <Label><strong>400</strong> followers</Label>
            <Description>Lorem ipsum dolor amet subway tile chartreuse distillery retro microdosing snackwave. Bitters humblebrag wolf la croix raclette sriracha poutine flannel. Distillery photo booth messenger bag, single-origin coffee organic yr small batch. Lo-fi microdosing flannel occupy hell of before they sold out man braid edison bulb. Edison bulb keytar tilde, actually flexitarian coloring book poke taiyaki pok pok pop-up farm-to-table green juice freegan tbh. Palo santo godard ramps seitan echo park. Viral vaporware tilde activated charcoal hexagon pickled trust fund chia shaman man braid waistcoat lyft truffaut 90's.</Description>
        </UserGrid>
    )
}