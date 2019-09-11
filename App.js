import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './src/Pages/Home';
import Contato from './src/Pages/Contato';
import Horarios from './src/Pages/Horarios';
import Sobre from './src/Pages/Sobre';
import HomeTab from './src/components/TabNavigator'

const appNavigation = createStackNavigator(
  {
    HomeTab: { screen: HomeTab },
    Home: { screen: Home },
    Contato: { screen: Contato },
    Horarios: { screen: Horarios },
    Sobre: { screen: Sobre },
  }, {
  defaultNavigationOptions: {
    headerTintiColor: '#FFF',
    headerTitle: 'Cardápio',
    headerBackTitle: true,
    headerTitleStyle: {
      color: '#FFF'
    },
    headerStyle: {
      backgroundColor: '#8B0000',
      elevation: 0,
      shadowOpacity: 0,
    },
  }
});

export default createAppContainer(appNavigation);