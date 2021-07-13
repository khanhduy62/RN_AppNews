import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../styles";

const styles = () => {
  return StyleSheet.create({
    noBookmark: {
      height: "110%",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 59,
    },
    noBookmarkText: {
      textAlign: "center",
      lineHeight: getHeight(24),
      fontSize: getHeight(16),
      color: colors.blackPrimary,
      marginTop: getHeight(24),

    },
  });
};

export default styles;
