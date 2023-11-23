import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Profile from '../../screens/User'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export type RootTabParamList = {
  Home: undefined
  Search: undefined
  Profile: undefined
  AboutUs: undefined
}

function BottomTabRoutes() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: '#000', paddingBottom: 2 },
      tabBarInactiveTintColor: '#aaa',
      tabBarActiveTintColor: '#fff',
      tabBarLabel:""
    }}>
      <Tab.Screen name="Home" component={Home} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{ 
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={size} />
        ),
      }}  />
    </Tab.Navigator>
  );
}

export default BottomTabRoutes;