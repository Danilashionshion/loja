import react, {useState} from "react";
import { Text, View, Switch, TouchableOpacity } from "react-native-web";

export default function OrderSumary({cart}){
    const[isInstallment, setIsInstallment] = useState(false)

    let subtotal = 0
    cart.map(produtcts => subtotal += produtcts.price)

    const onToggleSwitch = () => setIsInstallment(!isInstallment)

    return (
        <View>
            <Text> o que tu quer ai </Text>
            <Text> subtotal: {subtotal}</Text>
            <Text> shipping: 0</Text>
            <Text> Taxa: Calculada quando chegar </Text>
            <Text>Total estimado: {subtotal} </Text>
            <Text>Choose how to </Text>
            <Text>Parcelar?</Text>
            <Switch onValueChange={onToggleSwitch} value={isInstallment}/>
        </View>
    )
}