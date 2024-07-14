import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles';

const GettingStarted = ({ setPage }) => {
  return (
    <ImageBackground source={require('./assets/background.jpg')} style={styles.backgroundImage}>
      <View style={styles.page}>
        <Text style={styles.title}>Get started by creating an account or logging in.</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={() => setPage('login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]} onPress={() => setPage('signUp')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default GettingStarted;