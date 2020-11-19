import React from 'react';
import Card from 'react-bootstrap/Card';


export default function ProjectCard(props) {
    return (
        <div>
            <Card>
                <h3>Title of Experience</h3>
                <p>Description of Experience</p>
                <input type="submit" value="game" name="game" />
                <input type="submit" value="threejs" name="threejs" />
            </Card>
        </div>
    );
}