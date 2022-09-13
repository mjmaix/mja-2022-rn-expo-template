import { createNavigationContainerRef } from '@react-navigation/native';

import { RootBotomTabParamList } from '../types';
import { alertNotYetImplemented } from '../utils/notYetImplemented';

/**
 * Refer to https://reactnavigation.org/docs/navigating-without-navigation-prop
 */

export const navigationRef = createNavigationContainerRef<RootBotomTabParamList>();

export class NavigationActionHelper {
  private constructor() {}

  static navigate = (name: any, params: any) => {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params);
    }
  };

  static push = (..._args) => {
    if (navigationRef.isReady()) {
      alertNotYetImplemented();
      //   navigationRef.dispatch(StackActions.push(...args));
    }
  };
}
