import { View, Text, Image, StyleSheet, ScrollView, Pressable, Alert, Modal} from "react-native";
import { useEffect, useState, } from "react";
import axios from "axios";
import Formulario from "./Formulario";
import FormularioUpdate from "./FormularioUpdate";


// nombre del componente (pantalla)
const BuyProducts = ({route, navigation, direccion}) => {
    

    // ----estados para guardar los valores que usará el componente

    
    // estado para la url de la imagen
    const [ imageUrl, setImageUrl ] = useState('https://elektra.vtexassets.com/arquivos/ids/2142420-1200-auto?v=637185023602830000&width=1200&height=auto&aspect=true')
    // estado de tipo arreglo para guardar los productos inicializado en vacio = []
    const [ productos, setProductos ] = useState([])
    // estado de tipo arreglo para guardar los productos inicializado en vacio = []
    const [ producto, setPruducto ] = useState({}) 
    // estado de tipo booleano true o false, para abrir o cerrar el MODAL(pantalla flotante) de agregar producto  
    const [modalVisible, setModalVisible] = useState(false)
     // estado de tipo booleano true o false, para abrir o cerrar el MODAL(pantalla flotante) de editar producto  
    const [modalUpdateVisible, setModalUpdateVisible] = useState(false)

    

    useEffect(() => {
        const ConsultarProductos = () => {
            axios.get('http://'+ direccion +':8080/readProducts.php')
            .then(res => {
              const productos = res.data;
                setProductos( productos )
    
             })
        }
        ConsultarProductos()
    
    }, [productos])


    const editandoProducto = (ObjProducto) => {
        
        //console.log(ObjProducto)
    
        setModalUpdateVisible(!modalUpdateVisible)

        setPruducto(ObjProducto)
             
    }
    const MostrarAlerta = (id) => {

        Alert.alert(  
            'Proceso..',  
            '¿Reallmente desea eliminar este producto?',  
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => console.log('Cancel Pressed'),  
                    style: 'cancel',  
                },  
                {text: 'OK', onPress: () => EliminarProducto(id)},  
            ]  
        );  

        
             
    }

    const EliminarProducto = (id) => {
        axios.get('http://'+ direccion +':8080/deleteProduct.php?ID=' + id)
            .then(res => {
              const productos = res.data;
              (productos == 'Record updated successfully') ? 
                (
                    Alert.alert(
                        'Proceso...',
                        'Eliminado con éxito',
                        [
                            {text: 'ACEPTAR'},
                        ],
                        { cancelable: false }
                      )
                ) : (
                    Alert.alert(
                        
                        'Proceso...',
                        'El producto no se pudo eliminar',
                        [
                            {text: 'ACEPTAR'},
                        ],
                        { cancelable: false }
                      )
                )
             })
             
             // actualizando estado de productos
             setProductos([])

             
    }
    


    return(
        <>
            <ScrollView>
            <Pressable
                onPress={ () => setModalVisible(!modalVisible) }
                style={ styles.btnNuevaCita }
            >
                <Text style={ styles.btnTextoNuevaCita } >VER CARRITO</Text>
            </Pressable>
            <Text style = { styles.titulo } >Lista de productos</Text>
           {productos.map((producto) => {
                    return (
                    <ScrollView key={ producto.ID }>
                        <View   style={styles.contenedor}>
                            <View >
                                <Text style={styles.label}>{producto.NOMBRE}</Text>
                                <Text style={styles.texto}>{producto.PRECIO}</Text>
                                <Text style={styles.fecha}>{producto.DETALLES}</Text>

                                <View style={styles.contenedorBotones} >
                                <Image
                                    style={[styles.btn, styles.btnEditar]}
                                    source={{
                                        uri: imageUrl,
                                      }}
                                />

                                    <Pressable
                                    style={[styles.btn, styles.btnEliminar]}
                                    onPress={() => console.log('comprando') }>
                                    <Text style={styles.btnTexto}>AGREGAR AL CARRITO</Text>
                                    </Pressable>
                                </View>

                            </View >
                        
                        </View>
                                            

                    </ScrollView>
                    
                    );
                })}
                <Text></Text>                   
                         <Text></Text>                   
                         <Text></Text>                   
                         <Text></Text>                   
                         <Text></Text>                   
                         <Text></Text>                   
                         <Text></Text>
        </ScrollView>


        <Modal
            visible={modalVisible}
            animationType='slide'
        >
        <Formulario
            productos={productos}
            setProductos={setProductos}
            setModalVisible={setModalVisible}
        />
        </Modal>

        <Modal
            visible={modalUpdateVisible}
            animationType='slide'
        >
        <FormularioUpdate
            setProductos={setProductos}
            producto={ producto }

            setModalUpdateVisible={setModalUpdateVisible}
        />
        </Modal>

        </>
        

    
    
    )

}

const styles = StyleSheet.create({
    btnNuevaCita: {
        backgroundColor: '#6D28D9',
        padding: 10,
        marginTop: 30,
        marginHorizontal: 20,
        borderRadius: 10
    
      },
      btnTextoNuevaCita: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '900',
        textTransform: 'uppercase'
    
      },
    titulo: {
        textAlign: 'center',
        padding: 10,
        fontSize:20,
        color: '#374151',
        fontWeight: '600',
        marginTop: 10
      },
      titulo2: {
        textAlign: 'center',
        padding: 10,
        fontSize:20,
        color: '#374151',
        fontWeight: '600',
        marginTop: 10
      },
      tituloBold: {
        fontWeight: '900',
        textAlign: 'center',
        fontSize: 20,
        color: '#6D28D9'
      },
      contenedor: {
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        borderBottomColor: '#374151',
        borderBottomWidth: 1,
        marginVertical: 5
        
    },
    label: {
        color: '#374151',
        textTransform: 'uppercase',
        fontWeight: '700'
    }, 
    texto: {
        color: '#6D28D9',
        fontWeight: '700',
        fontSize: 20,
        marginBottom: 10,

    },
    fecha: {
        color: '#374151'
    },
    contenedorBotones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    btn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5
    },
    btnEditar: {
        width: 100,
        height: 100
        
    },
    btnEliminar: {
        backgroundColor: '#EF4444',
        alignContent: 'center',
        justifyContent: 'center',
        width: 130,
        height: 70
    },
    btnTexto: {
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: '600',
        
    }
  });

export default BuyProducts