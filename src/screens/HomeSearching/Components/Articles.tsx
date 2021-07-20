import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import getGlobalStyles from '../../../styles/globalStyles';
import {navigate} from 'navigation/NavigationService';
import {colors, getHeight, getWidth} from 'styles';
import {getImageURL} from 'common';

type PostCardProps = {
  _id: number;
  title: string;
  image_200: string;
  categories: Array<string>;
  excerpt: string;
};

const Articles = ({data}) => {
  const globalStyles = getGlobalStyles();

  const onPress = post => () => navigate('ReadPost', post);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.recommendedSection, globalStyles.container]}>
        {!!data.length && (
          <View style={styles.recommendedSectionHeader}>
            <Text style={styles.recommededSeactionTitle}>Articles</Text>
          </View>
        )}
        {data.map((post: PostCardProps) => {
          return (
            <TouchableOpacity
              key={`${post._id}`}
              style={styles.postCard}
              onPress={onPress(post)}>
              <Image
                source={{uri: getImageURL(post.image_200)}}
                resizeMode="cover"
                style={styles.postCardImage}
              />
              <View style={styles.postCardContent}>
                <Text style={styles.postCardContentCategory} numberOfLines={1}>
                  {post.categories[0].toUpperCase()}
                </Text>
                <Text style={styles.postCardContentTitle} numberOfLines={2}>
                  {post.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  recommendedSection: {
    marginTop: getHeight(48),
  },
  recommendedSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: getHeight(24),
  },
  recommededSeactionTitle: {
    fontSize: getHeight(20),
    color: colors.blackPrimary,
  },
  seeAllOption: {
    color: colors.grayPrimary,
    fontSize: getHeight(14),
  },
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
  },
  postCardContentTitle: {
    fontSize: getHeight(16),
    color: colors.blackPrimary,
    lineHeight: getHeight(24),
  },
  postCardImage: {
    width: getWidth(96),
    height: getHeight(96),
    borderRadius: 12,
    backgroundColor: '#ccc',
  },
});
export default Articles;
