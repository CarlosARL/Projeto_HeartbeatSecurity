import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Flatlist} from 'react-native';
import Pessoa from './../objetos/pessoa';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';

export default function Home({ route }) {
  const { usuario } = route.params;
  const [nome, setNome] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get(`http://44.203.2.145:3001/name/${usuario}`)
      .then(({ data }) => {
        setNome(data.nome);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [usuario]);

{
  axios
    .get(`http://44.203.2.145:3001/name/${usuario}`)
    .then(({ data }) => {
      setNome(data.nome);
    })
    .catch((error) => {
      console.error(error);
    });
}
  console.log(nome);

  function IrparaAddPaciente(){
    navigation.navigate('AddPaciente');
  }
    
  return(
    <View style={styles.container}>

      <View style={styles.clientes}>
      <Pessoa nome={nome} />
      </View>

      <View style={styles.addcliente}>
        <TouchableOpacity style={styles.add} onPress={IrparaAddPaciente}>
          <AntDesign name="plus" size={30} color={'#000'}/>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#7161EF',
  },
  clientes:{
    alignItems:'center',
    width:'100%',
    height:'87%',
  },
  addcliente:{
    justifyContent:'flex-end',
    alignItems:'flex-end',
    marginRight:15,
    marginBottom:40
  },
  texto:{
    fontSize:20,
  },
  add:{
    height:62,
    width:62,
    borderRadius:62/2,
    backgroundColor:'#f5efff',
    justifyContent:'center',
    alignItems:'center',
  },
  
});
