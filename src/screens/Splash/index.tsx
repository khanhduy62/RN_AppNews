import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';

import {Images} from 'assets';
import {navigate} from 'navigation/NavigationService';

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate('AppIntro');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Images.app_logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Splash;
