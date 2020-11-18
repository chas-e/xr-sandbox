import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Home from '../pages/home';
import Project from '../pages/projects';

export default function Layout(props) {
    return (
        <>
            <Header />
            <main>
                <h2>Welcome to our sandbox!</h2>
            </main>
            <Footer />
        </>
    );
}