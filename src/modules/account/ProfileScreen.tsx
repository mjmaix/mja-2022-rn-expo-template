import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AccountTabRouteProps } from '../../types';

export function ProfileScreen(_props: AccountTabRouteProps<'Profile'>) {
  const navigation = useNavigation(); // Another way to navigate, global types configured
  return (
    <SafeAreaView>
      <Button
        title="Login screen"
        onPress={() => {
          navigation.navigate('Account', { screen: 'Login' });
        }}
      />
      <Button
        title="Edit Account screen"
        onPress={() => {
          navigation.navigate('Account', { screen: 'EditProfile' });
        }}
      />
      <Button
        title="Chat tab - messages screen"
        onPress={() => {
          navigation.navigate('Chat', { screen: 'Messages' });
        }}
      />
    </SafeAreaView>
  );
}
