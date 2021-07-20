import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';

// screens
import AppIntroScreen from 'screens/AppIntro';
import IntroScreen from '../screens/AppIntro/intro';
import SigninScreen from '../screens/AuthScreens/Signin';
import SignupScreen from '../screens/AuthScreens/Signup';
import SetFavouriteTopicsScreen from '../screens/AuthScreens/SetFavouriteTopics';
import ForgotPasswordScreen from '../screens/AuthScreens/ForgotPassword';
import VerificationCodeScreen from '../screens/AuthScreens/VerificationCode';
import CreateNewPasswordScreen from '../screens/AuthScreens/CreateNewPassword';
import ReadPostScreen from '../screens/ReadPost';
import LanguageScreen from '../screens/Profile/Language';
import ChangePasswordScreen from '../screens/Profile/ChangePassword';
import TermsScreen from '../screens/Profile/Terms';
import PrivacyScreen from '../screens/Profile/Privacy';
import {TabNavigation} from './TabNavigation';
import {navigationRef} from './NavigationService';
import ListPostScreen from 'screens/ListPostScreen';
import HomeSearching from 'screens/HomeSearching';
const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef} fallback={<View />}>
      <Stack.Navigator initialRouteName="AppIntro" headerMode="none">
        <Stack.Screen name="App" component={TabNavigation} />
        <Stack.Screen name="AppIntro" component={AppIntroScreen} />
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen
          name="SetFavouriteTopics"
          component={SetFavouriteTopicsScreen}
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen
          name="VerificationCode"
          component={VerificationCodeScreen}
        />
        <Stack.Screen
          name="CreateNewPassword"
          component={CreateNewPasswordScreen}
        />
        <Stack.Screen name="ReadPost" component={ReadPostScreen} />
        <Stack.Screen name="Language" component={LanguageScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="Terms" component={TermsScreen} />
        <Stack.Screen name="Privacy" component={PrivacyScreen} />
        <Stack.Screen name="ListPost" component={ListPostScreen} />
        <Stack.Screen name="HomeSearching" component={HomeSearching} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
