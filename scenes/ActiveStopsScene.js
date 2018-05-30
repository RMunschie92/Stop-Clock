import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class ActiveStopsScene extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let activeStops = this.props.active.map((stop, index) => {
      return (
        <TouchableOpacity key={index} style={styles.listItem} onPress={() => Actions.setAlarm({ destination: stop.name, coords: stop.coords, lineColor: this.props.lineColor })}>
          <Text style={styles.listText}>{stop.name}</Text>
        </TouchableOpacity>
      )
    })

    return(
      <View style={styles.container}>
        <Text style={styles.select}>Select your stop</Text>
          <ScrollView contentContainerStyle={styles.stopList}>
            {activeStops}
          </ScrollView>
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
  select: {
    fontSize: 25,
    marginTop: 20,
    paddingBottom: 20,
  },
  stopList: {
    marginTop: 35,
    marginBottom: 35,
    alignSelf: 'stretch',
    alignItems: 'flex-start',
  },
  listItem: {
    flex: 1,
    height: 40,
    marginBottom: 60,
  },
  listText: {
    textAlign: 'center',
    fontSize: 20,
  }
});


export default ActiveStopsScene;
