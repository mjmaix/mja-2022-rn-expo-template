// workaround: https://github.com/expo/expo/issues/6676

import 'expo/build/Expo.fx';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import 'react-native-gesture-handler';

import App from './src/App';

registerRootComponent(App);
