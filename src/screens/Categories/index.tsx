import React, {useState} from 'react';
import {Text, SafeAreaView, ScrollView, View} from 'react-native';
import getGlobalStyles from '../../styles/globalStyles';
import getStyles from './styles';
import {CategoryCard} from '../../components/Cards';

const DATA = [
  {
    name: 'Sports',
    checked: false,
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    name: 'Politics',
    checked: false,
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    name: 'Life',
    checked: false,
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    name: 'Gaming',
    checked: false,
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    name: 'Animals',
    checked: false,
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    name: 'Nature',
    checked: false,
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    name: 'Food',
    checked: false,
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    name: 'Art',
    checked: false,
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    name: 'History',
    checked: false,
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    name: 'Fashion',
    checked: false,
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    name: 'Covid-19',
    checked: false,
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    name: 'Middle East',
    checked: false,
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
];

const Categories = ({navigation}: ScreenProp) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();
  const [categories, setCategories] = useState(DATA);

  const onPress = (param: {name: string}) => {
    setCategories(
      categories.map(el => {
        if (el.name === param.name) {
          return {
            ...el,
            checked: !el.checked,
          };
        }
        return el;
      }),
    );
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
