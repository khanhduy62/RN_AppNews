import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../../styles/index";

const styles = () => {
  return StyleSheet.create({
    wrapper: {
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
    },

    grid: {
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
  });
};

export default styles;
