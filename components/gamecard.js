import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const GameCard = ({ item }) => {
  const { image, name, description } = item;

  const handlePress = () => {
    // Lógica para propor a troca
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.button}>Propor troca</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  container:
  {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset:
    {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image:
  {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 8,
  },
  name:
  {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 8,
  },
  description:
  {
    fontSize: 14,
    marginBottom: 8,
  },
  button:
  {
    backgroundColor: '#20B2AA',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
    borderRadius: 8,
  },
};

export default GameCard;
