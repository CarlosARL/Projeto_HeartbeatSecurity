import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './assets/HomeScreen';
import Cadastro from './assets/Cadastro';
import Login from './assets/Login';
import AddPaciente from './objetos/AddPaciente';
import Home from './assets/HomeScreen';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='AddPaciente'>
        <Stack.Screen name="Home" component={Home} options={{
          headerShown:false,}}/>
        <Stack.Screen name="Login" component={Login} options={{
          headerShown:false,}}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{
          headerShown:false,}}/>
        <Stack.Screen name="AddPaciente" component={AddPaciente} options={{
          headerShown:false,}}/>   
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container:{
      flex:1,
  }
})