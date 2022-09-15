## Project standards

Sample module - `src/modules/counter`

### Module file structure

- components - tsx files
- store - state management files

### Naming standards

#### component files

- PascalCase
- Append `Screen` to file name if it's gonna be used in the routes

#### module method names

- Slice
  - `(module name)Slice` - `counterSlice`
- Actions
  - `action(module)(action name)` - `actionCounterIncrement`
  - name is applied on module store slice on the module's store slice
  - note that `(module)/actions` files are not the redux actions. Use the ones exported on the module's store slice.
- Async Actions / Thunks
  - `thunk(module)(action name)` - `thunkCounterDelayedIncrement`
- Selectors
  - `select(module)(key name or something relevant)` - `selectCounterCount`
