import { Text, SafeAreaView, StyleSheet,View } from 'react-native';
import { StatusBar } from 'react-native'
import Header from './components/header.js'
import Logotipo from './components/logotipo.js'; 
import Produtos from './components/products.js';

export default function App(props) {
  
 
  return (
    <SafeAreaView style={styles.container}>    
      <View style={styles.header}>
      <Header
        links={['Home','Itens','Profile']}
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
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  header: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  productsContainer: {
    alignItems: 'center',
  },
  produtosContainer: {
    flex: 1,
    padding: 10,
  },
});
 
