import React from 'react';

import { Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FeedTabRouteProps } from '../../types';
import { alertNotYetImplemented } from '../../utils/notYetImplemented';

export function NotificationsScreen(_props: FeedTabRouteProps<'Notifications'>) {
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
