import React from 'react';
import {Text, SafeAreaView, ScrollView, View} from 'react-native';
import getGlobalStyles from '../../styles/globalStyles';
import getStyles from './styles';
import {CategoryCard} from '../../components/Cards';
import {categories} from 'common/data';
import { navigate } from 'navigation/NavigationService';


const Categories = () => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();
  // const [categories, setCategories] = useState(DATA);

  const onPress = (param: {id: string}) => {
    navigate('ListPost', {id: param.id});
    // setCategories(
    //   categories.map(el => {
    //     if (el.name === param.name) {
    //       return {
    //         ...el,
    //         checked: !el.checked,
    //       };
    //     }
    //     return el;
    //   }),
    // );
  };

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
                <CategoryCard key={index} topic={category} onPress={onPress} />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Categories;
