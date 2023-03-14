import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,TextInput, KeyboardAvoidingView, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const image = {uri:"https://img.freepik.com/free-vector/clean-medical-background_53876-119280.jpg?w=2000" }

export default function Cadastro(){
    const navigation = useNavigation();
    const [bloqueado, setBloqueado] = useState(true);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [passwordConfirmation, setConfirm] = useState('');


    function irParaLogin(){
        navigation.navigate('Login');
      }
    function requestCadastro()
    {           
      var axios = require("axios").default;

      var options = {
        method: 'POST',
        url: 'http://10.0.0.151:3001/SignUp',
        headers: {'Content-Type': 'application/json'},
        data: {name: nome, email:email,password: senha, passwordConfirmation: passwordConfirmation}
      };
      
      axios.request(options).then(function (response) {
        if (response.data != "Registrado com sucesso!"){
          console.log(response.data);
          alert(response.data);
        }
        else{
            console.log("Registrado com sucesso!");
            alert(response.data);
            //sleep(30);
            irParaLogin();
        }
        //console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }

    return(
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode={'cover'} style={{width:'100%', height:'100%'}}>
                <View style={styles.cabeçalho}>
                    <Text style={{fontSize:20, color:'#000'}}>Criando sua Conta !!!</Text>
                </View>
                <View style={styles.corpo}>
                    <TextInput style={styles.inputs} 
                    placeholder='Nome completo'
                    placeholderTextColor="#004E98"
                    onChangeText={(texto) => setNome(texto)}/>

                    <TextInput style={styles.inputs} 
                    placeholder='E-mail' 
                    placeholderTextColor="#004E98"
                    onChangeText={(texto) => setEmail(texto)}/>

                    <View style={styles.areaSenha}>
                        <TextInput style={styles.inputSenha} placeholder='Senha'
                         placeholderTextColor="#004E98"
                         secureTextEntry={bloqueado}
                         onChangeText={(texto) => setSenha(texto)}/>
                        
                        <TouchableOpacity style={styles.icone} onPress={(() => setBloqueado(!bloqueado))}>
                            {bloqueado?
                            <Ionicons name="eye-off" size={22} color={'#000'}/>
                            :
                            <Ionicons name="eye" size={22} color={'#000'}/>
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={styles.areaSenha}>
                        <TextInput style={styles.inputSenha} placeholder='Confirme sua senha'
                         placeholderTextColor="#004E98"
                         secureTextEntry={bloqueado}
                         onChangeText={(texto) => setConfirm(texto)}/>
                         
                        <TouchableOpacity style={styles.icone} onPress={(() => setBloqueado(!bloqueado))}>
                            {bloqueado?
                            <Ionicons name="eye-off" size={22} color={'#000'}/>
                            :
                            <Ionicons name="eye" size={22} color={'#000'}/>
                            }
                        </TouchableOpacity>
                    </View>
                    
                    <TouchableOpacity style={styles.botao} onPress={requestCadastro}>
                        <Text style={{color:'#EBEBEB', fontSize:17}}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    cabeçalho:{
        flex:0.2,
        justifyContent:'flex-end',
        alignItems:'center',
        width:'100%',
    },
    corpo:{
        flex:0.8,
        justifyContent:'flex-end',
        alignItems:'center',
        marginBottom:30
    },
    inputs:{
        width:'85%',
        height:50,
        borderWidth:1,
        borderColor:'#004E98',
        borderRadius:10,
        marginTop:10,
        marginBottom:10,
        backgroundColor:'#EBEBEB'
    },
    areaSenha:{
        marginTop: 10,
        marginBottom:10, 
        flexDirection:'row',
        width:'85%',
        height:50,
        borderWidth:1,
        borderRadius:10,
        borderColor:'#004E98',
        backgroundColor:'#EBEBEB'
        
    },
    inputSenha:{
        width:'90%',
        height:50,
    },
    icone:{
        justifyContent:'center',
        marginRight:0,
        alignItems:'flex-end'
    },
    botao:{
        width:'40%',
        aspectRatio:3,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        backgroundColor:'#004E98',
        borderRadius:10,
        position:'relative'  
    }
  })