import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Pressable,
    Modal,
    TextInput,
    View,
    ScrollView, 
    Alert
  } from 'react-native'
  import axios from 'axios'

  
const Formulario = ({productos, setProductos, setModalVisible, direccionIp}) => {

    
    
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState(0)
    const [detalles, setDetalles] = useState('')

    const MostrarAlerta = () => {

        if( ( nombre == '') || (precio == 0) || ( detalles == '' ) ){
            Alert.alert(  
                'Proceso..',  
                'Todos los campos son obligatorios!!',  
                [  
                    {text: 'OK'},  
                ]  
            )
        }else{
            agregarNuevo()
        }
  
    }

    
    const agregarNuevo = () => {
        
        const url = 'http://'+ direccionIp +':8080/addProduct.php?NOMBRE=' + nombre + '&PRECIO=' + precio + '&DETALLES=' + detalles
        axios.get(url)
            .then(res => {
              const productos = res.data;
              (productos == 'Record updated successfully') ? 
                (
                    Alert.alert(
                        'Proceso...',
                        'Producto agregado con éxito',
                        [
                            {text: 'ACEPTAR'},
                        ],
                        { cancelable: false }
                      ),
                      // reseteando estado con set A a su valor inicial
                        setNombre(''),
                        setPrecio(0),
                        setDetalles(''),
                        
                        
                        setModalVisible(false)
                ) : (
                    Alert.alert(
                        'Proceso...',
                        'El producto no se pudo agregar',
                        [
                            {text: 'ACEPTAR'},
                        ],
                        { cancelable: false }
                      )
                )
             })
             // actualizando estado de productos
    }



  return (
    <>
        <SafeAreaView style={styles.contenido}>
            <ScrollView>
                {/* TÍTULO */}
                <Text
                    style={ styles.titulo }
                >{productos.ID ? 'Editar' : 'Nueva'} {''}
                        <Text 
                            style={ styles.tituloBold }
                        >Producto</Text>
                </Text>

                {/* CERRANDO EL MODAL */}
                <Pressable 
                    style={ styles.btnCancelar }
                    onPress={() => {
                        
                        setModalVisible(false)
                        setNombre('')
                        setPrecio(0)
                        setDetalles('')
                    } }
                >
                    <Text style={styles.btnTextoCancelar}>Cancelar</Text>
                </Pressable>

                {/* NOMBRE DEL PRODUCTO */}
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre del producto </Text>
                    <TextInput 
                        placeholderTextColor={'#666'}
                        placeholder='Nombre Paciente'
                        style={styles.input}
                        value={nombre}
                        onChangeText={setNombre}
                    />
                </View>

                {/* PRECIO */}
                <View style={styles.campo}>
                    <Text style={styles.label}>PRECIO</Text>
                    <TextInput 
                        placeholderTextColor={'#666'}
                        placeholder='$1234'
                        style={styles.input}
                        keyboardType="numeric"
                        value={precio.toString() }
                        onChangeText={setPrecio}
                    />
                </View>

                {/* DETALLES */}
                <View style={styles.campo}>
                    <Text style={styles.label}>DETALLES</Text>
                    <TextInput 
                        placeholderTextColor={'#666'}
                        placeholder='$Color, tamaño, características, etc'
                        style={styles.input}
                        value={detalles}
                        onChangeText={setDetalles}
                    />
                </View>
                    

                <Pressable
                    style={styles.btnNuevaCita}
                    onPress={ () => MostrarAlerta() }
                >
                    <Text style={styles.btnTextoNuevaCita}>{productos.ID ? 'Actualizar Campos' : 'Agregar Producto'}</Text>
                </Pressable>
            </ScrollView>    

        </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    contenido: {
        backgroundColor: '#6D28D9',
        flex: 1,
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop:30,
        color: '#fff',
        marginBottom: 20
    },
    tituloBold: {
        fontWeight: '900',
    },
    campo: {
        marginTop: 5,
        marginHorizontal: 30,
    },
    label: {
        color: '#fff',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600'
    },
    input: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        color: 'black'
    },
    sintomasInput: {
        height: 100
    },
    fechaContenedor: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10
    },
    btnCancelar: {
        backgroundColor: '#5827A4',
        padding: 10,
        marginTop: 5,
        marginBottom: 20,
        marginHorizontal: 30,
        borderRadius: 10
    },
    btnTextoCancelar: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '900',
        textTransform: 'uppercase'
    
      },
      btnNuevaCita:{
        backgroundColor: '#F5930B',
        marginVertical: 50,
        marginHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10
      },
      btnTextoNuevaCita: {
        color: '#5927A4',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '900',
        textTransform: 'uppercase'
      }
    
    
})
export default Formulario