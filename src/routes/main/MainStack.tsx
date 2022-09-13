import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ErrorScreen } from '../../modules/main/ErrorScreen';
import { ProductScreen } from '../../modules/main/ProductScreen';
import { SearchScreen } from '../../modules/main/SearchScreen';
import { StorefrontScreen } from '../../modules/main/StorefrontScreen';
import { MainStackParamList } from '../../types';

const MainStack = createNativeStackNavigator<MainStackParamList>();

export function MainStackScreen() {
  return (
    <MainStack.Navigator initialRouteName="Storefront">
      <MainStack.Screen name="Storefront" component={StorefrontScreen} />
      <MainStack.Screen name="Search" component={SearchScreen} />
      <MainStack.Screen name="Product" component={ProductScreen} />
      <MainStack.Screen name="Error" component={ErrorScreen} />
    </MainStack.Navigator>
  );
}
