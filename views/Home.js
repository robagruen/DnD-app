import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import PageTitle from '../components/PageTitle';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

let pageTitle = "Dungeons & Dragons Companion App";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PageTitle pageTitle={pageTitle}></PageTitle>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#444',
        flex: 1
    },
    headerText: {
        textAlign: 'center',
        fontSize: 32,
        color: '#fff',
        paddingBottom: 24
    },
    newCharacterButton: {
        backgroundColor: '#5E2CFF',
        width: 100,
        height: 100,
        borderRadius: 100,
    },

    diceButton: {
        width: 100,
        height: 100,
        borderRadius: 100,
        textAlign: 'center',
    },
    buttonText: {
        width: 100,
        height: 100,
        textAlign: 'center',
        color: '#fff',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    character: {
        height: 100,
        backgroundColor: '#fff'
    },
    characterInfo: {
        color: '#C24D4D',
    },
    charcterName: {
        fontSize: 24
    },
    characterDescription: {
        fontSize: 16
    },
    moreBtn: {
        backgroundColor: '#F08A4B',
    },
  });
