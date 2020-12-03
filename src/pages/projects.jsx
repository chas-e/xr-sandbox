import React from 'react';
import styled from 'styled-components';

import Card from '../components/Card';

const StyledDiv = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`


export default function Projects(props) {
    return (
        <StyledDiv>
            <Card />
        </StyledDiv>
    );
}