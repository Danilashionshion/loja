import { Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import Mini from './miniheader';
import { TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { Button } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, navigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

export default function Header(props) {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        <FlatList
          data={props.links}
          renderItem={({ item }) => <Button style={styles.paragraph} title={item} onPress={() => navigation.navigate(item)}/>}
          horizontal={true}
        />
       
      </Text>
      <Text style={styles.miniheader}>
        
      </Text>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
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