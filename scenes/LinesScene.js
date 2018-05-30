import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import stopData from './../data.js';


class LinesScene extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: stopData };
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.main}>
          <Text style={styles.headline}>Which line are you riding?</Text>
          <View style={styles.lineList}>

            <TouchableOpacity style={styles.blue} onPress={() => Actions.active({ active: this.state.data.blueLine, lineColor: '#003da5' })}>
              <Text style={styles.lineText}>Blue Line</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.green} onPress={() => Actions.choose({ active: this.state.data.greenLine, lineColor: '#00843d' })}>
              <Text style={styles.lineText}>Green Line</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.orange} onPress={() => Actions.active({ active: this.state.data.orangeLine, lineColor: '#ed8b00' })}>
              <Text style={styles.lineText}>Orange Line</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.red} onPress={() => Actions.active({ active: this.state.data.redLine, lineColor: '#da291c' })}>
              <Text style={styles.lineText}>Red Line</Text>
            </TouchableOpacity>

          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#0ba360',
  },
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headline: {
    alignSelf: 'center',
    marginTop: 50,
    fontSize: 30,
  },
  lineList: {
    flex: 1,
    borderRadius: 1,
    marginTop: 50,
    marginBottom: 100,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  lineText: {
    alignSelf: 'center',
    fontSize: 24,
    color: '#fff',
  },
  blue: {
    backgroundColor: '#003da5',
    marginBottom: 20,
    height: 65,
    width: 175,
    justifyContent: 'center',
    borderRadius: 4
  },
  green: {
    backgroundColor: '#00843d',
    marginBottom: 20,
    height: 65,
    width: 175,
    justifyContent: 'center',
    borderRadius: 4
  },
  orange: {
    backgroundColor: '#ed8b00',
    marginBottom: 20,
    height: 65,
    width: 175,
    justifyContent: 'center',
    borderRadius: 4
  },
  red: {
    backgroundColor: '#da291c',
    height: 65,
    width: 175,
    justifyContent: 'center',
    borderRadius: 4
  }
});

export default LinesScene;
