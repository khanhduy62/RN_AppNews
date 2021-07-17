import React, {forwardRef, useEffect, useImperativeHandle} from 'react';
import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import getGlobalStyles from '../../../styles/globalStyles';
import getStyles from '../styles';
import {PostCard} from 'components/Cards';
import {navigate} from 'navigation/NavigationService';
import {useHandlerActions} from '../Hooks';
import {ACTION_EVENTS} from '../Types';

type PostCardProps = {
  _id: number;
  title: string;
  image: string;
  categories: Array<string>;
  excerpt: string;
};

const HomeRecommended = (props, ref) => {
  const {loading, data, handleAction} = useHandlerActions({
    actionName: ACTION_EVENTS.GET_EDITOR_PICKS,
  });

  useImperativeHandle(ref, () => ({
    refresh: handleAction,
  }));

  useEffect(() => {
    handleAction();
  }, []);

  const globalStyles = getGlobalStyles();
  const styles = getStyles();

  return (
    <View style={[styles.recommendedSection, globalStyles.container]}>
      <View style={styles.recommendedSectionHeader}>
        <Text style={styles.recommededSeactionTitle}>Recommended for you</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllOption}>See All</Text>
        </TouchableOpacity>
      </View>
      {data.map((post: PostCardProps) => {
        return (
          <PostCard
            post={post}
            onPress={() => navigate('ReadPost')}
            key={`${post._id}`}
          />
        );
      })}
      {loading && <ActivityIndicator />}
    </View>
  );
};

export default forwardRef(HomeRecommended);
