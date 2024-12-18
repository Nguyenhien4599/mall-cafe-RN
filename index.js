/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import App from './App';
import { name as appName } from './app.json';
import { theme } from './src/constants/Theme';

const Main = () => (
    <PaperProvider theme={theme}>
        <App />
    </PaperProvider>
);
AppRegistry.registerComponent(appName, () => Main);
