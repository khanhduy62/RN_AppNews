import {StyleSheet} from 'react-native';
import {colors, getHeight, getWidth} from '../../styles/index';

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
      backgroundColor: 'rgba(34,36,47,0.4)',
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
      opacity: 0.2,
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
      width: '70%',
    },
    postCardContentCategory: {
      color: colors.grayPrimary,
      fontSize: getHeight(14),
      marginBottom: getHeight(8),
      letterSpacing: getWidth(1),
    },
    postCardContentTitle: {
      fontSize: getHeight(16),

      color: colors.blackPrimary,
      lineHeight: getHeight(24),
    },
  });
};

export default styles;
