import React, { useState } from "react";
import getGlobalStyles from "../../styles/globalStyles";
import getStyles from "./styles";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { colors, getWidth } from "../../styles";
import Icon from "../Icon";

type TextInputProps = {
  placeholder: string;
  icon: string;
};

export const PrimaryCustomTextInput = ({
  placeholder,
  icon,
}: TextInputProps) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();
  const [isFocused, setisFocused] = useState(false);

  const handleFocus = () => setisFocused(true);
  const handleBlur = () => setisFocused(false);

  return (
    <View
      style={[
        styles.primaryTextInputStyle,
        {
          borderColor: isFocused ? colors.primary : "transparent",
          backgroundColor: isFocused ? "transparent" : colors.grayLighter,
        },
      ]}
    >
      <Icon
        name={icon}
        color={isFocused ? colors.primary : colors.grayPrimary}
      />
      <TextInput
        placeholder={placeholder}
        style={styles.primaryTextInputArea}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </View>
  );
};

type PasswordInputProps = {
  placeholder: string;
};
export const PasswordCustomTextInput = ({
  placeholder,
}: PasswordInputProps) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();
  const [isFocused, setisFocused] = useState(false);
  const [isVisible, setisVisible] = useState(false);

  const handleFocus = () => setisFocused(true);
  const handleBlur = () => setisFocused(false);

  const toggleVisibility = () => setisVisible(!isVisible);

  return (
    <View
      style={[
        styles.primaryTextInputStyle,
        {
          borderColor: isFocused ? colors.primary : "transparent",
          backgroundColor: isFocused ? "transparent" : colors.grayLighter,
        },
      ]}
    >
      <Icon
        name="lock"
        color={isFocused ? colors.primary : colors.grayPrimary}
      />
      <TextInput
        secureTextEntry={isVisible}
        placeholder={placeholder}
        style={styles.primaryTextInputArea}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <TouchableOpacity onPress={() => toggleVisibility()}>
        <Icon name="eye" />
      </TouchableOpacity>
    </View>
  );
};

//
type SearchInputProps = {
  placeholder: string;
};
export const SearchCustomTextInput = ({ placeholder }: SearchInputProps) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();
  const [isFocused, setisFocused] = useState(false);

  const handleFocus = () => setisFocused(true);
  const handleBlur = () => setisFocused(false);

  return (
    <View
      style={[
        styles.primaryTextInputStyle,
        {
          borderColor: isFocused ? colors.primary : "transparent",
          backgroundColor: isFocused ? "transparent" : colors.grayLighter,
        },
      ]}
    >
      <Icon
        name="search"
        color={isFocused ? colors.primary : colors.grayPrimary}
      />
      <TextInput
        placeholder={placeholder}
        style={styles.primaryTextInputArea}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <TouchableOpacity>
        <Icon name="microphone" />
      </TouchableOpacity>
    </View>
  );
};
