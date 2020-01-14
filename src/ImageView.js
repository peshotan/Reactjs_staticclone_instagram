import IMAGES from "./Images";
import Image from "./Image";
import React from "react";

function ImageView({ match }) {
    let image = IMAGES[parseInt(match.params.id, 10) - 1];

    if (!image) return <div>Image not found</div>;

    return (
        <div>
            <h1>{image.title}</h1>
            <Image index={image.id} />
        </div>
    );
}

export default ImageView;

