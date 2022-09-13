import React from 'react';

import { Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ChatTabRouteProps } from '../../types';
import { alertNotYetImplemented } from '../../utils/notYetImplemented';

export function MessagesScreen(_props: ChatTabRouteProps<'Messages'>) {
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
