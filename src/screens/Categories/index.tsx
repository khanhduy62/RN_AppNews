import React from "react";
import { Text, SafeAreaView, ScrollView, View } from "react-native";
import getGlobalStyles from "../../styles/globalStyles";
import getStyles from "./styles";
import { CategoryCard } from "../../components/Cards";

const Categories = ({ navigation }: ScreenProp) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();

  const categories = [
    {
      name: "🏈   Sports",
    },
    {
      name: "⚖️   Politics",
    },
    {
      name: "🌞   Life",
    },
    {
      name: "🎮   Gaming",
    },
    {
      name: "🐻   Animals",
    },
    {
      name: "🌴   Nature",
    },
    {
      name: "🍔   Food",
    },
    {
      name: "🎨   Art",
    },
    {
      name: "📜   History",
    },
    {
      name: "👗   Fashion",
    },
    {
      name: "😷   Covid-19",
    },
    {
      name: "⚔️   Middle East",
    },
  ];

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView style={globalStyles.scrollView}>
        <View style={[globalStyles.container]}>
          <Text style={globalStyles.pageTitle}>Categories</Text>
          <Text style={globalStyles.pageSubHeading}>
            Thousands of articles in each category
          </Text>

          <View style={styles.grid}>
            {categories.map((category, index) => {
              return (
                <CategoryCard
                  key={index}
                  topic={category}
                  onPress={() => navigation.navigate("")}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Categories;
