import { createAsyncThunk } from '@reduxjs/toolkit';

// reference: https://redux-toolkit.js.org/usage/usage-with-typescript#createasyncthunk
export const thunkCounterDelayedIncrement = createAsyncThunk<
  // Return type of the payload creator
  { delay: string },
  // First argument to the payload creator
  number,
  // Types for ThunkAPI/
  {
    //   extra: {
    //     jwt: string;
    //   };
    rejectValue: Error;
    //   state: RootState;
  }
>('counter/delayedIncrement', async (value: number, thunkApi) => {
  const response = await fetch(`https://postman-echo.com/delay/${value}`, {
    method: 'GET',
  });
  if (response.status === 400) {
    // Return the known error for future handling
    return thunkApi.rejectWithValue((await response.json()) as Error);
  }
  return (await response.json()) as { delay: string };
});
