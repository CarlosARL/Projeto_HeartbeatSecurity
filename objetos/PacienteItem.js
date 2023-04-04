import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import io from 'socket.io-client';

const socket = io('http://192.168.1.104:4000');

const PacienteItem = ({ paciente }) => {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);
  const [bpm, setBpm] = useState(null);
  const [ox, setOx] = useState(null);

  useEffect(() => {
    socket.on('BPM', (data) => {
      setBpm(data);
    });
    socket.on('OX', (data) => {
      setOx(data);
    });
  }, []);
  return (
    <TouchableOpacity  onPress={() => setMostrarDetalhes(!mostrarDetalhes)}>
      
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold' }}>{paciente.nome}</Text>
        <Text style={{ fontWeight: 'bold' }}>BPM: {bpm}</Text>
        <Text style={{ fontWeight: 'bold' }}>SpO2: {ox}</Text>
        {!mostrarDetalhes && (
          <Text style={{ fontStyle: 'italic' }}>{paciente.diagnostico}</Text>
        )}  
        {mostrarDetalhes && (
          <>
            <Text>Idade: {paciente.idade}</Text>
            <Text>Sexo: {paciente.sexo}</Text>
            <Text>Endereço: {paciente.endereco.rua}, {paciente.endereco.numero}, {paciente.endereco.bairro}, {paciente.endereco.cidade}, {paciente.endereco.estado}, {paciente.endereco.cep}</Text>
            <Text>Contatos: {'\n'}Telefone: {paciente.contato.telefone}{'\n'}Email: {paciente.contato.email}</Text>
            <Text>Diagnóstico: {paciente.diagnostico}</Text>
            <Text>Cuidados: {paciente.cuidados}</Text>
            <Text>medicamentos: {paciente.medicamentos}</Text>
            <Text>historico medico: {paciente.historico_medico.descricao}</Text>
            
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
  },
});

export default PacienteItem;