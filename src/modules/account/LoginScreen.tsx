import React from 'react';

import { Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

import { mockAuthState } from '../../data/mock-data';
import { AccountTabRouteProps } from '../../types';

/**
 * NOTE: refer to https://reactnavigation.org/docs/auth-flow when implementing auth to adjust the routes
 * @param props
 * @returns
 */
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

      <Button
        title="Toggle signin"
        onPress={() => {
          mockAuthState.isLoggedIn = !mockAuthState.isLoggedIn;
        }}
      />
    </SafeAreaView>
  );
}
