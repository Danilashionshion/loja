import { TouchableOpacity } from 'react-native';
import { Text, SafeAreaView, StyleSheet,View } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function Cart(){
    return(
        <ScrollView>
        <Text> Hello, World </Text>
        <TouchableOpacity onPress={() => window.location.href = 'Home'}> Clique aqui para voltar</TouchableOpacity>
        </ScrollView>
    )
}