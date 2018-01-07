import React, { Component } from 'react';
import { Text, View } from 'react-native';

const styles = {
    textStyles: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8'
    }
}

export default class Header extends Component<{}> {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyles}>Albums!</Text>
            </View>
        );
    }
}
