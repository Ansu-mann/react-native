import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';

const Login = ({ loginForm, handleLoginChange, login, setPage }) => {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
      <View style={styles.page}>
        <View style={styles.extbutcon}>
          <TouchableOpacity style={[{ backgroundColor: 'green' }, styles.extbut]} onPress={() => setPage('signUp')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{ backgroundColor: 'gray' }, styles.extbut]} onPress={() => setPage('gettingStarted')}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.translucentContainer, styles.effort]}>
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
          <TouchableOpacity style={[styles.button, { backgroundColor: '#6b9ce5' }]} onPress={login}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;


// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, ImageBackground, setPage } from 'react-native';
// import { AntDesign } from '@expo/vector-icons'; // Import icons from Expo vector icons
// import styles from './styles';

// const Login = ({ loginForm, handleLoginChange, login, setPage }) => {
//   const handleSignUp = () => {
//     setPage('signUp');
//   };

//   const handleHome = () => {
//     setPage('gettingStarted');
//   };

//   return (
//     <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
//       <View style={styles.page}>
//         <View style={styles.extbutcon}>
//           <TouchableOpacity style={[styles.extbut, { backgroundColor: 'green' }]} onPress={handleSignUp}>
//             <Text style={styles.buttonText}>Sign Up</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={[styles.extbut, { backgroundColor: 'gray' }]} onPress={handleHome}>
//             <Text style={styles.buttonText}>Home</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={[styles.translucentContainer, styles.effort]}>
//           <Text style={styles.title}>Login</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Username"
//             value={loginForm.username}
//             onChangeText={(value) => handleLoginChange('username', value)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             secureTextEntry
//             value={loginForm.password}
//             onChangeText={(value) => handleLoginChange('password', value)}
//           />
//           <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]} onPress={login}>
//             <Text style={styles.buttonText}>Login</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ImageBackground>
//   );
// };

// export default Login;

