import { useContext, useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, Image, View, Pressable } from 'react-native';
import produtos from './produtinhoinho';
import Carrinho from './carrinho';
import { CartContext } from '../Context/context.js';


export default function Produtos(props) {

    const [categoria, setCategoria] = useState("")
    const [estadocategoria, setestadoCategoria] = useState(false)
    const [sorts, setsort] = useState([])
    const [products, setproducts] = useContext(CartContext)

    
    function filtros(categoria) {
        setCategoria(categoria)
        setestadoCategoria(true)
        console.log(categoria)
    }

    function clear() {
        setestadoCategoria(false)
        setsort(false)
    }


    const filtro = estadocategoria ? produtos.filter((p, i) => p.category == categoria) : produtos
    function handleSort() {
        setsort(true)
    }

    function handleAdd(id) {
        const item = produtos.find((p) => p.id === id);
        setproducts([...products, { ...item }]);

        console.log(products);
        
    }
    if (sorts == true) {
        filtro.sort((a, b) =>
        (a.title > b.title ? 1 :
            b.title > a.title ? -1 : 0));
        console.log(filtro)
    }
    console.log(Carrinho)
    return (
        <SafeAreaView>
            <View style={styles.subheader}>
                <Pressable style={styles.subheaderparagraph} onPress={() => filtros("CellPhone")}>Celulares</Pressable>
                <Pressable style={styles.subheaderparagraph} onPress={() => filtros("SmartWatch")}>SmartWatch</Pressable>
                <Pressable style={styles.subheaderparagraph} onPress={() => filtros("PersonalComputer")}>Computadores</Pressable>
                <Pressable style={styles.subheaderparagraph} onPress={() => handleSort()}>ordem alfabética</Pressable>
                <Pressable style={styles.subheaderparagraph} onPress={() => clear()}> Limpar Estado </Pressable>
            </View>

            <Text>
                <FlatList
                    data={filtro}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer} >
                            <Pressable style={styles.itemContainer} id={item.id} onPress={() => handleAdd(item.id)} >
                                <Image style={styles.imagem} source={item.img} />
                                <Text style={styles.paragraph}>{item.title}</Text>
                                <Text style={styles.price}>R$ {item.price}</Text>
                            </Pressable>

                        </View>
                    )}
                    keyExtractor={item => item.id.toString()}
                    horizontal={false}
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


