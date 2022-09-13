import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { EditProfileScreen } from '../../modules/account/EditProfileScreen';
import { LoginScreen } from '../../modules/account/LoginScreen';
import { ProfileScreen } from '../../modules/account/ProfileScreen';
import { AccountStackParamList } from '../../types';

const AccountStack = createNativeStackNavigator<AccountStackParamList>();

export function AccountStackScreen() {
  return (
    <AccountStack.Navigator initialRouteName="Profile">
      <AccountStack.Screen name="Profile" component={ProfileScreen} />
      <AccountStack.Group screenOptions={{ presentation: 'modal' }}>
        <AccountStack.Screen name="Login" component={LoginScreen} />
        <AccountStack.Screen name="EditProfile" component={EditProfileScreen} />
      </AccountStack.Group>
    </AccountStack.Navigator>
  );
}
