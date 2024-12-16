import React from 'react';
import { StatusBar } from 'react-native';

import HomeScreen from './screens/home/HomeScreen';

const App = () => {
    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
            <HomeScreen />
        </>
    );
};

export default App;
