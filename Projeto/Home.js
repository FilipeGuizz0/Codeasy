import { StyleSheet, Text, View,TextInput, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-web';

export default function Home({navigation}) {
    return (
      <View style={styles.tela}>
        <Text style={styles.titulo}>Olá, Nome</Text>
        <Text style={styles.subTitulo}>Bem vindo!</Text>
        <View style={styles.espaco}>
        </View>
        <View style={styles.espacamento}><Text style={styles.frase}>O que deseja aprender hoje?</Text></View>
        <View style={styles.espaco2}>
        </View>
        <View style={styles.meio}>
            <TouchableOpacity onPress = {() => navigation.navigate('Fim')} style={styles.opcao}>
                <Text style={styles.tituloOpcao}>Hardware</Text>
                <Text style={styles.subOpcao}>Componentes Físicos de uma máquina</Text>
            </TouchableOpacity>
            <View style={styles.espaco1}>
            </View>
            <TouchableOpacity onPress = {() => navigation.navigate('TrilhaSoft')} style={styles.opcao}>
            <Text style={styles.tituloOpcao}>Software</Text>
                <Text style={styles.subOpcao}>Componentes digitais de uma máquina</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
const styles = StyleSheet.create({
    tela: {
      flex: 1,
      backgroundColor: '#1F1F1F',
      paddingTop: 100,
      paddingLeft: 15,
      paddingRight: 15,
    },
    titulo:{
      fontSize: 70,
      color: '#FFFFFF',
    },
    subTitulo:{
      fontSize: 30,
      color: '#666363',
    },
    opcao:{
      width: 280,
      height: 180, 
      backgroundColor: '#4620B2',
      borderRadius: 6,
      alignItems: 'center',
      paddingTop: 55,
      
    },
    espaco:{
        height: 80,
    },
    espaco1:{
        height: 20,
    },
    meio:{
        alignItems: 'center',
    },
    tituloOpcao:{
        fontSize: 45,
        color: '#FFFFFF',
    },
    subOpcao:{
        fontSize: 15,
        color: '#A5A1A1',
    },
    espacamento:{
        alignItems: 'center',
    },
    espaco2:{
        height: 50,
    },
    frase:{
        fontSize: 30,
        color: '#FFFFFF',
    }
  });