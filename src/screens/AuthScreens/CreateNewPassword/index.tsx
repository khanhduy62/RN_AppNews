import React, { useState } from "react";
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import getStyles from "./styles";
import getGlobalStyles from "../../../styles/globalStyles";
import { PasswordCustomTextInput } from "../../../components/Inputs";
import { PrimaryButton } from "../../../components/Buttons";
import { colors, getHeight } from "../../../styles";

const CreateNewPassword = ({ navigation }: ScreenProp) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.pageTitle}>Create New Password 🔒</Text>
        <Text style={globalStyles.pageSubHeading}>
          You can create a new password, please dont forget it too.
        </Text>

        <View>
          <PasswordCustomTextInput placeholder="New Password" />
          <View style={{ marginVertical: getHeight(8) }}></View>
          <PasswordCustomTextInput placeholder="Repeat New Password" />
          <View style={{ marginVertical: getHeight(8) }}></View>
          <PrimaryButton
            text="Confirm"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateNewPassword;
