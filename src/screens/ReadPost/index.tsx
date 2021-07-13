import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  View,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { colors, getHeight, getWidth } from "../../styles";
import getGlobalStyles from "../../styles/globalStyles";
import getStyles from "./styles";
import Icon from "../../components/Icon";

const Post = ({ navigation }: ScreenProp) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();

  const post = {
    title: "The latest situation in the presidential election",
    tag: "US Election",
    body: [
      "Leads in individual states may change from one party to another as all the votes are counted. Select a state for detailed results, and select the Senate, House or Governor tabs to view those races.",
      "For more detailed state results click on the States A-Z links at the bottom of this page. Results source: NEP/Edison via Reuters.",
      "Leads in individual states may change from one party to another as all the votes are counted. Select a state for detailed results, and select the Senate, House or Governor tabs to view those races.",
      "For more detailed state results click on the States A-Z links at the bottom of this page. Results source: NEP/Edison via Reuters.",
    ],
  };

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
                uri:
                  "https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
              }}
              resizeMode="cover"
              style={{
                height: "100%",
              }}
            />
            <View style={[styles.postThumbnailOverlay, globalStyles.container]}>
              <View>
                <View style={styles.back_bookmark}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="back" color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon name="bookmark" color="white" />
                  </TouchableOpacity>
                </View>
                <View style={styles.share}>
                  <TouchableOpacity>
                    <Icon name="share" color="white" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.headline}>
                <View style={[globalStyles.tag, styles.tag]}>
                  <Text style={[globalStyles.tagText, { color: "white" }]}>
                    {post.tag}
                  </Text>
                </View>
                <Text style={styles.postTitle}>{post.title}</Text>
              </View>
            </View>
          </View>
          <View style={styles.postDetails}>
            <View style={globalStyles.container}>
              {post.body.map((line, index) => {
                return (
                  <Text style={styles.bodyText} key={index}>
                    {line}
                  </Text>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Post;
