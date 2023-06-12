import React from 'react';
import { View, Text } from 'react-native';

const RecuperacaoSenha = ({ onPageChange }) => {
  return (
    <View>
      <Text>Tela de Recuperação de Senha</Text>
      <Button title="Ir para Login" onPress={() => onPageChange('login')} />
      <Button title="Ir para Cadastro" onPress={() => onPageChange('cadastro')} />
      <Button title="Ir para Dashboard" onPress={() => onPageChange('dashboard')} />
    </View>
  );
};

export default RecuperacaoSenha;
