import React, { useEffect, useContext, useState } from 'react';

import { TouchableOpacity, FlatList, Text, View, Button, StyleSheet } from 'react-native';

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

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.item}>{item.nome}</Text>
  </TouchableOpacity>
);

const Projetos = ({ navigation }) => {
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

  const renderItem = ({ item }) => {
    // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('Plantas', { idprojeto: item.id})}
        // style={{ backgroundColor }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={handleSignOut} />
      <FlatList
        data={projetos}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id.toString()}
      />
    </View>
  );
};

export default Projetos;