import React from 'react';
import styled from 'styled-components';


const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    position: relative;
    width: 400px;
    height: 541px;
    background: #333333;
    border: 10px solid #000000;
    box-shadow: 20px 20px 4px #623CEA;
    border-radius: 20px;
`

export default function Card(props) {
    return (
        <StyledCard>
            <img src="http://www.fillmurray.com/370/410" alt="Phil Murray"></img>
            <h3>Title of Experience</h3>
            <p>Description of Experience</p>
            <input type="submit" value="game" name="game" />
            <input type="submit" value="threejs" name="threejs" />
        </StyledCard>
    );
}