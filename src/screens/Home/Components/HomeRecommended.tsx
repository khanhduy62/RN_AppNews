import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import getGlobalStyles from '../../../styles/globalStyles';
import getStyles from '../styles';
import {PostCard} from 'components/Cards';
import {navigate} from 'navigation/NavigationService';

const HomeRecommended = () => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();
  const posts = [
    {
      title: 'A Simple Trick For Creating Color Palettes Quickly',
      category: 'UI/UX Design',
      image:
        'https://images.unsplash.com/photo-1547027072-332f09bd6bb3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dWklMjB1eHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    },
    {
      title: 'Six steps to creating a color palette',
      category: 'Art',
      image:
        'https://images.unsplash.com/photo-1490535004195-099bc723fa1f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    },
    {
      title: 'Creating Color Palette from world around you',
      category: 'Colors',
      image:
        'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
    },
  ];

  return (
    <View style={[styles.recommendedSection, globalStyles.container]}>
      <View style={styles.recommendedSectionHeader}>
        <Text style={styles.recommededSeactionTitle}>Recommended for you</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllOption}>See All</Text>
        </TouchableOpacity>
      </View>
      {posts.map((post, index) => {
        return (
          <PostCard
            post={post}
            onPress={() => navigate('ReadPost')}
            key={index}
          />
        );
      })}
    </View>
  );
};

export default HomeRecommended;
