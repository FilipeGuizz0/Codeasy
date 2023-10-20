import { StyleSheet, Text, View,TextInput, TouchableOpacity} from 'react-native';



export default function Login({navigation}) {
    return (
      <View style={styles.tela}>
        <Text style={styles.titulo}>CodEasy</Text>
        <Text style={styles.subTitulo}>TI de uma forma fácil!</Text>
        <View style={styles.espaco}>
        </View>
        <View style={styles.retangulo}>
            <View style={styles.posiText}>
              <Text style={styles.text}>Usuário:</Text>
            </View>
            <TextInput style={styles.input}/>
            <View style={styles.espaco2}>
            </View>
            <View style={styles.posiText}>
              <Text style={styles.text}>Senha:</Text>
            </View>
            <TextInput style={styles.input}/>
            <View style={styles.espaco2}>
            </View>
           
            <View style={styles.espaco2}>
            </View>
            <TouchableOpacity style={styles.botao} onPress = {() => navigation.navigate('Home')}><Text style={styles.text}>Entrar</Text></TouchableOpacity>
            <View style={styles.espaco2}>
            </View>
            <TouchableOpacity onPress = {() => navigation.navigate('Cadastro')}><Text style={styles.textCad}>Primeiro Acesso</Text></TouchableOpacity>
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