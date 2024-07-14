import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';

const SignUp = ({ form, handleSignUpChange, signUp }) => {
  return (
    <ImageBackground source={require('./assets/background.jpg')} style={styles.backgroundImage}>
      <View style={styles.page}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={form.username}
          onChangeText={(value) => handleSignUpChange('username', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={form.password}
          onChangeText={(value) => handleSignUpChange('password', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={form.conpassword}
          onChangeText={(value) => handleSignUpChange('conpassword', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={form.email}
          onChangeText={(value) => handleSignUpChange('email', value)}
        />
        <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={signUp}>
          <Text style={styles.buttonText}>Register yourself!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SignUp;
