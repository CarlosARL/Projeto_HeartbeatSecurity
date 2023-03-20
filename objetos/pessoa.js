/*import React, { useState } from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';

export default function Pessoa({ nome }) {
  const [BPM, setBPM] = useState('');
  const [OX, setOX] = useState('');
  const io = require('socket.io-client');
  const socket = io.connect('http://18.206.54.38:4000');
  var flag1=0;
  if (flag1!=1){
    socket.on('connect', () => {
      console.log('Conectado ao servidor.');
      flag1=1;
    });
  }


  socket.on('BPM', (data) => {
    setBPM(data);
  });
  socket.on('OX', (data) => {
    setOX(data);
  });
  

  socket.on('disconnect', () => {
    console.log('Desconectado do servidor.');
  });
    return(
        
        <TouchableOpacity style={styles.pessoa}>
          <View style={styles.conteudo}>
            <Text style={styles.texto}>{nome}</Text>
            <Text style={styles.texto}>{BPM}</Text>
          </View>
          <View style={styles.conteudo}>
            <Text style={styles.texto}>Idade: 18</Text>
            <Text style={styles.texto}>{OX}</Text>
          </View>
        </TouchableOpacity>


    )
}

const styles = StyleSheet.create({
    pessoa:{
        justifyContent:'flex-start',
        width:'85%',
        height:'15%',
        padding:20,
        backgroundColor:'#f5efff',
        borderRadius:15,
        marginTop:10,
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 24,
      },
      texto:{
        fontSize:20,
      },
      conteudo:{
        flexDirection:'column',
        justifyContent:'space-around',
        marginRight:30
      },
})
*/

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import PacienteItem from './PacienteItem';

const Pessoa = () => {
  const [pacientes, setPacientes] = useState([]);
  const [nome, setNome] = useState('');
  const [diagnostico, setDiagnostico] = useState('');

  useEffect(() => {
    async function fetchPacientes() {
      const response = await axios.get('http://18.206.54.38:3002/pacientes');
      setPacientes(response.data);
    }
    fetchPacientes();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pacientes</Text>
      <FlatList
  data={pacientes}
  keyExtractor={(paciente) => paciente._id}
  renderItem={({ item }) => <PacienteItem paciente={item} />}
/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitulo: {
    fontSize: 18,
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
  },
  pacienteContainer: {
    marginBottom: 16,
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  diagnostico: {
    fontSize: 14,
  },
});

export default Pessoa;
