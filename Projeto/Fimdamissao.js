import { StyleSheet, Text, View,TextInput, TouchableOpacity} from 'react-native';



export default function Fim({navigation}) {
    return (
      <View style={styles.tela}>
        <Text style={styles.titulo}>CodEasy</Text>
        <Text style={styles.subTitulo}>TI de uma forma fácil!</Text>
        <View style={styles.espaco}>
        </View>
        <View style={styles.retangulo}>
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
    },
    titulo:{
      fontSize: 70,
      color: '#FFFFFF',
    },
    subTitulo:{
      fontSize: 30,
      color: '#666363',
    },
    retangulo:{
      width: 382,
      height: 470,
      backgroundColor: '#2C2C2C',
      borderRadius: 6,
      alignItems: 'center',
      paddingTop: 70,
    },
    espaco:{
      height: 90,
    },
    input:{
      backgroundColor: '#FFF',
      width: 250,
      height: 40,
      borderRadius: 6,
    },
    text:{
      color: '#FFFFFF',
      fontSize: 20
    },
    espaco2:{
      height: 30,
    },
    posiText: {
      width: 250,
      height: 23,
    },
    botao:{
        backgroundColor: '#FFF', 
        width: 200,
    },
    botao:{
        backgroundColor: '#4620B2', 
        width: 150,
        height: 40,
        alignItems: 'center',
        paddingTop: 8,
        borderRadius: 6,
    },
    textCad:{
        color: '#666363',
        fontSize: 18
      },
  });