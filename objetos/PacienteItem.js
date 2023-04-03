import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PacienteItem = ({ paciente }) => {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  return (
    <TouchableOpacity  onPress={() => setMostrarDetalhes(!mostrarDetalhes)}>
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold' }}>{paciente.nome}</Text>
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
            <Text>historico medico: {paciente.historico_medico.descricao[0]}</Text>
            
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