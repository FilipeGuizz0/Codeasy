import { StyleSheet, Text, View,TextInput, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-web';

export default function Trilha({navigation}) {
    return (
      <View style={styles.tela}>
        <Text style={styles.titulo}>Trilha</Text>
        <Text style={styles.subTitulo}>Software</Text>
        <View style={styles.espaco}>
        </View>
        <View style={styles.espacamento}>
          <View style={styles.trilha1}>
            <View style={styles.espacobotao1}>
              <TouchableOpacity style={styles.botao1}>
                <Text style={styles.nmr}> 1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.espacotema1}> <Text style={styles.tema}> O que é</Text></View>
            </View>
          <View style={styles.trilha2}>
            <View style={styles.espacobotao2}>
              <TouchableOpacity style={styles.botao2}>
                <Text style={styles.nmr}> 2</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.espacotema2}> <Text style={styles.tema}> Como criar?</Text></View>
            </View>
          </View>
          <View style={styles.espaco1}>
        </View>
        <View style={styles.espacamento2}>
          <View style={styles.trilha4}>
            <View style={styles.espacobotao4}>
              <TouchableOpacity style={styles.botao4}>
                <Text style={styles.nmr}> 4</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.espacotema4}> <Text style={styles.tema}> Linguagens</Text></View>
          </View>
          <View style={styles.trilha3}>
            <View style={styles.espacobotao3}>
              <TouchableOpacity style={styles.botao3}>
                <Text style={styles.nmr}> 3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.espacotema3}> <Text style={styles.tema}> Python</Text></View>
          </View>
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
    espaco:{
        height: 80,
    },
    espaco1:{
        height: 20,
    },
    espacamento:{
        alignItems: 'center',
        flexDirection: 'row'
    },
    espaco2:{
        height: 50,
    },
    trilha1:{
      width: 150,
      height: 140,
      
    },
    espacobotao1:{
      width: 150,
      height: 80,
      paddingLeft: 20
    },
    espacotema1:{
      width: 150,
      height: 20,
      paddingTop: 3,
      paddingLeft: 19
    },
    botao1:{
      width: 70,
      height: 80,
      backgroundColor: '#4620B2',
      paddingLeft: 20,
      paddingTop: 20,
      borderRadius: 6
    },
    nmr:{
      color: '#fff',
      fontSize: 25
    },
    tema:{
      color: '#fff',
      fontSize: 15
    },
    trilha2:{
      width: 150,
      height: 140,
      paddingTop: 40
    },
    espacobotao2:{
      width: 150,
      height: 80,
      
      paddingLeft: 20
    },
    espacotema2:{
      width: 150,
      height: 20,
     
      paddingLeft: 15
    },
    botao2:{
      width: 70,
      height: 80,
      backgroundColor: '#4620B2',
      paddingLeft: 20,
      paddingTop: 20,
      borderRadius: 6
    },
    espacamento2:{
      alignItems: 'center',
      flexDirection: 'row',
      
  },
    trilha3:{
      width: 180,
      height: 140,
     paddingTop: 15
    },
    espacobotao3:{
      width: 180,
      height: 80,
      
      paddingLeft: 100
    },
    espacotema3:{
      width: 190,
      height: 20,
      paddingLeft: 104,
      
    },
    botao3:{
      width: 70,
      height: 80,
      backgroundColor: '#4620B2',
      paddingLeft: 20,
      paddingTop: 20,
      borderRadius: 6
    },
    trilha4:{
      width: 180,
      height: 140,
      paddingTop: 74
    },
    espacobotao4:{
      width: 180,
      height: 100,
      paddingLeft: 100,
      paddingTop: 20
    },
    espacotema4:{
      width: 180,
      height: 20,
      
      paddingLeft: 93
    },
    botao4:{
      width: 70,
      height: 80,
      backgroundColor: '#4620B2',
      paddingLeft: 20,
      paddingTop: 20,
      borderRadius: 6
    },
});