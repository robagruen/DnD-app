import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeView from './views/Home.js';
import DiceRollView from './views/DiceRoll.js';

const App = createStackNavigator({
  'home' : {screen: HomeView},
  'diceRoll' : {screen: DiceRollView}
},{
  initialRouteName: 'home'
});

const AppContainer = createAppContainer(App);

export default AppContainer;