import { NavigationContainer } from "@react-navigation/native"
import Routes from "./Stack"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AuthProvider } from "../context/auth"

export const RoutesTypes = () => {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    )
}