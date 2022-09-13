import React from 'react';

import { Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MainTabRouteProps } from '../../types';

export function ErrorScreen(props: MainTabRouteProps<'Error'>) {
  return (
    <SafeAreaView>
      <Button
        title="back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
}
