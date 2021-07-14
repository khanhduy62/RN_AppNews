/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react'
import {
  useColorScheme,
  View
} from 'react-native'
import { Provider, rootStore } from './src/stores';
import { RootSiblingParent } from 'react-native-root-siblings';

import { Colors } from 'react-native/Libraries/NewAppScreen'

import { Navigation } from './src/App'

const App = () => {
  return (
    <Provider value={rootStore}>
      <RootSiblingParent>
        <Navigation />
      </RootSiblingParent>
    </Provider>
  )
}

export default App
