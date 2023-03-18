import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground,ScrollView, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
    <KeyboardAvoidingView style={{flex:1, backgroundColor:'#f8f9fa'}} behavior='padding'>
      <ScrollView contentContainerStyle={styles.scrollViewContainer} >
        
        <ImageBackground source={image} resizeMode='cover' style={styles.imagebackground}>
          <View style={styles.pequenacaixadetexto}>
            <Text style={{textAlign:'left', fontSize:15, marginTop:10, marginLeft:4, color:'#001d3d'}}>Para adicionar novos pacientes basta preencher corretamente o formulário abaixo.</Text>
          </View>
        </ImageBackground>
          
        <Text style={{marginTop:10, fontSize:17, color:'#000'}}>Preencha a ficha médica:</Text>
        <TextInput
          style={styles.caixadetexto}
          placeholder="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          style={styles.caixadetexto}
          placeholder="Diagnóstico"
          value={diagnostico}
          onChangeText={(text) => setDiagnostico(text)}
        />
        <TextInput style={styles.caixadetexto}/>
        <TextInput style={styles.caixadetexto}/>
        <TextInput style={styles.caixadetexto}/>
        <TextInput style={styles.caixadetexto}/>
        <TextInput style={styles.caixadetexto}/>
        <TextInput style={styles.caixadetexto}/>
        <TextInput style={styles.caixadetexto}/>
        <TextInput style={styles.caixadetexto}/>
        <TextInput style={styles.caixadetexto}/>
        <TextInput style={styles.caixadetexto}/>
        <TextInput style={styles.caixadetexto}/>
        <TextInput style={styles.caixadetexto}/>
        <View style={styles.botoes}>
          <TouchableOpacity title="Criar Ficha" onPress={handleCriarPaciente} style={styles.criar}>
            <Text style={{fontSize:15, color:'#000'}}>Criar ficha</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelar}>
            <FontAwesome name="trash-o" size={20} color={'#f8f9fa'}/>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </KeyboardAvoidingView>   
      
      
      
    
  );
};


const styles = StyleSheet.create({
  scrollViewContainer:{
    alignItems:'center',
  },
  imagebackground:{
    width:'100%',
    height:200,
    flexDirection:'row',
    alignItems:'center',
  },
  pequenacaixadetexto:{
    backgroundColor: 'rgba(200, 200, 200, 0.5)',
    width:'45%',
    height:'50%',
    marginLeft:10,
    borderRadius:20,
  },
  caixadetexto:{
    width:'90%',
    height:40,
    marginTop:10,
    borderWidth:1,
    padding:10,
    borderRadius:5
  },
  botoes:{
    padding:15,
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  criar:{
    margin:10,
    alignItems:'center',
    justifyContent:'center',
    marginTop:5,
    width:'40%',
    height:50,
    backgroundColor:'#51ad72',
    borderRadius:5,
  },
  cancelar:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:5,
    width:'20%',
    height:50,
    backgroundColor:'#d00000',
    borderRadius:5,
  }



});
export default AddPaciente;

//<Button title="Criar" onPress={handleCriarPaciente} />