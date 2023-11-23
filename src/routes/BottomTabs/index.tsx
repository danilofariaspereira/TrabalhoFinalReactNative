import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Profile from '../../screens/User'

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
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

export default BottomTabRoutes;