import React from 'react';
import { View, Text } from 'react-native';

const Login = ({ onPageChange }) => {
  return (
    <View>
      <Text>Bem-vindo ao Centro de Trocas!</Text>
      <Text>Usuário:</Text>
      <Text>Senha:</Text>
      <Button title="Entrar" onPress={() => onPageChange('dashboard')} />
      <Button title="Não tem Conta? Cadastre-se Aqui!" onPress={() => onPageChange('cadastro')} />
      <Button title="Esqueceu sua Senha?" onPress={() => onPageChange('recuperacaoSenha')} />
    </View>
  );
};

export default Login;
