import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../styles";

const styles = () => {
  return StyleSheet.create({
    primaryButton: {
      backgroundColor: colors.primary,
      height: getHeight(56),
      width: "100%",
      borderRadius: 12,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    primaryButtonText: {
      color: "white",
      fontSize: getHeight(16),

    },
  });
};

export default styles;
