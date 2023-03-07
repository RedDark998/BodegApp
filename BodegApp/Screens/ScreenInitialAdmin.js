import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Pressable,
    TextInput,
    List,
    Heading,
    Alert
  } from 'react-native';
import Productos from './Productos';

  // este es el nombre del componente
const ScreenInitialAdmin = ({route, navigation}) => {

    // destructuring
    const {  direccion, USERNAME } = route.params;
    
    

    return (
        <View>
            <Text></Text>
            <Text></Text>
            <Text style = { styles.titulo } >Esta es una cuenta de Administrador</Text>
            <Text style = { styles.titulo } >Bienvenido:: </Text>
            <Text style = { styles.titulo } ></Text>

            <Productos
                direccion={direccion}
            />
        </View>
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
      padding: 5,
      fontSize:15,
      color: '#374151',
      fontWeight: '600',
      marginTop: 10
    },
    titulo2: {
      textAlign: 'center',
      padding: 5,
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
    Contenedor: {
      backgroundColor: '#F4F4F6',
      flex: 1, //Sirve para estirar el contenedor hacia abajo (y que ocupe toda la pantalla)
      //justifyContent: 'center'
    },
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
    btnEliminarDatosStorage: {
      backgroundColor: '#B1193C',
      padding: 10,
      marginTop: 30,
      marginHorizontal: 50,
      borderRadius: 10
  
    },
    btnTextoEliminarDatosStorage: {
      color: '#FFF',
      textAlign: 'center',
      fontSize: 15,
      fontWeight: '900',
      textTransform: 'uppercase'
  
    },
    textModal: {
      color: 'black'
    },
    noPacientes: {
      color: '#374151',
      marginTop: 40,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '900'
    },
    listado: {
      marginVertical: 30,
      marginHorizontal: 20
  
    },
    campo: {
      marginTop: 5,
      marginHorizontal: 30,
    },
    label: {
        color: '#000',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600'
    },
    input: {
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
      color: 'black'
    }
  
  
  })


export default ScreenInitialAdmin