/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import messaging from '@react-native-firebase/messaging';

import App from './App';
import {name as appName} from './app.json';
import {isAndroid} from './src/common';

if (isAndroid) {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('log--Message handled in the background!', remoteMessage);
  });

  function HeadlessCheck({isHeadless}) {
    if (isHeadless) {
      // App has been launched in the background by iOS, ignore
      return null;
    }

    return <App />;
  }

  AppRegistry.registerComponent(appName, () => HeadlessCheck);
} else {
  AppRegistry.registerComponent(appName, () => App);
}
