import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './components/HomePage';

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
