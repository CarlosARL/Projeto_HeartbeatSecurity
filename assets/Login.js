import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const image = { uri: "https://i.pinimg.com/564x/38/9a/67/1ND2sMeZSjfR3HCVP9RRGBuBLLxpphe9de.jpg" };
export default function Login(){
    const navigation = useNavigation();
    const [bloqueado, setBloqueado] = useState(true); 
    const [usuario, setUser] = useState('');
    const [senha, setSenha] = useState('');
    function requestLogin()
    {
      var axios = require("axios").default;

      var options = {
        method: 'POST',
        url: 'http://44.203.2.145:3001/login',
        headers: {'Content-Type': 'application/json'},
        data: {name: usuario, password: senha}
      };
      
      axios.request(options).then(function (response) {
        if (response.data != "logado" ){
          //console.log("deu merda");
          console.log(response.data);
          alert(response.data);
          
        }
        else{
          navigation.navigate('Home', { usuario });
          console.log(response.data);
        }
        //console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }
    function irCadastrar(){
        navigation.navigate('Cadastro');
    }

    return(
        <View style={styles.container}>
          <ImageBackground source={image} resizeMode='cover' style={{width:'100%', height:'100%', alignItems:'center', justifyContent:'flex-end'}}>
            <View style={styles.areadosinput}>
                <View style={styles.inputMatricula}>
                    <TextInput
                    style={styles.input}
                    placeholder='E-mail ou nome de usuário'
                    placeholderTextColor="#f5efff"
                    onChangeText={(texto) => setUser(texto)}
                    />
                </View>

                <View style={styles.senhaArea}>    
                    <TextInput style={styles.input}
                    placeholder='Senha'
                    placeholderTextColor="#f5efff"
                    secureTextEntry={bloqueado}
                    onChangeText={(texto) => setSenha(texto)}
                    />
                    <TouchableOpacity style={styles.icone} onPress={(() => setBloqueado(!bloqueado))}>
                        {bloqueado?
                        <Ionicons name="eye-off" size={20} color={'#f5efff'}/>
                        :
                        <Ionicons name="eye" size={20} color={'#f5efff'}/>
                        }
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.entrar} onPress={requestLogin}>
                    <Text style={{color:'#f5efff', fontSize:15}}>Entrar</Text>
                </TouchableOpacity>
                <View style={styles.cadastramento}>
                <TouchableOpacity styles={{margin:10}}>
                    <Text style={{color:'#f5efff', fontSize:15}}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={irCadastrar}>
                    <Text style={{color:'#f5efff', fontSize:15}}>Faça seu cadastro!!!</Text>
                </TouchableOpacity>  
                </View>        
            </View> 
        </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    areadosinput:{
      justifyContent:'center',
      alignItems:'center',
      width:'80%',
      aspectRatio:1,
      marginBottom:80,
      backgroundColor:'rgba(0, 0, 0, 0.5)',
      borderRadius:20,
    },
    inputMatricula:{
      width:'90%',
      height:50,
      borderWidth:1,
      borderRadius:5,
    },
    senhaArea:{
      marginTop: 10, 
      flexDirection:'row',
      width:'90%',
      height:50,
      borderWidth:1,
      borderRadius:5,
    },
    icone:{
      justifyContent:'center'
    },
    input:{
      width:'90%',
      height:50,
      padding:10,
      fontSize:15,
      color:'#f5efff',
    },
    entrar:{
      alignItems:'center',
      justifyContent:'center',
      marginTop:5,
      width:'90%',
      height:50,
      backgroundColor:'#51ad72',
      borderRadius:5,
    },
    cadastramento:{
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:10,
      width:'100%',
      
    }
    
  });
