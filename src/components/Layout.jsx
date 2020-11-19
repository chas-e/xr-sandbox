import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Home from '../pages/home';
import Project from '../pages/projects';

export default function Layout(props) {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Header />
            <main
                style={{
                    flexGrow: 1,
                }}
            >
            </main>
            <Footer />
        </div>
    );
}