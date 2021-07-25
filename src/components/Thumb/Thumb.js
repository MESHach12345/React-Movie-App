import React from 'react';

//Styles

import {Image} from './Thumb.styles';

function Thumb(props) {
    return (
        <div>
            <Image src={props.image} alt="movie-thumb"/>
        </div>
    );
};

export default Thumb;