import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PacienteItem = ({ paciente }) => {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  return (
    <TouchableOpacity style={styles.container} onPress={() => setMostrarDetalhes(!mostrarDetalhes)}>
      <View>
        <Text style={{ fontWeight: 'bold' }}>{paciente.nome}</Text>
        {!mostrarDetalhes && (
          <Text style={{ fontStyle: 'italic' }}>{paciente.diagnostico}</Text>
        )}
        {mostrarDetalhes && (
          <>
            <Text>Idade: {paciente.idade}</Text>
            <Text>Sexo: {paciente.sexo}</Text>
            <Text>Endereço: {paciente.endereco}</Text>
            <Text>Telefone: {paciente.telefone}</Text>
            <Text>Email: {paciente.email}</Text>
            <Text>Observações: {paciente.observacoes}</Text>
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
  },
});

export default PacienteItem;
