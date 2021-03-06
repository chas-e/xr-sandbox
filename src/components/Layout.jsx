import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Home from '../pages/home';
import Project from '../pages/projects';



const StyledLayout = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    main {
        flex-grow: 1;
    }
`

export default function Layout(props) {
    return (
        <StyledLayout>
            <Header />
            <main>
                <Switch>
                    <Home />
                    <Project />
                </Switch>
            </main>
            <Footer />
        </StyledLayout>
    );
}