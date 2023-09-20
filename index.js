import 'react-native-reanimated';

import { AppRegistry, LogBox } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

// Ignore log notification by message:
LogBox.ignoreLogs([
  'Require cycle:',
  'Non-serializable values were found in the navigation state',
  'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from',
]);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => App);
