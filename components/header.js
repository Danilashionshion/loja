import { Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import Mini from './miniheader';

export default function Header(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        <FlatList
          data={props.links}
          renderItem={({ item }) => <Text style={styles.paragraph}>{item}</Text>}
          horizontal={true}
        />
       
      </Text>
      <Text style={styles.miniheader}>
        <Mini
          link={['tablets','celulares','notebooks']}
        />
      </Text>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
  },
  paragraph: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  miniheader: {
    marginTop: 10,
  },
});