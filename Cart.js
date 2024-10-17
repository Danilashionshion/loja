import { TouchableOpacity, TouchableOpacityComponent } from 'react-native';
import { Text, SafeAreaView, StyleSheet,View } from 'react-native';
import { ScrollView } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import Carrinho from './components/carrinho.js';
import { useContext, useState } from 'react';
import { CartContext } from './Context/context.js';


export default function Cart(){
    const [products, setproducts] = useContext(CartContext)
    const navigation = useNavigation()
    let sum = 0
   
    for(let i = 0;i<products.length;i++){
       sum += parseInt(products[i].price)
    }
    
    
    
    
    
        return (
            <ScrollView style={style.items_container}>
                <Text style={style.items_container}> preço dessa bagaça:  R${sum} </Text>
                <Carrinho  />
            </ScrollView>
        );
    } 

    const style = StyleSheet.create({
        items_container: {
            textAlign: 'center'
        },
    
    })
    

    
