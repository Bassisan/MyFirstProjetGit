/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const App = () => {
  const handlePress = () => {
    Alert.alert('Bouton pressé !');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenue à la formation React Native</Text>
      <Button title="Appuyez ici" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;
