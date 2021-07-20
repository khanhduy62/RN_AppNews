import React, {memo} from 'react';
import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import {getWidth} from 'styles';
import {getImageURL} from 'common';
import {navigate} from 'navigation/NavigationService';

type PostCardProps = {
  _id: number;
  title: string;
  image: string;
  image_200: string;
  categories: Array<string>;
  excerpt: string;
};

const Latest = ({data}) => {
  const onPress = post => () => navigate('ReadPost', post);
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {data.map((post: PostCardProps) => {
        return (
          <TouchableOpacity key={`${post._id}`} onPress={onPress(post)}>
            <ImageBackground
              source={{uri: getImageURL(post.image_200)}}
              style={styles.imgBg}>
              <View style={styles.vWrapper}>
                <Text style={styles.txtTitle} numberOfLines={1}>
                  {post.title}
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: getWidth(20),
  },
  imgBg: {
    width: getWidth(300),
    height: getWidth(150),
    borderRadius: 10,
    marginRight: 20,
    overflow: 'hidden',
  },
  vWrapper: {
    position: 'absolute',
    width: getWidth(300),
    height: getWidth(150),
    backgroundColor: 'rgba(0,0,0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 5,
  },
});
export default memo(Latest);
