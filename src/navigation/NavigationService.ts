import * as React from 'react';
import {
  CommonActions,
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string, params?: object) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  return navigationRef.current?.goBack();
}

export const resetPage = (page, params) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [
        {
          name: page,
          params,
        },
      ],
    }),
  );
};

export function replace(name, params) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop());
}

export function pop(count) {
  navigationRef.current?.dispatch(StackActions.pop(count));
}

export function push(name, params) {
  const pushAction = StackActions.push(name, params);
  navigationRef.current?.dispatch(pushAction);
}
