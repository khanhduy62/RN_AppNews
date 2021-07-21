/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Text,
} from 'react-native';
import debounce from 'lodash/debounce';
import isEmpty from 'lodash/isEmpty';

import styles from './styles';
import {colors} from '../../styles';
import Icon from 'components/Icon';
import getGlobalStyles from '../../styles/globalStyles';
import {searchApi} from 'services/api.services';
import Latest from './Components/Latest';
import Articles from './Components/Articles';
import CustomHeader from 'components/CustomHeader';
import { useRef } from 'react';

const HomeSearching = () => {
  const globalStyles = getGlobalStyles();
  const [isFocused, setisFocused] = useState(false);
  const [latest, setLatest] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const isSearched = useRef({value: false}).current;

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
    isSearched.value = true;
    handler(text);
  };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <CustomHeader isBackButton={true} containerStyle={styles.vHeader} />

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
        {loading && isEmpty(latest) && isEmpty(articles) && (
          <ActivityIndicator color={colors.primary} />
        )}
        {!loading && isSearched.value && isEmpty(latest) && isEmpty(articles) && (
          <Text style={styles.txtNotFound}>Data not found.</Text>
        )}
        {/* latest */}
        <Latest data={latest} />
        {/* featured */}
        <Articles data={articles} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeSearching;
