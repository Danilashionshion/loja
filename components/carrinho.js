import react, {useState} from "react";
import { Image,Text,View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-web";

export default function Carrinho(props){
    const [quantity, setquantity] = useState(0)
    if(quantity < 0){
        setquantity(0)
    }

    
    const renderItem = ({ item, produtos }) => (
        <View>
          <Image source={{ uri: item.source }} />
          <Text>{item.title}</Text>
          <TouchableOpacity onPress={() => setquantity(quantity - 1)}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text>Qtd: {quantity}</Text>
          <TouchableOpacity onPress={() => setquantity(quantity + 1)}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      );
    
      return (
        <FlatList
          data={props.dados}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      );
    }


