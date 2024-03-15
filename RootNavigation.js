import {
    createNavigationContainerRef,
    StackActions,
  } from '@react-navigation/native';
  export const navigationRef = createNavigationContainerRef();
  export function screenNavigate(name, params) {
    if (navigationRef.isReady) {
      navigationRef.navigate(name, params);
    }
  }
  export function screenReplace(name, params) {
    if (navigationRef.isReady) {
      navigationRef.dispatch(StackActions.replace(name, params));
    }
  }
  