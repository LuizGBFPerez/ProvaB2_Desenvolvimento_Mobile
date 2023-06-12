import React from 'react';
import { View, Text } from 'react-native';

const Cadastro = ({ onPageChange }) => {
  return (
    <View>
      <Text>Tela de Cadastro</Text>
      <Button title="Ir para Login" onPress={() => onPageChange('login')} />
      <Button title="Ir para Recuperação de Senha" onPress={() => onPageChange('recuperacaoSenha')} />
      <Button title="Ir para Dashboard" onPress={() => onPageChange('dashboard')} />
    </View>
  );
};

export default Cadastro;
