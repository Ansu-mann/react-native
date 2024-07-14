import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';

const Login = ({ loginForm, handleLoginChange, login }) => {
  return (
    <ImageBackground source={require('./assets/background.jpg')} style={styles.backgroundImage}>
      <View style={styles.page}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={loginForm.username}
          onChangeText={(value) => handleLoginChange('username', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={loginForm.password}
          onChangeText={(value) => handleLoginChange('password', value)}
        />
        <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]} onPress={login}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Login;
