import React from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonColumn from './ButtonColumn';

const App = () => {
  return (
    <View style={styles.container}>
      <ButtonColumn />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

