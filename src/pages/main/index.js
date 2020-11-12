import React, { useEffect, useContext, useState } from 'react';

import { FlatList, Text, View, Button, StyleSheet } from 'react-native';

import AuthContext from "../../contexts/auth";
import AppService from '../../services/app.service.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const Projetos = () => {
  const { logout } = useContext(AuthContext);
  const [projetos, setProjetos] = useState([]);

  function handleSignOut() {
    logout();
  }

  useEffect(() => {
    atualizarLista();
  }, []);

  const atualizarLista = () => {
    AppService.listProjetos()
          .then(data => {
              setProjetos(data);
          });
  };

  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={handleSignOut} />
      <FlatList
        data={projetos}
        renderItem={({item}) => <Text style={styles.item}>{item.nome}</Text>}
        keyExtractor={(item, index) => item.id.toString()}
      />
    </View>
  );
};

export default Projetos;