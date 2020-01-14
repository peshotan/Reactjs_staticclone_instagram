import React from 'react';
import IMAGES from "../Images";
import Image from "../Image";
import {createGlobalStyle} from "styled-components";
import styled from "styled-components";
import ProfilePhoto from "../ProfilePhoto";

const OverFlowHidden = createGlobalStyle`
    body {
        overflow : hidden;
        }
`;

const ModalStyledDiv = styled.div`
                        position: absolute;
                        background: #fff;
                        top: ${({top}) => top}px;
                        left: 25%;
                        right: 25%;
                        padding: 15px;
                        border: 2px solid #444;
                        padding : 0;
                        min-height : 50vh
`;

const PostGrid = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr;
`;

const InfoGrid = styled.div`
    display : grid;
    margin : 20px;
`;

const MiniUserGrid = styled.div`
    display : grid;
    grid-template-columns :  1fr 2fr;
    grid-gap : 5px
`



export default function ({ match, history }) {
        let image = IMAGES[parseInt(match.params.id, 10) - 1];

        if (!image) return null;

        let back = e => {
            e.stopPropagation();
            history.goBack();
        };

        return (
            <div
                onClick={back}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    background: "rgba(0, 0, 0, 0.8)",
                    height :  "5000px",

                }}
            >
                <ModalStyledDiv top={window.scrollY + window.innerHeight/4}>
                    <OverFlowHidden/>
                    <PostGrid>
                        <Image inModal={true} index={image.id} />
                        <InfoGrid>
                            <MiniUserGrid>
                                <ProfilePhoto mini />
                                <h1>User Name</h1>
                            </MiniUserGrid>
                            <h1>{image.title}</h1>
                            <div>Comments</div>
                            <div>77 Likes</div>
                        </InfoGrid>
                    </PostGrid>
                </ModalStyledDiv>
            </div>
        );
    }
