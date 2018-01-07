// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('albums', () => App);

import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from "./src/components/Header";

const App = () => {
    return (
        <Header />
    );
};

AppRegistry.registerComponent('albums', () => App);
