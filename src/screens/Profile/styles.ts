import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../styles";

const styles = () => {
  return StyleSheet.create({
    profile: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: getHeight(32),
    },
    profilePhoto: { width: 72, height: 72, borderRadius: 50 },
    profileDetail: {
      marginLeft: getWidth(24),
    },
    profileDetailName: {
      color: colors.blackPrimary,
      fontSize: getHeight(16),
      lineHeight: getHeight(24),
    },
    profileDetailEmail: {
      color: colors.grayPrimary,
      fontSize: getHeight(14),
      lineHeight: getHeight(24),
    },
    optionCard: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: getHeight(56),
      backgroundColor: colors.grayLighter,
      borderRadius: 12,
      paddingHorizontal: getWidth(24),
      marginBottom: getHeight(16),
    },
    optionCardText: {

      fontSize: getHeight(16),
      lineHeight: getHeight(24),
      color: colors.grayDarker,
      letterSpacing: 1,
    },
  });
};

export default styles;
