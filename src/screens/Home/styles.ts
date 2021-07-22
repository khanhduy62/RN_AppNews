import { Fonts } from "assets";
import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../styles";

const styles = () => {
  return StyleSheet.create({
    tags: {
      paddingLeft: getWidth(20),
      marginVertical: getHeight(24),
    },
    features: {
      paddingLeft: getWidth(20),
    },
    recommendedSection: {
      marginTop: getHeight(48),
    },
    recommendedSectionHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: getHeight(24),
    },
    recommededSeactionTitle: {
      fontSize: getHeight(20),
      color: colors.blackPrimary,
      ...Fonts.RobotoBold,
    },
    seeAllOption: {
      color: colors.grayPrimary,
      fontSize: getHeight(14),
    },
  });
};

export default styles;
