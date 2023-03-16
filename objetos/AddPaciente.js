import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import PacienteItem from './PacienteItem';

const image = { uri: "https://i.pinimg.com/564x/2d/f5/37/2df5378314d3da15c48075b126b03ac3.jpg" };

const AddPaciente = () => {
  const [pacientes, setPacientes] = useState([]);
  const [nome, setNome] = useState('');
  const [diagnostico, setDiagnostico] = useState('');

  const navigation = useNavigation();
    function voltar(){
        navigation.navigate('Home');
    }

  useEffect(() => {
    async function fetchPacientes() {
      const response = await axios.get('http://10.0.0.151:3000/pacientes');
      setPacientes(response.data);
    }
    fetchPacientes();
  }, []);

  const handleCriarPaciente = async () => {
    const novoPaciente = {
      nome,
      diagnostico,
    };
    const response = await axios.post('http://10.0.0.151:3000/pacientes', novoPaciente);
    setPacientes([...pacientes, response.data]);
    setNome('');
    setDiagnostico('');
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.areacabecalho}>
        <ImageBackground source={image} resizeMode='cover' style={styles.imagebackground}>
          <View style={styles.pequenacaixadetexto}>
            <Text style={{textAlign:'left', fontSize:14, marginTop:10, marginLeft:4}}>Para adicionar novos pacientes basta preencher corretamente o formulário abaixo.</Text>
          </View>
          <FlatList
          data={pacientes}
          keyExtractor={(paciente) => paciente._id}
          renderItem={({ item }) => <PacienteItem paciente={item} />}
          />
        </ImageBackground>
        
      </View>
      
      
      <View style={styles.inputarea}>
        <Text style={{ fontSize: 18, marginTop: 16 }}>Adicionar paciente:</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 8 }}
          placeholder="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16 }}
          placeholder="Diagnóstico"
          value={diagnostico}
          onChangeText={(text) => setDiagnostico(text)}
        />
        <Button title="Criar" onPress={handleCriarPaciente} />
      </View>
      
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'blue'
  },
  areacabecalho:{
    width:'100%',
    height:'30%',
    backgroundColor:'purple'
  },
  imagebackground:{
    flexDirection:'row',
    width:'100%',
    height:'100%',
    alignItems:'center',
  },
  pequenacaixadetexto:{
    backgroundColor: 'rgba(200, 200, 200, 0.5)',
    width:'45%',
    height:'50%',
    marginLeft:10,
    borderRadius:20,
  },
  inputarea:{
    height:300,
    backgroundColor:'red',
  }


});

export default AddPaciente;