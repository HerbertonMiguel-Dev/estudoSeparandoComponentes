// Importa bibliotecas e componentes necessários do React e React Native
import React, { useState } from "react"; // Importa React e o hook useState
import { View, StyleSheet, FlatList, Text } from "react-native"; // Importa componentes de layout e estilização do React Native

import Pessoa from "./src/Pessoa"; // Importa o componente Pessoa da pasta src

// Componente principal da aplicação
export default function App() {
  // Declara um estado chamado feed, com dados de exemplo sobre pessoas
  const [feed, setFeed] = useState([
    { id: '1', nome:'Sujeito Programador', cargo:'Programador'},

  ]);

  // Retorna o layout da aplicação
  return (
    
    // Contêiner principal 

    
    <View style={styles.container}> 
      <Text style={styles.containerTexto}>Seja Bem Vindo!</Text>
      <FlatList
        showsVerticalScrollIndicator={false} // Oculta a barra de rolagem vertical
        data={feed} // Dados a serem exibidos na lista
        renderItem={({ item }) => <Pessoa data={item} />} // Renderiza cada item usando o componente Pessoa
      />

    </View>
  );
}

// Estilos para os componentes
const styles = StyleSheet.create({
    container: {
    flex: 1, // Ocupa todo o espaço disponível na tela
  },
  containerTexto:{
    textAlign: 'center',
    padding: 16,
    fontWeight:'bold',
    fontSize: 18,
    color: '#000'
  }
});
