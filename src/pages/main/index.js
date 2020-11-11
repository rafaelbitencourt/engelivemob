import React, { useContext } from 'react';

import { View, Button, StyleSheet } from 'react-native';

import AuthContext from "../../contexts/auth";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

const Main = () => {
  const { logout } = useContext(AuthContext);

  function handleSignOut() {
    logout();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

export default Main;