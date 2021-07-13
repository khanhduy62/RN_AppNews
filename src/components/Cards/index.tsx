import React from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";
import getGlobalStyles from "../../styles/globalStyles";
import getStyles from "./styles";
import Icon from "../../components/Icon";
import { colors, getHeight, getWidth } from "../../styles";

// post cards
type PostCardProps = {
  post: {
    title: string;
    image: string;
    category: string;
  };
  onPress: () => void;
};

export const PostCard = ({ post, onPress }: PostCardProps) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();

  return (
    <TouchableOpacity style={styles.postCard} onPress={() => onPress(post)}>
      <Image
        source={{ uri: post.image }}
        resizeMode="cover"
        style={{ width: getWidth(96), height: getHeight(96), borderRadius: 12 }}
      />
      <View style={styles.postCardContent}>
        <Text style={styles.postCardContentCategory}>{post.category}</Text>
        <Text style={styles.postCardContentTitle}>{post.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

// categoryCard
type CategoryCardProps = {
  topic: {
    checked: boolean;
    name: string;
  };
  onPress: () => void;
};

export const CategoryCard = ({ onPress, topic }: CategoryCardProps) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();

  return (
    <TouchableOpacity
      onPress={() => onPress(topic)}
      style={[
        styles.categoryCard,
        {
          backgroundColor: topic.checked ? colors.primary : colors.grayLighter,
        },
      ]}
    >
      <Text
        style={[
          styles.categoryCardText,
          { color: topic.checked ? "white" : colors.grayDarker },
        ]}
      >
        {topic.name}
      </Text>
    </TouchableOpacity>
  );
};

// Feature card
type FeatureCardProps = {
  feature: {
    image: string;
    category: string;
    title: string;
  };
  totalFeatures: string;
  index: number;
};

export const FeatureCard = ({
  feature,
  totalFeatures,
  index,
}: FeatureCardProps) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();

  return (
    <TouchableOpacity
      style={[
        styles.featureCard,
        {
          marginRight:
            index === totalFeatures.length - 1 ? getWidth(40) : getWidth(16),
        },
      ]}
    >
      <Image
        source={{ uri: feature.image }}
        resizeMode="cover"
        style={{ height: "100%", width: "100%", borderRadius: 12 }}
      />
      <View style={styles.featureCardOverlay}>
        <View style={styles.bookmarkIcon}>
          <Icon name="bookmark" color="white" />
        </View>
        <View style={styles.featureCardContent}>
          <Text style={styles.featureCardCategory}>
            {feature.category.toUpperCase()}
          </Text>
          <Text style={styles.featureCardTitle}>{feature.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
