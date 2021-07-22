/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {colors, getHeight, getWidth} from '../../styles';
import getGlobalStyles from '../../styles/globalStyles';
import getStyles from './styles';
import Icon from '../../components/Icon';
import {ApiServices} from '../../services';
import {getImageURL} from 'common';
import {BookMarksDB} from 'helpers';
const Post = ({navigation, route}: ScreenProp) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();
  const [post, setPost] = useState({...route?.params, ...{body: []}});
  const [loading, setLoading] = useState(true);

  const [isBookMark, setBookmark] = useState(false);

  useEffect(() => {
    const params = route?.params;
    console.log('params:', params);
    loaData();
    async function loaData() {
      console.log('list bookmark:', await BookMarksDB.getListBookMaks());
      setBookmark((await BookMarksDB.findPost(params._id)) > -1);
      const [err, data] = await ApiServices.getArticle(post.slug);
      if (!err) {
        console.log('data post:', data);
        const {
          article: {content = []},
        } = data;
        setPost({...post, ...{body: content}});
        setLoading(false);
      }
    }
  }, []);

  return (
    <View>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.251)"
      />
      <ScrollView style={[globalStyles.scrollView]}>
        <View style={styles.wrapper}>
          <View style={styles.postThumbnail}>
            <Image
              source={{
                uri: getImageURL(post.image_200 || post.image),
              }}
              resizeMode="cover"
              style={{
                height: '100%',
              }}
            />
            <View style={[styles.postThumbnailOverlay, globalStyles.container]}>
              <View>
                <View style={styles.back_bookmark}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="back" color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={async () => {
                      if (!isBookMark) {
                        setBookmark(true);
                        await BookMarksDB.addPost({
                          _id: post._id,
                          title: post.title,
                          image: post.image,
                        });
                      } else {
                        setBookmark(false);
                        await BookMarksDB.removePost(post._id);
                      }
                    }}>
                    <Icon
                      name="bookmark"
                      color={isBookMark ? 'red' : 'white'}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.share}>
                  <TouchableOpacity>
                    <Icon name="share" color="white" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.headline}>
                {post?.categories?.length && (
                  <View style={[globalStyles.tag, styles.tag]}>
                    <Text style={[globalStyles.tagText, {color: 'white'}]}>
                      {post.categories[0] || ''}
                    </Text>
                  </View>
                )}
                <Text style={styles.postTitle}>{post.title}</Text>
              </View>
            </View>
          </View>
          <View style={styles.postDetails}>
            <View style={globalStyles.container}>
              {post?.body?.map((line, index) => {
                return (
                  <Text style={styles.bodyText} key={index}>
                    {line}
                  </Text>
                );
              })}
            </View>

            {loading && <ActivityIndicator />}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Post;
