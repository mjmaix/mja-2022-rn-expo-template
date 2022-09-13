import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MessagesScreen } from '../../modules/chat/MessagesScreen';
import { ChatStackParamList } from '../../types';

const ChatStack = createNativeStackNavigator<ChatStackParamList>();

export function ChatStackScreen() {
  return (
    <ChatStack.Navigator initialRouteName="Messages">
      <ChatStack.Screen name="Messages" component={MessagesScreen} />
    </ChatStack.Navigator>
  );
}
