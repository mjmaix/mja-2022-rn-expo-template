import React from 'react';

import { Button } from '@rneui/themed';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppDispatch, useAppSelector } from '../../../state-management';
import { actionCounterDecrement, actionCounterIncrement } from '../store/counterSlice';
import { thunkCounterDelayedIncrement } from '../store/thunks/counterThunks';

export function CounterScreen() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  // omit rendering logic

  return (
    <SafeAreaView>
      <Text>Current count: {count}</Text>
      <Button title="+1" onPress={() => dispatch(actionCounterIncrement(1))} />
      <Button title="-1" onPress={() => dispatch(actionCounterDecrement(1))} />
      <Button
        title="delayed +1"
        onPress={async () => {
          const result = await dispatch(thunkCounterDelayedIncrement(1));
          console.log('delayed increment result', result);
        }}
      />
    </SafeAreaView>
  );
}
