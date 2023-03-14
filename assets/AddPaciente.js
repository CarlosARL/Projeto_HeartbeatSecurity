import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import App from "../objetos/paciente"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AddPaciente(){
    const navigation = useNavigation();
    function voltar(){
        navigation.navigate('Home');
    }
    return(
        <View style={styles.container}>
            <App />
            <TouchableOpacity onPress={voltar}>
                <MaterialCommunityIcons name="logout" size={50} color={'#000'}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#7161EF'
    }
})