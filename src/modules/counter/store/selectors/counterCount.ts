import { RootState } from '../../../../state-management';

// Other code such as selectors can use the imported `RootState` type
export const selectCounterCount = (state: RootState) => state.counter.value;
