import { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, Image,View,Pressable} from 'react-native';

export default function Produtos(props){


    
    const[categoria, setCategoria] = useState("")
    const[estadocategoria, setestadoCategoria] = useState(false)
    const[sorts,setsort] = useState([])

    
    
    const produtos=[{
            id: 1,
            img: require('../assets/-1086821640.jpg'),
            category: "CellPhone",
            title: "Zelular top, até roda vscode R$: ",
            price: 99.9 
        },
        {
            id: 2,
            img: require('../assets/smart.png'),
            category: "SmartWatch",
            title: "Esse relogio que brilha e é caro RS$ ",
            price: 80.0
        },
        {
            id: 3,
            img: require('../assets/pc.png'),
            category: "PersonalComputer",
            title: "PC GAMER, roda java a 60fps",
            price: 400.0
        }
    ]
    function filtros(categoria){
        setCategoria(categoria)
        setestadoCategoria(true)
        console.log(categoria)
    }
    
    function clear(){
        setestadoCategoria(false)
        setsort(false)
    }

    

    const  filtro = estadocategoria? produtos.filter((p,i) => p.category == categoria ): produtos 
     


    function handleSort() {
        setsort(true)
    }
    if(sorts == true){
       filtro.sort((a,b) => 
            (a.title > b.title ? 1 :
            b.title > a.title ? -1 : 0));
            console.log(filtro)
    }


    return(
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
                    <View style={styles.itemContainer}>
                        <Pressable style={styles.itemContainer}>
                            <Image style={styles.imagem} source={item.img}/>
                            <Text style={styles.paragraph}>{item.title}</Text>
                            <Text style={styles.price}>R$ {item.price}</Text> 
                        </Pressable>

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
        flexDirection: 'row',
    },
    subheaderparagraph: {
        marginRight: 10
    }
})