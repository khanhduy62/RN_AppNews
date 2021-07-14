import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../../styles";

const styles = () => {
  return StyleSheet.create({
    heading: {
      marginVertical: getHeight(24),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    headingTitle: {
      fontSize: getHeight(24),
      lineHeight: getHeight(32),
      fontWeight: "600",
      color: colors.blackPrimary,
    },
    languageCard: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems: 'center',
      marginBottom: getHeight(16),
      height: getHeight(56),
      paddingHorizontal: getWidth(16),
      borderRadius: 12
    },
    languageCardText: {
      fontSize: getHeight(16),
      letterSpacing: 1
    }
  });
};

export default styles;
