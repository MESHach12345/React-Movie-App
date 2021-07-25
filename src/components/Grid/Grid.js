import React from 'react';

//Styles
import { Wrapper, Content } from './Grid.styles';

function Grid(props) {
    return (
        <Wrapper>
            <h1>
                {props.header}
            </h1>
            <Content>
                {props.children}
            </Content>
        </Wrapper>
    );
};

export default Grid;