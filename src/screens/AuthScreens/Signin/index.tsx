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
import AltAuth from "../../../components/AltAuth";

const Signin = ({ navigation }: ScreenProp) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={[globalStyles.container, styles.wrapper]}>
        <View>
          <Text style={globalStyles.pageTitle}>Welcome Back 👋</Text>
          <Text style={globalStyles.pageSubHeading}>
            I am happy to see you again. You can continue where you left off by
            logging in
          </Text>

          <View>
            <PrimaryCustomTextInput placeholder="Email Address" icon="mail" />
            <View style={{ marginVertical: getHeight(8) }}></View>
            <PasswordCustomTextInput placeholder="Password" />
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
              style={styles.forgotPassword}
            >
              <Text style={[styles.forgotPasswordText]}>Forgot Password?</Text>
            </TouchableOpacity>
            <PrimaryButton
              text="Sign In"
              onPress={() => navigation.navigate("App")}
            />
          </View>

          <Text
            style={{
              marginVertical: getHeight(48),
              textAlign: "center",
              color: colors.grayPrimary,
              fontSize: getHeight(16),
            }}
          >
            or
          </Text>

          <AltAuth text="Sign In with Google" icon="google" />
          <View style={{ marginVertical: getHeight(8) }}></View>
          <AltAuth text="Sign In with Facebook" icon="facebook" />
        </View>
        <View style={styles.bottomQuery}>
          <Text style={styles.bottomQueryText}>Dont have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={[styles.bottomQueryText]}>
              {" "}
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signin;
