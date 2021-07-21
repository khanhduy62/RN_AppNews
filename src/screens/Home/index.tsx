/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {SearchCustomTextInput} from '../../components/Inputs';
import {colors, getWidth} from '../../styles';
import getGlobalStyles from '../../styles/globalStyles';
import getStyles from './styles';
import HomeRecommended from './Components/HomeRecommended';
import HomeFeatured from './Components/HomeFeatured';
import {fcmService} from 'fcm/FCMService';
import {localNotificationService} from 'fcm/LocalNotificationService';
import {isAndroid} from 'common';
import {categories} from 'common/data';

const TIME_OUT = 1000;

type HomeFeaturedRef = {
  refresh: () => void;
};

type HomeRecommendedRef = {
  refresh: () => void;
};

const Home = ({navigation}: ScreenProp) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();
  const [tags, settags] = useState(categories);
  const homeFeaturedRef = useRef<HomeFeaturedRef>();
  const homeRecommendedRef = useRef<HomeRecommendedRef>();
  const [activeTag, setactiveTag] = useState(tags[0]);
  const [refreshing, setRefreshingState] = useState(false);

  useEffect(() => {
    const onRegister = token => {
      console.log('log--onRegister-token ', token);
    };

    const onNotification = notification => {
      console.log('log--onNotification ', notification);
      localNotificationService.showNotification(
        0,
        notification.title,
        notification.body,
        {},
        {},
      );
    };

    const onOpenNotification = notification => {
      console.log('log--onOpenNotification ', notification);
    };

    if (isAndroid) {
      fcmService.registerAppWithFCM();
      fcmService.register(onRegister, onNotification, onOpenNotification);
      localNotificationService.configure();
    }

    return () => {
      if (isAndroid) {
        fcmService.unRegister();
        localNotificationService.unRegister();
      }
    };
  }, []);

  const _onRefresh = () => {
    setRefreshingState(true);
    homeFeaturedRef.current?.refresh();
    homeRecommendedRef.current?.refresh();
    setTimeout(() => {
      setRefreshingState(false);
    }, TIME_OUT);
  };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />
        }
        style={globalStyles.scrollView}>
        <View style={[globalStyles.container]}>
          <Text style={globalStyles.pageTitle}>Browse</Text>
          <Text style={globalStyles.pageSubHeading}>
            Discover things of this world
          </Text>
          <SearchCustomTextInput placeholder="Search" />
        </View>
        {/* category tags */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.tags}>
          {tags.map((tag, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ListPost', tag);
                }}
                key={index}
                style={[
                  globalStyles.tag,
                  {
                    marginRight:
                      index === tags.length - 1 ? getWidth(40) : getWidth(16),
                    backgroundColor:
                      activeTag === tag.name
                        ? colors.primary
                        : colors.grayLighter,
                  },
                ]}>
                <Text
                  style={[
                    globalStyles.tagText,
                    {
                      color: activeTag == tag.name ? 'white' : colors.grayPrimary,
                    },
                  ]}>
                  {tag.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        {/* featured */}
        <HomeFeatured ref={homeFeaturedRef} />
        {/* recommended */}
        <HomeRecommended ref={homeRecommendedRef} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
