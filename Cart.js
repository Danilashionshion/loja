import { TouchableOpacity, TouchableOpacityComponent } from 'react-native';
import { Text, SafeAreaView, StyleSheet,View } from 'react-native';
import { ScrollView } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import Carrinho from './components/carrinho.js';
import { useContext } from 'react';
import { CartContext } from './Context/context.js';

export default function Cart(){
    const [products, setproducts] = useContext(CartContext)
    const navigation = useNavigation()
    function teste(){
        console.log(products)
    }
    return(
        <ScrollView>
        <Text> Hello, World </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}> Clique aqui para voltar</TouchableOpacity>
        <TouchableOpacity onPress={() => teste()}>teste</TouchableOpacity>
        <Carrinho source={products} />
        </ScrollView>
    )
}