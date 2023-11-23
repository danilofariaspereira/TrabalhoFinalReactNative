import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Search from '../../screens/Search';

const Tab = createBottomTabNavigator();

export type RootTabParamList = {
    Home: undefined
    Search: undefined
    Profile: undefined
    AboutUs: undefined
}

function BottomTabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Tab.Screen name="Search" component={Search} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default BottomTabRoutes;