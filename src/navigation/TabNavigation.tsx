import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import getStyles from '../styles/globalStyles'
import { colors } from '../styles/index'
import Icon from '../components/Icon'

// screens
import HomeScreen from '../screens/Home'
import CategoriesScreen from '../screens/Categories'
import BookmarksScreen from '../screens/Bookmarks'
import ProfileScreen from '../screens/Profile'
const Tab = createBottomTabNavigator()
 
export const TabNavigation = () => {
  const styles = getStyles()

  return (
    <Tab.Navigator
      initialRouteName='Feed'
      tabBarOptions={{
        style: styles.tabs,
        showLabel: false
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Home') {
            return (
              <View style={styles.tabStyle}>
                <Icon
                  name='home'
                  color={focused ? colors.primary : colors.grayLight}
                />
              </View>
            )
          } else if (route.name === 'Categories') {
            return (
              <View style={styles.tabStyle}>
                <Icon
                  name='category'
                  color={focused ? colors.primary : colors.grayLight}
                />
              </View>
            )
          } else if (route.name === 'Bookmarks') {
            return (
              <View style={styles.tabStyle}>
                <Icon
                  name='bookmark'
                  color={focused ? colors.primary : colors.grayLight}
                />
              </View>
            )
          } else if (route.name === 'Profile') {
            return (
              <View style={styles.tabStyle}>
                <Icon
                  name='user'
                  color={focused ? colors.primary : colors.grayLight}
                />
              </View>
            )
          }
        }
      })}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Categories' component={CategoriesScreen} />
      <Tab.Screen name='Bookmarks' component={BookmarksScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}
