import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../styles";

const styles = () => {
  return StyleSheet.create({
    grid: {
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
  });
};

export default styles;
