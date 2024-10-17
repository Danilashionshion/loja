import react, { useContext, useState } from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import { FlatList } from "react-native-web";
import { CartContext } from "../Context/context";

export default function Carrinho(props) {
 
  const [products, setproducts] = useContext(CartContext)
  const [quantity, setquantity] = useState(0)
  if (quantity < 0) {
    setquantity(0)
  }
  function limpar(){
    setproducts([])
  }
  function excluiritem(index){
    const item = products.filter((_,i) => i != index)
    setproducts(item)
  }
  const EmptyList = () => {
    return (
      <View>
        <Text style={styles.container}>Nenhum item encontrado</Text>

      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer} >
            <Pressable style={styles.itemContainer}  >
              <Image style={styles.imagem} source={item.img} />
              <Text style={styles.paragraph}>{item.title}</Text>
              <Text style={styles.price}>R$ {item.price}</Text>
              <TouchableOpacity onPress={() => excluiritem(index)}>Excluir item </TouchableOpacity>
            </Pressable>

          </View>
        )}
        keyExtractor={item => item.index}
        horizontal={false}
        ListEmptyComponent={EmptyList}
      />
      <TouchableOpacity onPress={() => limpar()}> Limpar </TouchableOpacity>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    textAlign: 'center'
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  imagem: {
    width: 100,
    height: 100,
  },
  paragraph: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'green',
  },
  subheader: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  subheaderparagraph: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
});

