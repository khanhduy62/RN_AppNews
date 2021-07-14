import { StyleSheet, Platform } from 'react-native';
import { colors, getHeight, getWidth } from './index';

const styles = () => {
  return StyleSheet.create({
    safeArea: {
      height: '100%', paddingTop: '10%', flex: 1, backgroundColor: '#fff'
    },
    scrollView: {
      height: '100%', backgroundColor: '#fff'
    },
    container: {
      paddingHorizontal: getWidth(20)
    },
    pageTitle: {
      fontSize: getHeight(24), lineHeight: getHeight(32), fontWeight: '600', color: colors.blackPrimary, marginTop: getHeight(50)
    },
    pageSubHeading: {
      marginTop: getHeight(10), fontSize: getHeight(16), lineHeight: getHeight(24), fontWeight: '400', color: colors.grayPrimary, marginBottom: getHeight(32)
    },
    tabs: {
      borderColor: colors.primary, borderTopWidth: 1, height: getHeight(75)
    },
    tabStyle: {
      flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
    },
    tag: {
      height: 32, paddingHorizontal: getWidth(16), borderRadius: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
    },
    tagText: {
      letterSpacing: 1, fontSize: getHeight(12)
    }
  })
};

export default styles
