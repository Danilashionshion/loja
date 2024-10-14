import { TouchableOpacity, TouchableOpacityComponent } from 'react-native';
import { Text, SafeAreaView, StyleSheet,View } from 'react-native';
import { ScrollView } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import Carrinho from './components/carrinho.js';

export default function Cart(){

    const navigation = useNavigation()

    return(
        <ScrollView>
        <Text> Hello, World </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}> Clique aqui para voltar</TouchableOpacity>
        <Carrinho/>
        </ScrollView>
    )
}