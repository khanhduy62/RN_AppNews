import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../styles";

const styles = () => {
  return StyleSheet.create({
    card: {
      borderColor: colors.grayLighter,
      borderWidth: 1,
      borderRadius: 12,
      height: getHeight(56),
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: getWidth(16),
    },

    cardText: {

      fontSize: getHeight(16),
      color: colors.grayDarker,
    },
  });
};

export default styles;
