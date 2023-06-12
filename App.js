import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import Cadastro from './telas/Cadastro';
import Login from './telas/Login';
import RecuperacaoSenha from './telas/RecuperacaoSenha';
import Dashboard from './telas/Dashboard';


const App = () => {
  const [currentPage, setCurrentPage] = useState('Login');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Login':
        return <Login onPageChange={handlePageChange} />;
      case 'Cadastro':
        return <Cadastro onPageChange={handlePageChange} />;
      case 'RecuperacaoSenha':
        return <RecuperacaoSenha onPageChange={handlePageChange} />;
      case 'Dashboard':
        return <Dashboard onPageChange={handlePageChange} />;
      default:
        return null;
    }
  };

  return (
    <View>
      {renderPage()}
    </View>
  );
};


export default App;
