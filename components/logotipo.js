import { Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import Mini from './miniheader';

export default function Logotipo(props) {
  return (
    <SafeAreaView>
      <Text style={styles}>{props.texto}</Text>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  textoPrinciapl: {
    fontSize: 32,
    fontWeight: 'bold',
  }
})