/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
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
  const [tags, settags] = useState([
    'Random',
    'Sports',
    'Politics',
    'Life',
    'Gaming',
    'Animals',
    'Nature',
    'Food',
    'Art',
    'History',
    'Fashion',
  ]);
  const homeFeaturedRef = useRef<HomeFeaturedRef>();
  const homeRecommendedRef = useRef<HomeRecommendedRef>();
  const [activeTag, setactiveTag] = useState(tags[0]);
  const [refreshing, setRefreshingState] = useState(false);

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
                onPress={() => setactiveTag(tag)}
                key={index}
                style={[
                  globalStyles.tag,
                  {
                    marginRight:
                      index === tags.length - 1 ? getWidth(40) : getWidth(16),
                    backgroundColor:
                      activeTag === tag ? colors.primary : colors.grayLighter,
                  },
                ]}>
                <Text
                  style={[
                    globalStyles.tagText,
                    {
                      color: activeTag == tag ? 'white' : colors.grayPrimary,
                    },
                  ]}>
                  {tag}
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
