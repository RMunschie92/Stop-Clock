import React from 'react';
import { Alert, Picker, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Vibration, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
// import Sound from 'react-native-sound';

const DURATION = 10000;

const PATTERN = [1000, 1000, 1000, 1000];

var Sound = require('react-native-sound');

class AlarmScene extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0
      },
      lastPosition: {
        latitude: 0,
        longitude: 0
      },
      dummy: 0,
      latDifference: undefined,
      longDifference: undefined,
      message: 'not here'
    }
  }

  watchID: ?number = null;

  handleCurrentPosition() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let lat = parseFloat(position.coords.latitude);
        let long = parseFloat(position.coords.longitude);

        let initialRegion = {
          latitude: lat,
          longitude: long,
        }

        let newDummy = this.state.dummy += 1

        this.setState({
          initialPosition: initialRegion,
          dummy: newDummy
        });
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeOut: 5000, maximumAge: 1000 }
    );
  }

  handleWatchPosition() {
    this.watchID = navigator.geolocation.watchPosition(
      (position) => {
        let lat = parseFloat(position.coords.latitude);
        let long = parseFloat(position.coords.longitude);

        let watchedPosition = {
          latitude: lat,
          longitude: long,
        }

        let newDummy = this.state.dummy += 1

        this.setState({
          lastPosition: watchedPosition,
          dummy: newDummy
        });
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeOut: 5000, maximumAge: 1000 }
    );
    this.testProximity();
  }

  testProximity() {
    let latDiff = this.props.coords.latitude - this.state.lastPosition.latitude;
    let longDiff = this.props.coords.longitude - this.state.lastPosition.longitude;

    this.setState({ latDifference: latDiff, longDifference: longDiff });

    if (latDiff <= 0.0005 && longDiff <= 0.0005) {
      this.setState({ message: 'HERE' })
    }
  }

  componentDidMount = () => {
    this.handleCurrentPosition();
    setInterval(this.handleWatchPosition.bind(this), 5000);
    this.testProximity();
  }

  componentWillUnmount = () => {
    navigator.geolocation.clearWatch(this.watchID);
  }

  generatePrompt() {
    let stopsBefore = this.props.stopsBefore;
    let destination = this.props.destination;

    if (stopsBefore === 0) {
      return <View>
                <Text style={styles.prompt}>Stop Clock will alert you</Text>
                <Text style={styles.alertDestination}>at {destination}.</Text>
             </View>

    } else if ( stopsBefore === 1) {
        return <View>
                <Text style={styles.prompt}>Stop Clock will alert you </Text>
                <Text style={styles.alertDestination}>{stopsBefore} stop before {destination}.</Text>
               </View>
    } else {
        return <View>
                <Text style={styles.prompt}>Stop Clock will alert you</Text>
                <Text style={styles.alertDestination}>{stopsBefore} stops before {destination}.</Text>
               </View>
    }
  }

  startVibrationPattern() {
    Vibration.vibrate(PATTERN, true);
  }

  stopVibration() {
    Vibration.cancel();
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          {this.generatePrompt()}
          <Text style={styles.enjoy}>Enjoy your ride!</Text>
          <Text>Destination Coords: latitude: {this.props.coords.latitude} longitude: {this.props.coords.longitude}</Text>
          <Text>Last: Latitude: { this.state.lastPosition.latitude} Longitude: { this.state.lastPosition.longitude }</Text>
          <Text>Lat difference: { this.state.latDifference } Long difference: {this.state.longDifference}</Text>
          <Text>{this.state.message}</Text>

        </View>
        <View style={styles.buttonContainer}>

          <TouchableOpacity style={styles.button} onPress={() => this.stopVibration()}>
            <Text style={styles.buttonText}>Stop Vibration</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => this.startVibrationPattern()}>
            <Text style={styles.buttonText}>Pattern</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => this.handleCurrentPosition()}>
            <Text style={styles.buttonText}>Get Coords</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 300,
    marginRight: 20,
    marginLeft: 20
  },
  prompt: {
    fontSize: 25,
    textAlign: 'center'
  },
  alertDestination: {
    fontSize: 27,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  enjoy: {
    fontSize: 24
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 200,
    marginTop: 50
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 150,
    backgroundColor: '#d6d6d6',
    borderRadius: 4,
    borderWidth: 1
  },
  buttonText: {
    fontSize: 20
  }
})

export default AlarmScene;
