import React from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';

export default function Pessoa(){
    return(
        
        <TouchableOpacity style={styles.pessoa}>
          <View style={styles.conteudo}>
            <Text style={styles.texto}>Lucas Chavante</Text>
            <Text style={styles.texto}>BPM:71</Text>
          </View>
          <View style={styles.conteudo}>
            <Text style={styles.texto}>Idade: 21</Text>
            <Text style={styles.texto}>SaO2: 98%</Text>
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
