import {StyleSheet} from 'react-native';
import {colors, getHeight, getWidth} from '../../styles/index';

import {Fonts} from 'assets';

const styles = () => {
  return StyleSheet.create({
    featureCard: {
      height: getHeight(256),
      width: getWidth(256),
      position: 'relative',
    },
    featureCardOverlay: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(34,36,47,0.6)',
      borderRadius: 12,
    },
    bookmarkIcon: {
      position: 'absolute',
      right: getWidth(24),
      top: getHeight(24),
    },
    featureCardContent: {
      position: 'absolute',
      bottom: getWidth(24),
      paddingHorizontal: getWidth(24),
    },
    featureCardCategory: {
      color: colors.grayLighter,
      marginBottom: getHeight(8),
      fontSize: getHeight(12),
    },
    featureCardTitle: {
      color: 'white',
      fontSize: getHeight(16),
      lineHeight: getHeight(24),
      fontWeight: 'bold',
    },
    featureCardImage: {
      height: '100%',
      width: '100%',
      borderRadius: 12,
    },

    // category card
    categoryCard: {
      height: getHeight(72),
      borderRadius: 12,
      width: '48%',
      marginBottom: getHeight(16),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    categoryCardChecked: {
      borderColor: '#3284FF',
      borderWidth: 4,
    },
    backgroundImageCategoryCard: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    vBlur: {
      flex: 1,
      opacity: 0.6,
      backgroundColor: 'black',
      width: '100%',
    },
    categoryCardText: {
      fontWeight: '600',
      color: 'white',
      fontSize: getHeight(16),
      position: 'absolute',
      alignSelf: 'center',
    },
    categoryIconChecked: {
      position: 'absolute',
      right: 2,
      top: 2,
    },

    // post card
    postCard: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: getHeight(16),
    },

    postCardContent: {
      marginLeft: getWidth(16),
      flex: 1,
    },
    postCardContentCategory: {
      color: colors.grayPrimary,
      fontSize: getHeight(14),
      marginBottom: getHeight(8),
      letterSpacing: getWidth(1),
      marginRight: getWidth(40),
      ...Fonts.Roboto,
    },
    postCardContentTitle: {
      fontSize: getHeight(16),
      color: colors.blackPrimary,
      lineHeight: getHeight(24),
      ...Fonts.RobotoBold,
    },
    postCardImage: {
      width: getWidth(96),
      height: getHeight(96),
      borderRadius: 12,
      backgroundColor: '#ccc',
    },
  });
};

export default styles;
