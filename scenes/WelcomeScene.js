import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';


class WelcomeScreen extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.statusBarContainer}>
          <StatusBar barStyle='light-content'/>
        </View>
        <View style={styles.main}>

          <View style={styles.header}>
            <Text style={styles.title}>Stop Clock</Text>
          </View>

          <View style={styles.cardsContainer}>

            <TouchableOpacity onPress={() => Actions.lines()}>
              <View style={styles.card}>
                <Icon
                  iconStyle={styles.icon}
                  name="bus"
                  type="font-awesome"
                />
                <Text style={styles.cardText}>Search line or destination...</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.card}>
                <Icon
                  iconStyle={styles.icon}
                  name="map-o"
                  type="font-awesome"
                />
                <Text style={styles.cardText}>Choose from map...</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#0ba360',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  statusBarContainer: {
    backgroundColor: '#0ba360',
  },
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
  },
  settings: {
    color: '#fff',
    fontSize: 25,
  },
  title: {
    color: '#fff',
    fontSize: 50,
  },
  cardsContainer: {
    flex: 7,
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 350,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  icon: {
    fontSize: 50,
    marginBottom: 10,
    color: '#0ba360',
  },
  cardText: {
    color: '#0ba360',
    fontSize: 20,
  },
});

export default WelcomeScreen;
