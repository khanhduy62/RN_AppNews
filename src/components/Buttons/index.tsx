import React from "react";
import { TouchableOpacity, Text } from "react-native";
import getStyles from "./styles";

type Props = {
  text: string;
  onPress?: () => void;
};

export const PrimaryButton = ({ onPress, text }: Props) => {
  const styles = getStyles();
  return (
    <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.primaryButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};
