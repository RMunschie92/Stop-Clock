import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class ChooseGreen extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Which branch are you taking?</Text>
        <View style={styles.main}>

          <TouchableOpacity style={styles.branch} onPress={() => Actions.active({ active: this.props.active.bostonCollege, lineColor: this.props.lineColor }) }>
            <View style={styles.bubble}>
              <Text style={styles.branchLetter}>B</Text>
            </View>
            <Text style={styles.branchName}>Boston College Branch</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.branch} onPress={() => Actions.active({ active: this.props.active.clevelandCircle, lineColor: this.props.lineColor }) }>
            <View style={styles.bubble}>
              <Text style={styles.branchLetter}>C</Text>
            </View>
            <Text style={styles.branchName}>Cleveland Circle Branch</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.branch} onPress={() => Actions.active({ active: this.props.active.riverside, lineColor: this.props.lineColor }) }>
            <View style={styles.bubble}>
              <Text style={styles.branchLetter}>D</Text>
            </View>
            <Text style={styles.branchName}>Riverside Branch</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.branch} onPress={() => Actions.active({ active: this.props.active.heathStreet, lineColor: this.props.lineColor }) }>
            <View style={styles.bubble}>
              <Text style={styles.branchLetter}>E</Text>
            </View>
            <Text style={styles.branchName}>Heath Street Branch</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  main: {
    justifyContent: 'space-between',
    marginTop: 50
  },
  headline: {
    fontSize: 30,
    marginTop: 50,
    textAlign: 'center'
  },
  branch: {
    backgroundColor: '#00843d',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 350,
    marginBottom: 40,
    borderRadius: 4,
    borderColor: '#00843d'
  },
  bubble: {
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 40,
    width: 40,
    borderWidth: 2,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  branchLetter: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  branchName: {
    color: '#fff',
    fontSize: 24
  }
})

export default ChooseGreen;
