import React from 'react';

import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import { RootNav } from './routes/RootBottomNav';

export function AppRoutes() {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <RootNav />
    </NavigationContainer>
  );
}
