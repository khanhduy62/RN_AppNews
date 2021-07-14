import * as React from "react";
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import getStyles from "./styles";
import getGlobalStyles from "../../../styles/globalStyles";
import {
  PrimaryCustomTextInput,
  PasswordCustomTextInput,
} from "../../../components/Inputs";
import { PrimaryButton } from "../../../components/Buttons";
import { colors, getHeight } from "../../../styles";

const Signup = ({ navigation }: ScreenProp) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={[globalStyles.container, styles.wrapper]}>
        <View>
          <Text style={globalStyles.pageTitle}>Welcome to Nuntium 👋</Text>
          <Text style={globalStyles.pageSubHeading}>
            Hello, I guess you are new around here. You can start using the
            application after sign up.
          </Text>

          <View>
            <PrimaryCustomTextInput placeholder="Username" icon="user" />
            <View style={{ marginVertical: getHeight(8) }}></View>
            <PrimaryCustomTextInput placeholder="Email Address" icon="mail" />
            <View style={{ marginVertical: getHeight(8) }}></View>
            <PasswordCustomTextInput placeholder="Password" />
            <View style={{ marginVertical: getHeight(8) }}></View>
            <PasswordCustomTextInput placeholder="Repeat Password" />
            <View style={{ marginVertical: getHeight(8) }}></View>
            <PrimaryButton
              text="Sign Up"
              onPress={() => navigation.navigate("SetFavouriteTopics")}
            />
          </View>
        </View>
        <View style={styles.bottomQuery}>
          <Text style={styles.bottomQueryText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
            <Text style={[styles.bottomQueryText]}>
              {" "}
              Signin
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
