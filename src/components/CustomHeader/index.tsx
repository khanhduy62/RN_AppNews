import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

import {colors, getHeight, getWidth} from 'styles';
import { Fonts } from 'assets';

type CustomHeaderProps = {
  title?: string;
  isBackButton: boolean;
  icBackSize?: number;
  renderLeftContent?: () => React.ReactNode;
  renderRightContent?: () => React.ReactNode;
  containerStyle?: object;
  handleBackPress?: () => void;
};
export default function CustomHeader({
  title,
  isBackButton,
  icBackSize = 15,
  renderLeftContent,
  renderRightContent,
  containerStyle,
  handleBackPress,
}: CustomHeaderProps) {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {isBackButton ? (
        <TouchableOpacity
          style={styles.backIcon}
          onPress={handleBackPress ? handleBackPress : onPressBack}>
          <EntypoIcon
            name="chevron-thin-left"
            color="#262626"
            size={icBackSize}
          />
        </TouchableOpacity>
      ) : renderLeftContent ? (
        <View style={styles.leftContentContainer}>{renderLeftContent()}</View>
      ) : null}

      {renderRightContent ? (
        <View style={styles.rightContentContainer}>{renderRightContent()}</View>
      ) : null}

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 44,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 5,
  },
  title: {
    color: '#262626',
    fontSize: 16,
    textAlign: 'center',
    ...Fonts.RobotoBold,
  },
  backIcon: {
    position: 'absolute',
    left: 0,
    paddingLeft: getWidth(20),
    paddingRight: getWidth(20),
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftContentContainer: {
    position: 'absolute',
    top: getHeight(0),
    left: getWidth(20),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContentContainer: {
    position: 'absolute',
    top: getHeight(0),
    right: getWidth(20),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
