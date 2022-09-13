import React from 'react';

import { Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MainTabRouteProps } from '../../types/navigation-types';

export function StorefrontScreen(props: MainTabRouteProps<'Storefront'>) {
  return (
    <SafeAreaView>
      <Button
        title="Search screen"
        onPress={() => {
          props.navigation.navigate('Search', { query: undefined });
        }}
      />
      <Button
        title="Product screen"
        onPress={() => {
          props.navigation.navigate('Product', { id: 0 });
        }}
      />
      <Button
        title="Error screen"
        onPress={() => {
          props.navigation.navigate('Error', { message: 'not found' });
        }}
      />

      <Button
        title="Account tab - Profile screen"
        onPress={() => {
          props.navigation.navigate('Account', { screen: 'Profile' });
        }}
      />
      <Button
        title="Account tab - Login screen"
        onPress={() => {
          props.navigation.navigate('Account', { screen: 'Login' });
        }}
      />
    </SafeAreaView>
  );
}
