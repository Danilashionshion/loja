import react, {useState} from "react";
import { Image,Text,View, TouchableOpacity } from "react-native";

export default function(props){
    const [quantity, setquantity] = useState(0)

    return(
        <View>
            <Image source={props.source}/>
            <Text>{props.description}</Text>
            <TouchableOpacity onPress={setquantity(quantity - 1)}>
                <Text>-</Text>
            </TouchableOpacity>
            <Text>Qtd: {quantity}</Text>
            <TouchableOpacity onPress={setquantity(quantity + 1)}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    )
}