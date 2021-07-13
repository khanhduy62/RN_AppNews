import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../styles/index";

const styles = () => {
  return StyleSheet.create({
    wrapper: {
      flexDirection: "column",
      height: "100%",
      flex: 1,
      position: "relative",
    },
    postThumbnail: {
      position: "relative",
      height: getHeight(384),
      backgroundColor: "blue",
    },
    postThumbnailOverlay: {
      backgroundColor: "rgba(34,36,47,0.4)",
      position: "absolute",
      height: "100%",
      width: "100%",
      paddingVertical: getHeight(60),
      flexDirection: "column",
      justifyContent: "space-between",
    },
    postDetails: {
      position: "relative",
      backgroundColor: "white",
      top: -30,
      zIndex: 1,
      height: "100%",
      borderTopRightRadius: 24,
      borderTopLeftRadius: 24,
      paddingVertical: getHeight(24),
    },

    bodyText: {
      marginBottom: getHeight(24),
      color: colors.grayDarker,
      fontSize: getHeight(16),
      lineHeight: getHeight(24),
    },

    back_bookmark: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    share: {
      flexDirection: "row",
      justifyContent: "flex-end",
      marginTop: getHeight(32),
    },
    headline: {},
    tag: {
      backgroundColor: colors.primary,
      alignSelf: "flex-start",
      marginBottom: getHeight(16),
    },
    postTitle: {
      color: "white",

      fontSize: getHeight(20),
      lineHeight: getHeight(28),
    },
  });
};

export default styles;
