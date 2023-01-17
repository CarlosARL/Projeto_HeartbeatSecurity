import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AddPaciente(){
    const navigation = useNavigation();
    function sairDoApp(){
        navigation.navigate('Login');
    }
    return(
        <View style={styles.container}>
            <Text>
                Olá mundo
            </Text>
            <TouchableOpacity onPress={sairDoApp}>
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