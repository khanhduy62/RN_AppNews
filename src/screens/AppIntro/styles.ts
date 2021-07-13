import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../styles";

const styles = () => {
  return StyleSheet.create({
    content: {
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
    },
    upperContent: {
      paddingTop: getHeight(70),
      height: "65%",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    bottomContent: {
      height: "35%",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
    heading: {
      fontSize: getHeight(24),
      textAlign: "center",
      color: colors.blackPrimary,
      marginBottom: getHeight(24),

    },
    headingBigger: {
      fontSize: getHeight(30),
      textAlign: "center",
      color: colors.blackPrimary,
      marginBottom: getHeight(24),
    },

    subHeading: {
      fontSize: getHeight(16),
      textAlign: "center",
      paddingHorizontal: getWidth(50),
      color: colors.grayPrimary,
      lineHeight: getHeight(24),
    },
    dotStyle: {
      backgroundColor: "#ccc",
      width: getWidth(16),
      height: getHeight(16),
      borderRadius: 50,
    },
    activedotStyle: {
      backgroundColor: colors.primary,
      width: getWidth(24),
      height: getHeight(8),
    },
    dots: {
      width: "100%",
    },
    carouselActionButtons: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
};

export default styles;
