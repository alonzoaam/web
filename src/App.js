import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Constants from 'expo-constants';

const App = () => {
  return (
    /*<div className="App">
      <header className="App-header">
        <p>Hello</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reloadddddd.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <ScrollView keyboardDismissMode='on-drag' keyboardShouldPersistTaps={true}
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      
      <View style={{backgroundColor: 'lightgray', margin: 20}}>
        <Text style={styles.pageTitle}>Welcome!</Text>
      </View>
      <View style={{backgroundColor: 'white'}}>
        <Text style={styles.header}>About</Text>
      </View>
      <View style={{backgroundColor: 'lightblue'}}>
            <Image
              style={styles.image}
              source={require('./assets/MeWebsite.jpeg')}
            />
            <Image
              style={styles.image}
              source={require('./assets/MeWebsite.jpeg')}
            />
            <Image
              style={styles.image}
              source={require('./assets/MeWebsite.jpeg')}
            />
      </View>
    </ScrollView>
  );
}

export default App;

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 150,
    fontStyle: 'bold',
  },
  image: {
    width: 500,
    height: 500,
  },
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
  },
  header: {
    fontSize: 40,
  },
  mainContainer: {
    flex: 1,
    padding: '2rem',
    paddingTop: '5rem',
    justifyContent: 'flex-start',
  },
});
