import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Cadastro from './Cadastro';
import Login from './Login'
import Home from './Home'
import TrilhaHard from './trilhaHardware'
import TrilhaSoft from './trilhaSoftware'
import Fim from './Fimdamissao'

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name= "Login" component = {Login} options={{
        headerShown: false,}} />
        <Stack.Screen name= "Cadastro" component = {Cadastro} options={{
        headerShown: false}}/>
        <Stack.Screen name= "Home" component = {Home} options={{
        headerShown: false}}/>
        <Stack.Screen name= "TrilhaHard" component = {TrilhaHard} options={{
        headerShown: false}}/>
        <Stack.Screen name= "TrilhaSoft" component = {TrilhaSoft} options={{
        headerShown: false}}/>
        <Stack.Screen name= "Fim" component = {Fim} options={{
        headerShown: false}}/>
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


