import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { navigationRef } from './routes/NavigateActionHelper';
import { RootNav } from './routes/RootBottomNav';

export function AppRoutes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNav />
    </NavigationContainer>
  );
}
