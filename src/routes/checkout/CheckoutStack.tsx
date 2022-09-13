import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CartScreen } from '../../modules/checkout/CartScreen';
import { CheckoutStackParamList } from '../../types';

const CheckoutStack = createNativeStackNavigator<CheckoutStackParamList>();

export function CheckoutStackScreen() {
  return (
    <CheckoutStack.Navigator initialRouteName="Cart">
      <CheckoutStack.Screen name="Cart" component={CartScreen} />
    </CheckoutStack.Navigator>
  );
}
