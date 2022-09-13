import React from 'react';

import { Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AccountTabRouteProps } from '../../types';

export function EditProfileScreen(props: AccountTabRouteProps<'EditProfile'>) {
  return (
    <SafeAreaView>
      <Button
        title="Profile screen"
        onPress={() => {
          props.navigation.navigate('Profile');
        }}
      />
      <Button
        title="Login screen"
        onPress={() => {
          props.navigation.navigate('Login');
        }}
      />
    </SafeAreaView>
  );
}
