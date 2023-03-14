import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import axios from 'axios';
import PacienteItem from './PacienteItem';

const App = () => {
  const [pacientes, setPacientes] = useState([]);
  const [nome, setNome] = useState('');
  const [diagnostico, setDiagnostico] = useState('');

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
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Pacientes</Text>
      <FlatList
  data={pacientes}
  keyExtractor={(paciente) => paciente._id}
  renderItem={({ item }) => <PacienteItem paciente={item} />}
/>
      <Text style={{ fontSize: 18, marginTop: 16 }}>Criar paciente</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 8 }}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16 }}
        placeholder="Diagnóstico"
        value={diagnostico}
        onChangeText={(text) => setDiagnostico(text)}
      />
      <Button title="Criar" onPress={handleCriarPaciente} />
    </View>
  );
};

export default App;