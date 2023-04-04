import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground,ScrollView, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import PacienteItem from './PacienteItem';

const image = { uri: "https://i.pinimg.com/564x/2d/f5/37/2df5378314d3da15c48075b126b03ac3.jpg" };

function AddPaciente({ route }) {
  const { usuario } = route.params;
  const [pacientes, setPacientes] = useState([]);
  const [nome, setNome] = useState('');
  const [data_nascimento, setDataNascimento] = useState('');
  const [sexo, setSexo] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [celular, setCelular] = useState('');
  const [diagnostico, setDiagnostico] = useState('');
  const [cuidados, setCuidados] = useState([]);
  const [medicamentos, setmedicamentos] = useState([]);
  const [descricao, setDescricao] = useState('');
  const navigation = useNavigation();
  
  function IrParaHome(){
    navigation.navigate('Home', { usuario });
  }



  const handleCriarPaciente = async () => {
    const novoPaciente = {
    nome,
    data_nascimento,
    sexo,
    endereco:{
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
    cep,
    },
    contato: {
    email,
    telefone,
    celular,
    },
    diagnostico,
    cuidados,
    medicamentos,
    historico_medico:{
      descricao},
    };
    try {
    const response = await axios.post('http://44.203.2.145:3002/pacientes', novoPaciente);
    setPacientes([...pacientes, response.data]);
    setNome('');
    setDataNascimento('');
    setSexo('');
    setRua('');
    setNumero('');
    setComplemento('');
    setBairro('');
    setCidade('');
    setEstado('');
    setCep('');
    setEmail('');
    setTelefone('');
    setCelular('');
    setDiagnostico('');
    setCuidados([]);
    setmedicamentos([]);
    setDescricao([]);
    } catch (error) {
    console.log('Error creating paciente:', error);
    }
    IrParaHome();
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
          placeholder="Data de Nascimento"
          value={data_nascimento}
          onChangeText={(text) => setDataNascimento(text)}
        />
        <TextInput
          style={styles.caixadetexto}
          placeholder="Sexo"
          value={sexo}
          onChangeText={(text) => setSexo(text)}
        />
        <TextInput
          style={styles.caixadetexto}
          placeholder="Rua"
          value={rua}
          onChangeText={(text) => setRua(text)}
        />
        <TextInput
          style={styles.caixadetexto}
          placeholder="Número"
          value={numero}
          onChangeText={(text) => setNumero(text)}
        />
        <TextInput
          style={styles.caixadetexto}
          placeholder="Complemento"
          value={complemento}
          onChangeText={(text) => setComplemento(text)}
        />
        <TextInput
          style={styles.caixadetexto}
          placeholder="Bairro"
          value={bairro}
          onChangeText={(text) => setBairro(text)}
        />
        <TextInput
          style={styles.caixadetexto}
          placeholder="Cidade"
          value={cidade}
          onChangeText={(text) => setCidade(text)}
        />
        <TextInput
          style={styles.caixadetexto}
          placeholder="Estado"
          value={estado}
          onChangeText={(text) => setEstado(text)}
        />
        <TextInput
          style={styles.caixadetexto}
          placeholder="CEP"
          value={cep}
          onChangeText={(text) => setCep(text)}
        />
        <TextInput
          style={styles.caixadetexto}
          placeholder="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.caixadetexto}
          placeholder="Telefone"
          value={telefone}
          onChangeText={(text) => setTelefone(text)}
        />
        <TextInput
          style={styles.caixadetexto}
          placeholder="Celular"
          value={celular}
          onChangeText={(text) => setCelular(text)}
        />
        <TextInput
          style={styles.caixadetexto}
          placeholder="Diagnóstico"
          value={diagnostico}
          onChangeText={(text) => setDiagnostico(text)}
        />
        <TextInput
          style={styles.caixadetexto}
          placeholder="Cuidados"
          value={cuidados}
          onChangeText={(text) => setCuidados(text)}
        />
        <TextInput
          style={styles.caixadetexto}
          placeholder="Medicamentos"
          value={medicamentos}
          onChangeText={(text) => setmedicamentos(text)}
        />
        <TextInput
          style={styles.caixadetexto}
          placeholder="Histórico Médico"
          value={descricao}
          onChangeText={(text) => setDescricao(text)}
        />
        <View style={styles.botoes}>
          <TouchableOpacity title="Criar Ficha" onPress={handleCriarPaciente} style={styles.criar}>
            <Text style={{fontSize:15, color:'#000'}}>Criar ficha</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelar} onPress={IrParaHome}>
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
