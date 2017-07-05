import React from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm'
import reducers from './src/reducers'
import Router from './src/Router'

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBEP0zX8QoGrMypGcHGWWLfDEWNpgpRkHM",
      authDomain: "manager-d17b2.firebaseapp.com",
      databaseURL: "https://manager-d17b2.firebaseio.com",
      projectId: "manager-d17b2",
      storageBucket: "manager-d17b2.appspot.com",
      messagingSenderId: "548137785576"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
