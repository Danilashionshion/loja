import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'react-native'
import Header from './components/header.js'
import Logotipo from './components/logotipo.js';
import Produtos from './components/products.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home.js';
import Cart from './Cart.js';

const Stack = createNativeStackNavigator()

export default function App() {
    try {
        return (
            <NavigationContainer >
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ title: 'Welcome' }}
                        
                    />
                    
                    <Stack.Screen
                        name="carrinho"
                        component={Cart}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    } catch (error) {
        return(
            <Text> Você não deveria ver isso</Text>
        )
    }


}

