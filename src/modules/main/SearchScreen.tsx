import React from 'react';

import { Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MainTabRouteProps } from '../../types';

export function SearchScreen(props: MainTabRouteProps<'Search'>) {
  return (
    <SafeAreaView>
      <Button
        title="Storefront screen"
        onPress={() => {
          props.navigation.navigate('Storefront');
        }}
      />
      <Button
        title="Product screen"
        onPress={() => {
          props.navigation.navigate('Product', { id: 0 });
        }}
      />
    </SafeAreaView>
  );
}
