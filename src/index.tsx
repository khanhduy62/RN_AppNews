import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, SafeAreaView, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import getStyles from "./styles/globalStyles";
import { colors } from "./styles/index";
import Icon from "./components/Icon";

// screens
import AppIntroScreen from "./screens/AppIntro";
import IntroScreen from "./screens/AppIntro/intro";
import SigninScreen from "./screens/AuthScreens/Signin";
import SignupScreen from "./screens/AuthScreens/Signup";
import SetFavouriteTopicsScreen from "./screens/AuthScreens/SetFavouriteTopics";
import ForgotPasswordScreen from "./screens/AuthScreens/ForgotPassword";
import VerificationCodeScreen from "./screens/AuthScreens/VerificationCode";
import CreateNewPasswordScreen from "./screens/AuthScreens/CreateNewPassword";
import HomeScreen from "./screens/Home";
import CategoriesScreen from "./screens/Categories";
import BookmarksScreen from "./screens/Bookmarks";
import ProfileScreen from "./screens/Profile";
import ReadPostScreen from "./screens/ReadPost";
import LanguageScreen from "./screens/Profile/Language";
import ChangePasswordScreen from "./screens/Profile/ChangePassword";
import TermsScreen from "./screens/Profile/Terms";
import PrivacyScreen from "./screens/Profile/Privacy";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  const styles = getStyles();

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        style: styles.tabs,
        showLabel: false,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return (
              <View style={styles.tabStyle}>
                <Icon
                  name="home"
                  color={focused ? colors.primary : colors.grayLight}
                />
              </View>
            );
          } else if (route.name === "Categories") {
            return (
              <View style={styles.tabStyle}>
                <Icon
                  name="category"
                  color={focused ? colors.primary : colors.grayLight}
                />
              </View>
            );
          } else if (route.name === "Bookmarks") {
            return (
              <View style={styles.tabStyle}>
                <Icon
                  name="bookmark"
                  color={focused ? colors.primary : colors.grayLight}
                />
              </View>
            );
          } else if (route.name === "Profile") {
            return (
              <View style={styles.tabStyle}>
                <Icon
                  name="user"
                  color={focused ? colors.primary : colors.grayLight}
                />
              </View>
            );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer fallback={<View />}>
      <Stack.Navigator initialRouteName="AppIntro" headerMode="none">
        <Stack.Screen name="App" component={AppNavigation} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
