import { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, Image,View,TouchableOpacity} from 'react-native';

export default function Produtos(props){


    
    const[categoria, setCategoria] = useState('')
    const[estadocategoria, setestadoCategoria] = useState('')

    const produtos=[{
            id: 1,
            img: require('../assets/-1086821640.jpg'),
            category: "CellPhone",
            title: "Celular top R$: ",
            price: 99.9 
        },
        {
            id: 2,
            img: require('../assets/smart.png'),
            category: "SmartWatch",
            title: "Esse relogio que brilha RS$ ",
            price: 80.0
        },
        {
            id: 3,
            img: require('../assets/pc.png'),
            category: "PersonalComputer",
            title: "Esse mega pc gamer: I7 de primeira geração, 16 gb DDR 3 e placa integrada RS$ ",
            price: 400.0
        }
    ]
    function filtros(categoria){
        setCategoria(categoria)
        setestadoCategoria(true)
    }
    const filtro = estadocategoria? produtos.filter((p,i) => {p.category == categoria }): produtos 
    return(
    <SafeAreaView>
        <View style={styles.subheader}>
            <TouchableOpacity style={styles.subheaderparagraph} onPress={() => filtros("CellPhone")}>Celulares</TouchableOpacity>
            <TouchableOpacity style={styles.subheaderparagraph}>SmartWatch</TouchableOpacity>
            <TouchableOpacity style={styles.subheaderparagraph}>Computadores</TouchableOpacity>
        </View>

        <Text>
            <FlatList
                data={filtro}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.itemContainer}>
                            <Image style={styles.imagem} source={item.img}/>
                            <Text style={styles.paragraph}>{item.title}</Text>
                            <Text style={styles.price}>R$ {item.price}</Text> 
                        </TouchableOpacity>

                    </View>
                )}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
            />



            
        </Text>
    </SafeAreaView>
   
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    itemContainer: {
        alignItems: 'center',
        marginRight: 10,
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
        marginTop: 200,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    subheaderparagraph: {
        marginRight: 10
    }
})