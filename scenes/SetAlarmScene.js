import React from 'react';
import { Picker, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import RNPickerSelect from 'react-native-picker-select';


class SetAlarmScene extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stopsBefore: 0,
      beforeValues: [
        {
          label: 'At your destination',
          value: 0
        },
        {
          label: '1 stop before your desination',
          value: 1
        },
        {
          label: '2 stops before your desination',
          value: 2
        },
        {
          label: '3 stops before your desination',
          value: 3
        },
      ]
    }
  }

  render() {

    let iconContainer = {
      justifyContent: 'center',
      backgroundColor: this.props.lineColor,
      marginBottom: 35,
      width: 200,
      height: 60,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: this.props.lineColor
    }

    return (
      <View style={styles.container}>

        <View style={styles.main}>

          <View style={styles.headerAndPicker}>

            <Text style={styles.myDestination}>Your destination is</Text>
            <Text style={styles.stopName}>{this.props.destination}</Text>
            <View style={styles.pickerContainer}>

              <Text style={styles.alertMe}>Stop Clock will alert you...</Text>
              <RNPickerSelect
                style={{ ...pickerStyles }}
                items={this.state.beforeValues}
                placeholder={{ }}
                onValueChange={(value) => {
                  this.setState({
                    stopsBefore: value,
                  });
                }}
              />

            </View>

          </View>

          <TouchableOpacity style={iconContainer} onPress={() => Actions.alarm({ destination: this.props.destination, coords: this.props.coords, stopsBefore: this.state.stopsBefore, lineColor: this.props.lineColor })}>
            <Icon
              iconStyle={styles.icon}
              name="stopwatch"
              type="entypo"
            />
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
    backgroundColor: '#fff',
  },
  main: {
    flex: 1,
    marginTop: 35,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerAndPicker: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  myDestination: {
    fontSize: 25,
    marginBottom: 15,
    textAlign: 'center',
  },
  stopName: {
    fontSize: 50,
    textAlign: 'center'
  },
  alertMe: {
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center'
  },
  pickerContainer: {
    height: 300,
    marginTop: 50,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontSize: 40,
    color: '#fff'
  }
});

const pickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    width: 275,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  },
});

export default SetAlarmScene;
