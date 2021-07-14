import React, { useState } from "react";
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import getStyles from "./styles";
import getGlobalStyles from "../../../styles/globalStyles";
import { PrimaryCustomTextInput } from "../../../components/Inputs";
import { PrimaryButton } from "../../../components/Buttons";
import { colors, getHeight } from "../../../styles";

const ForgotPassword = ({ navigation }: ScreenProp) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.pageTitle}>Forgot Password 🤔</Text>
        <Text style={globalStyles.pageSubHeading}>
          We need your email adress so we can send you the password reset code.
        </Text>

        <View>
          <PrimaryCustomTextInput placeholder="Email Address" icon="mail" />
          <View style={{ marginVertical: getHeight(8) }}></View>
          <PrimaryButton
            text="Next"
            onPress={() => navigation.navigate("VerificationCode")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
