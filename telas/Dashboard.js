import React from 'react';
import { View, Text } from 'react-native';

const Dashboard = ({ onPageChange }) => {
  const items = [
    {
      image: require('../assets/fire_sword.jpg'),
      name: 'Espada Flamejante',
      description: 'Poder de ataque: 65\nDano Elemental: +20 Fogo\nPeso: 6\nUso: Duas mãos\nUma grande espada abençoada por um sacerdote dragão.',
  
    },
    {
      image: require('../assets/escudo.jpg'),
      name: 'Escudo de Adamante',
      description: 'Poder de defesa: 50\nDefesa Extra: -15 Dano Físico\nPeso: 13\nUm escudo forjado com escamas mais duras que aço.',
    },
    {
      image: require('../assets/poção.jpg'),
      name: 'Poção de cura',
      description: 'Recupera 100 pontos de vida\nMais que vital para qualquer aventureiro.',
    },
  ];

  return (
    <View>
      <Text>Tela de Dashboard do Usuário</Text>
      {items.map((item, index) => (
        <GameCard key={index} item={item} />
      ))}
      <Button title="Ir para Login" onPress={() => onPageChange('login')} />
      <Button title="Ir para Cadastro" onPress={() => onPageChange('cadastro')} />
      <Button title="Ir para Recuperação de Senha" onPress={() => onPageChange('recuperacaoSenha')} />
    </View>
  );
};

export default Dashboard;
