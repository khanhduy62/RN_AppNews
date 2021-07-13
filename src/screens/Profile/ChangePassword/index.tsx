import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Icon from "../../../components/Icon";
import {colors, getHeight} from "../../../styles";
import getGlobalStyles from "../../../styles/globalStyles";
import getStyles from "./styles";
import {PasswordCustomTextInput} from "../../../components/Inputs";
import {PrimaryButton} from "../../../components/Buttons";

const ChangePassword = ({navigation}: ScreenProp) => {
    const globalStyles = getGlobalStyles();
    const styles = getStyles();

    return (
        <SafeAreaView style={globalStyles.safeArea}>
            <View style={[styles.heading, globalStyles.container]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="back" color={colors.grayDarker} />
                </TouchableOpacity>
                <Text style={styles.headingTitle}>Change Password</Text>
                <View></View>
            </View>
            <View style={globalStyles.container}>
                <PasswordCustomTextInput placeholder="Current Password" />
                <View style={{ marginVertical: getHeight(8) }}></View>
                <PasswordCustomTextInput placeholder="New Password" />
                <View style={{ marginVertical: getHeight(8) }}></View>
                <PasswordCustomTextInput placeholder="Repeat New Password" />
                <View style={{ marginVertical: getHeight(8) }}></View>
                <PrimaryButton
                    text="Change Password"
                    onPress={() => navigation.navigate("")}
                />
            </View>
        </SafeAreaView>
    );
};

export default ChangePassword;
