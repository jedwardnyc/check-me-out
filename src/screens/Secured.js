import { Navigation } from 'react-native-navigation';
import { registerScreens } from './index';

registerScreens(); 

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Login',
      screen: 'healthChecker.Login',
      title: 'Login'
    }
  ]
});