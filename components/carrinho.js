import react, {useState} from "react";
import { Image,Text,View, TouchableOpacity } from "react-native";

export default function Carrinho(props){
    const [quantity, setquantity] = useState(0)
    if(quantity < 0){
        setquantity(0)
    }
    return(
        <View>
            <Text>{props.description}</Text>
            <TouchableOpacity onPress = {() => setquantity(quantity - 1)}>
                <Text>-</Text>
            </TouchableOpacity>
            <Text>Qtd: {quantity}</Text>
            <TouchableOpacity onPress = {() => setquantity(quantity + 1)}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    )
}