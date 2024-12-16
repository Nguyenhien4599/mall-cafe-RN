import React from 'react';

import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Container from '../../src/components/Container';

const HomeScreen = () => {
    return (
        <Container>
            <Text style={styles.text}>Hello World</Text>
        </Container>
    );
};

const styles = StyleSheet.create({
    box: {
        width: '100%',
        backgroundColor: 'coral',
        height: 200,
    },
    text: {
        fontSize: 18,
        color: 'black',
    },
});

export default HomeScreen;
