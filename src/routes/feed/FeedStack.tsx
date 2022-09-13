import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NotificationsScreen } from '../../modules/feed/NotificationsScreen';
import { FeedStackParamList } from '../../types';

const FeedStack = createNativeStackNavigator<FeedStackParamList>();

export function FeedStackScreen() {
  return (
    <FeedStack.Navigator initialRouteName="Notifications">
      <FeedStack.Screen name="Notifications" component={NotificationsScreen} />
    </FeedStack.Navigator>
  );
}
