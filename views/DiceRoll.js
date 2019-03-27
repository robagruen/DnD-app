import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

let rollNum = 20;
let lastRolled = 20;

function rollDice(numOfSides) {
  lastRolled = numOfSides;
  rollNum = ((Math.random() * numOfSides) + 1); 
  console.log(rollNum);
}

export default class DiceRoll extends Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   displayNum = rollNum
    // };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.rollNum}>{rollNum}</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.touchableButton}>
              <Text style={styles.rollOptions}>Stack Roll</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableButton}>
              <Text style={styles.rollOptions}>Re-Roll</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={rollDice(2)} style={styles.touchableButton}>
              <Image source={require('./../assets/d20.png')} style={styles.dieImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={rollDice(4)} style={styles.touchableButton}>
              <Image source={require('./../assets/d20.png')} style={styles.dieImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={rollDice(6)} style={styles.touchableButton}>
              <Image source={require('./../assets/d20.png')} style={styles.dieImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={rollDice(8)} style={styles.touchableButton}>
              <Image source={require('./../assets/d20.png')} style={styles.dieImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={rollDice(10)} style={styles.touchableButton}>
              <Image source={require('./../assets/d20.png')} style={styles.dieImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={rollDice(12)} style={styles.touchableButton}>
              <Image source={require('./../assets/d20.png')} style={styles.dieImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={rollDice(20)} style={styles.touchableButton}>
              <Image source={require('./../assets/d20.png')} style={styles.dieImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={rollDice(100)} style={styles.touchableButton}>
              <Image source={require('./../assets/d20.png')} style={styles.dieImage} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#444',
      flex: 1
    },
    dieImage: {
      height: 100,
      width: 100,
      resizeMode: 'contain'
    },
    buttonRow: {
      flexDirection: 'row'
    },
    touchableButton: {
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 10
    },
    headerText: {
      textAlign: 'center',
      fontSize: 32,
      color: '#fff',
      paddingBottom: 24
    },
    rollNum: {
      fontSize: 100,
      textAlign: 'center',
      color: '#fff'
    },
    rollOptions: {
      width: '75%',
      textAlign: 'center',
      fontSize: 24,
      paddingBottom: 5,
      paddingTop: 5,
      textAlignVertical: 'center',
      backgroundColor: '#ffc802'
    }
});