import React from 'react';

import { Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AccountTabRouteProps } from '../../types';

export function LoginScreen(props: AccountTabRouteProps<'Login'>) {
  return (
    <SafeAreaView>
      <Button
        title="Profile screen"
        onPress={() => {
          props.navigation.navigate('Profile');
        }}
      />
      <Button
        title="Edit Account screen"
        onPress={() => {
          props.navigation.navigate('EditProfile');
        }}
      />
    </SafeAreaView>
  );
}
