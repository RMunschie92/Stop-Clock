import React from 'react';
import { StyleSheet, Text, View, StatusBar, Vibrate } from 'react-native';
import { Scene, Router, TabBar, Icon } from 'react-native-router-flux';
import RNPickerSelect from 'react-native-picker-select';


import WelcomeScene from './scenes/WelcomeScene.js';
import LinesScene from './scenes/LinesScene.js';
import ChooseGreen from './scenes/ChooseGreen.js';
import ActiveStopsScene from './scenes/ActiveStopsScene';
import SetAlarmScene from './scenes/SetAlarmScene';
import AlarmScene from './scenes/AlarmScene';

console.disableYellowBox = true;

const App = () => {
  return(
    <Router
      navigationBarStyle={styles.navBar}
      titleStyle={styles.navBarTitle}
      barButtonTextStyle={styles.barButtonTextStyle}
      barButtonIconStyle={styles.barButtonIconStyle}
    >
      <Scene
        key="root"
        headerTintColor="#fff"
      >

        <Scene
          key="welcome"
          initial={true}
          component={WelcomeScene}
        />

        <Scene
          key="lines"
          component={LinesScene}
          title="Lines"
        />

        <Scene
          key="choose"
          component={ChooseGreen}
          title="Choose Green Branch"
        />

        <Scene
          key="active"
          component={ActiveStopsScene}
          title="Choose Stop"
        />

        <Scene key="setAlarm"
          component={SetAlarmScene}
          title="Set Alarm"
        />

        <Scene key="alarm"
          component={AlarmScene}
          title="Alarm"
        />

      </Scene>
    </Router>
  )
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#0ba360',
    borderBottomColor: 'transparent',
    height: 60
  },
  navBarTitle: {
    color: '#fff',
    fontSize: 20
  },
  barButtonTextStyle: {
    color: '#fff'
  },
  barButtonIconStyle: {
    tintColor: 'white'
  }
});

export default App;
