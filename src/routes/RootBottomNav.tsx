import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { RouteProp } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { RootBotomTabParamList } from '../types';

import { AccountStackScreen } from './account/AccountStack';
import { ChatStackScreen } from './chat/ChatStack';
import { CheckoutStackScreen } from './checkout/CheckoutStack';
import { FeedStackScreen } from './feed/FeedStack';
import { MainStackScreen } from './main/MainStack';

const RootBottomTabNavigator = createBottomTabNavigator<RootBotomTabParamList>();

const rootNavScreenOptions = ({ route }: { route: RouteProp<RootBotomTabParamList> }) => ({
  tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
    let iconName: typeof Ionicons['name'] = 'settings';

    if (route.name === 'Main') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'Feed') {
      iconName = focused ? 'notifications-circle' : 'notifications-circle-outline';
    } else if (route.name === 'Checkout') {
      iconName = focused ? 'cart' : 'cart-outline';
    } else if (route.name === 'Chat') {
      iconName = focused ? 'chatbox' : 'chatbox-outline';
    } else if (route.name === 'Account') {
      iconName = focused ? 'person' : 'person-outline';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
  headerShown: false,
});

export const RootNav = () => {
  return (
    <RootBottomTabNavigator.Navigator initialRouteName="Main" screenOptions={rootNavScreenOptions}>
      <RootBottomTabNavigator.Screen name="Main" component={MainStackScreen} />
      <RootBottomTabNavigator.Screen name="Feed" component={FeedStackScreen} />
      <RootBottomTabNavigator.Screen name="Chat" component={ChatStackScreen} />
      <RootBottomTabNavigator.Screen name="Checkout" component={CheckoutStackScreen} />
      <RootBottomTabNavigator.Screen name="Account" component={AccountStackScreen} />
    </RootBottomTabNavigator.Navigator>
  );
};
