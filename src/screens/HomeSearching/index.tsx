/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import debounce from 'lodash/debounce';

import styles from './styles';
import {colors} from '../../styles';
import Icon from 'components/Icon';
import getGlobalStyles from '../../styles/globalStyles';
import {searchApi} from 'services/api.services';
import Latest from './Components/Latest';
import Articles from './Components/Articles';

const HomeSearching = () => {
  const globalStyles = getGlobalStyles();
  const [isFocused, setisFocused] = useState(false);
  const [latest, setLatest] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFocus = () => setisFocused(true);
  const handleBlur = () => setisFocused(false);

  const getData = value => {
    setLoading(true);
    searchApi(value)
      .then(([e, res]) => {
        if (!e) {
          setLatest(res.latests || []);
          setArticles(res.articles || []);
        }
        setLoading(false);
      })
      .catch(_ => {
        setLatest([]);
        setArticles([]);
        setLoading(false);
      });
  };
  const handler = debounce(getData, 500);

  const onChangeText = text => {
    handler(text);
  };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={styles.container}>
        <View
          style={[
            styles.primaryTextInputStyle,
            {
              borderColor: isFocused ? colors.primary : 'transparent',
              backgroundColor: isFocused ? 'transparent' : colors.grayLighter,
            },
          ]}>
          <Icon
            name="search"
            color={isFocused ? colors.primary : colors.grayPrimary}
          />
          <TextInput
            onChangeText={onChangeText}
            placeholder={'Search'}
            style={styles.primaryTextInputArea}
            onBlur={handleBlur}
            onFocus={handleFocus}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TouchableOpacity>
            <Icon name="microphone" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {/* latest */}
        <Latest data={latest} />
        {/* featured */}
        <Articles data={articles} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeSearching;
