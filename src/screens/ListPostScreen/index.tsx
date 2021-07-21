import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, View, FlatList, RefreshControl} from 'react-native';
import getGlobalStyles from '../../styles/globalStyles';
import getStyles from './styles';
import {PostCard} from '../../components/Cards';
import Icon from '../../components/Icon';
import {ACTION_EVENTS} from './Types';
import {useHandlerActions} from './Hooks';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import {navigate} from 'navigation/NavigationService';

const TIME_OUT = 1000;

type ParamList = {
  Detail: {
    id: string;
  };
};

const ListPostScreen = ({navigation}: ScreenProp) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();

  const route = useRoute<RouteProp<ParamList, 'Detail'>>();
  const id = route.params.id;
  const nameCate = route.params.name;
  const {loading, data, nextPage, handleAction} = useHandlerActions({
    actionName: ACTION_EVENTS.GET_ARTICLES_BY_CATEGORY,
  });
  const [refreshing, setRefreshingState] = useState(false);

  useEffect(() => {
    handleAction({
      category: id,
      page: 1,
    });
  }, []);

  const onLoadMore = () => {
    if (!loading && nextPage < 30) {
      handleAction({
        category: id,
        page: nextPage,
        loadmore: true,
      });
    }
  };

  const _onRefresh = () => {
    setRefreshingState(true);
    handleAction({
      category: id,
      page: 1,
    });
    setTimeout(() => {
      setRefreshingState(false);
    }, TIME_OUT);
  };

  const onItemClicked = item => () => {
    navigate('ReadPost', item);
  };

  const renderItem = ({item}) => (
    <PostCard post={item} onPress={onItemClicked(item)} key={`${item._id}`} />
  );

  const renderFooter = () =>
    loading ? <ActivityIndicator color="#28A085" /> : null;

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={globalStyles.scrollView}>
        <View style={[globalStyles.container]}>
          <Text style={globalStyles.pageTitle}>Categories</Text>
          <Text style={globalStyles.pageSubHeading}>{nameCate}</Text>
          {!loading && data.length === 0 && (
            <View style={styles.noBookmark}>
              <Icon name="noBookmark" />
              <Text style={styles.noBookmarkText}>
                You haven't saved any articles yet. Start reading and
                bookmarking them now
              </Text>
            </View>
          )}
        </View>
        <FlatList
          contentContainerStyle={globalStyles.container}
          data={data || []}
          renderItem={renderItem}
          keyExtractor={item => `${item._id}`}
          showsVerticalScrollIndicator={false}
          onEndReached={onLoadMore}
          ListFooterComponent={renderFooter}
          refreshControl={
            <RefreshControl
              tintColor="#28A085"
              refreshing={refreshing}
              onRefresh={_onRefresh}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default ListPostScreen;
