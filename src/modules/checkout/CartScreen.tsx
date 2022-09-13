import React from 'react';

import { Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CheckoutTabRouteProps } from '../../types';
import { alertNotYetImplemented } from '../../utils/notYetImplemented';

export function CartScreen(_props: CheckoutTabRouteProps<'Cart'>) {
  return (
    <SafeAreaView>
      <Button
        title="click me"
        onPress={() => {
          alertNotYetImplemented();
        }}
      />
    </SafeAreaView>
  );
}
