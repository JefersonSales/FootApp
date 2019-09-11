import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../Pages/Home';
import Contato from '../Pages/Contato';
import Horarios from '../Pages/Horarios';
import Sobre from '../Pages/Sobre';

const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Contato: { screen: Contato },
    Horarios: { screen: Horarios },
    Sobre: { screen: Sobre },
  });

export default TabNavigator;