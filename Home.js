import { Text, SafeAreaView, StyleSheet,View } from 'react-native';
import { StatusBar } from 'react-native'
import Header from './components/header.js'
import Logotipo from './components/logotipo.js'; 
import Produtos from './components/products.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator()

export default function Home(props) {
  
  const navigation = useNavigation()
  return (
    
    <SafeAreaView style={styles.container}>    
      <View style={styles.header}>
      <Header
        links={['Home','carrinho','Profile']}
      />
     <View style={styles.textContainer}> 
        <Logotipo texto={'Compre, se quiser'}></Logotipo>
     </View>

      </View>
      
      <View style={styles.productsContainer}>
        <Produtos/>
      </View>
      <StatusBar />
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
 
