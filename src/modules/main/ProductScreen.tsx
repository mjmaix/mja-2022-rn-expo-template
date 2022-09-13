import React from 'react';

import { Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MainTabRouteProps } from '../../types';

export function ProductScreen(props: MainTabRouteProps<'Product'>) {
  return (
    <SafeAreaView>
      <Button
        title="Search screen"
        onPress={() => {
          props.navigation.navigate('Search', { query: undefined });
        }}
      />
      <Button
        title="Storefront screen"
        onPress={() => {
          props.navigation.navigate('Storefront');
        }}
      />
    </SafeAreaView>
  );
}
