import { createNativeStackNavigator } from '@react-navigation/native-stack'

import login from '../screens/Login/index';
import cadastro from '../screens/Register/index';
import welcome from '../screens/Welcome/index';
import home from '../screens/Home'
import search from '../screens/Search';
import User from '../screens/User';


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (

        <Stack.Navigator>

            <Stack.Screen

                name="login"
                component={login}
                options={{ headerShown: false }}
            />

            <Stack.Screen

                name="home"
                component={home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="cadastro"
                component={cadastro}
                options={{ headerShown: false }}
            />

            <Stack.Screen

                name="welcome"
                component={welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen

                name="search"
                component={search}
                options={{ headerShown: false }}
            />

            <Stack.Screen

                name="User"
                component={User}
                options={{ headerShown: false }}
            />


        </Stack.Navigator >


    )
}