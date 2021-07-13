import React, { useState } from "react";
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import getStyles from "./styles";
import getGlobalStyles from "../../../styles/globalStyles";
import {
  PrimaryCustomTextInput,
  PasswordCustomTextInput,
} from "../../../components/Inputs";
import { PrimaryButton } from "../../../components/Buttons";
import { colors, getHeight } from "../../../styles";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AltAuth from "../../../components/AltAuth";
import Navigation from "../../..";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const VerificationCode = ({ navigation }: ScreenProp) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.pageTitle}>Verification Code ✅</Text>
        <Text style={globalStyles.pageSubHeading}>
          You need to enter 4-digit code we send to your email adress.
        </Text>

        <View>
          <OTPInputView
            style={{ width: "100%", height: getHeight(72) }}
            pinCount={4}
            code="" //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.verificationCodeInput}
            codeInputHighlightStyle={styles.verificationCodeInputHighlighted}
            //   onCodeFilled={(code) => {
            //     console.log(`Code is ${code}, you are good to go!`);
            //   }}
          />

          <View style={{ marginVertical: getHeight(8) }}></View>
          <PrimaryButton
            text="Confirm"
            onPress={() => navigation.navigate("CreateNewPassword")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerificationCode;
