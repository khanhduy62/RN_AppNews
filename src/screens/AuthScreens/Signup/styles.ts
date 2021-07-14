import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../../styles/index";

const styles = () => {
  return StyleSheet.create({
    wrapper: {
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
    },
    bottomQuery: {
      marginBottom: getHeight(20),
      flexDirection: "row",
      justifyContent: "center",
    },
    bottomQueryText: {
      fontSize: getHeight(16),
      textAlign: "center",
    },
  });
};

export default styles;
