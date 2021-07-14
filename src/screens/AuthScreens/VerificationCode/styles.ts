import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../../styles/index";

const styles = () => {
  return StyleSheet.create({
    verificationCodeInput: {
      height: getHeight(72),
      width: getWidth(72),
      borderRadius: 12,
      backgroundColor: colors.grayLighter,
      borderWidth: 0,
    },
    verificationCodeInputHighlighted: {
      borderColor: colors.primary,
      borderWidth: 1,
    },
  });
};

export default styles;
