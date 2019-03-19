import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class PageTitle extends React.Component {
    render() {
        return (
            <Text style={styles.headerText}>{this.props.pageTitle}</Text>
        );
    }
}

const styles = StyleSheet.create({
    headerText: {
        textAlign: 'center',
        fontSize: 32,
        color: '#fff',
        paddingBottom: 24
    }
});