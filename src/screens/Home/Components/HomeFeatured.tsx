import React, {forwardRef, useEffect, useImperativeHandle} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';

import getStyles from '../styles';
import {FeatureCard} from 'components/Cards';
import {useHandlerActions} from '../Hooks';
import {ACTION_EVENTS} from '../Types';
import {navigate} from 'navigation/NavigationService';
import { colors } from 'styles';

type FeaturedProps = {
  _id: number;
  title: string;
  image: string;
  categories: Array<string>;
  excerpt: string;
  slug:string;
};

const HomeFeatured = (props, ref) => {
  const {loading, data, handleAction} = useHandlerActions({
    actionName: ACTION_EVENTS.GET_LATEST,
  });

  useImperativeHandle(ref, () => ({
    refresh: handleAction,
  }));

  useEffect(() => {
    handleAction();
  }, []);

  const styles = getStyles();

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.features}>
      {data.map((feature: FeaturedProps, index: number) => {
        return (
          <FeatureCard
            totalFeatures={data.length}
            feature={feature}
            key={`${feature._id}`}
            index={index}
            onPress={() => navigate('ReadPost',feature)}
          />
        );
      })}
      {loading && <ActivityIndicator color={colors.primary} />}
    </ScrollView>
  );
};

export default forwardRef(HomeFeatured);
