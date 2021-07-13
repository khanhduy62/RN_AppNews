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
            fontFamily: "SF_Bold",
            fontSize: getHeight(24),
            lineHeight: getHeight(32),
            fontWeight: "600",
            color: colors.blackPrimary,
        },
        bodyRow: {
            color: colors.grayPrimary,
            fontSize: getHeight(16),
            lineHeight: getHeight(24),
            fontFamily: 'SF_Regular',
            marginBottom: getHeight(16)
        }
    });
};

export default styles;
