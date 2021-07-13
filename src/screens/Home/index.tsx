import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SearchCustomTextInput } from "../../components/Inputs";
import { colors, getWidth } from "../../styles";
import getGlobalStyles from "../../styles/globalStyles";
import getStyles from "./styles";
import Icon from "../../components/Icon";
import { FeatureCard, PostCard } from "../../components/Cards";

const Home = ({ navigation }: ScreenProp) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();
  const [tags, settags] = useState([
    "Random",
    "Sports",
    "Politics",
    "Life",
    "Gaming",
    "Animals",
    "Nature",
    "Food",
    "Art",
    "History",
    "Fashion",
  ]);
  const [activeTag, setactiveTag] = useState(tags[0]);
  const features = [
    {
      title: "The latest situation in the presidential election",
      image:
        "https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      category: "politics",
    },
    {
      title: "An updated daily front page",
      image:
        "https://images.unsplash.com/photo-1493210977798-4f655ac200a9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1724&q=80",
      category: "art",
    },
    {
      title: "FA Cup farce! Liverpool overwhelm Villa youngsters",
      image:
        "https://images.unsplash.com/photo-1518188049456-7a3a9e263ab2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bGl2ZXJwb29sfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      category: "sports",
    },
  ];
  const posts = [
    {
      title: "A Simple Trick For Creating Color Palettes Quickly",
      category: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1547027072-332f09bd6bb3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dWklMjB1eHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Six steps to creating a color palette",
      category: "Art",
      image:
        "https://images.unsplash.com/photo-1490535004195-099bc723fa1f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Creating Color Palette from world around you",
      category: "Colors",
      image:
        "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
    },
  ];

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView style={globalStyles.scrollView}>
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
          style={styles.tags}
        >
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
                ]}
              >
                <Text
                  style={[
                    globalStyles.tagText,
                    {
                      color: activeTag == tag ? "white" : colors.grayPrimary,
                    },
                  ]}
                >
                  {tag}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        {/* featured */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.features}
        >
          {features.map((feature, index) => {
            return (
              <FeatureCard
                totalFeatures={features}
                feature={feature}
                key={index}
                index={index}
              />
            );
          })}
        </ScrollView>
        {/* <Text>hi</Text> */}
        {/* recommended */}
        <View style={[styles.recommendedSection, globalStyles.container]}>
          <View style={styles.recommendedSectionHeader}>
            <Text style={styles.recommededSeactionTitle}>
              Recommended fo you
            </Text>
            <TouchableOpacity>
              <Text style={styles.seeAllOption}>See All</Text>
            </TouchableOpacity>
          </View>
          {posts.map((post, index) => {
            return (
              <PostCard
                post={post}
                onPress={() => navigation.navigate("ReadPost")}
                key={index}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
