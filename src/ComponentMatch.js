import React from 'react';

function ComponentMatch (props) {
    return(
        <h1>
            this is {props.match.url.slice(1)}
        </h1>
    )
}

export default ComponentMatch;