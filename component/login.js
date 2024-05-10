import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {ToastAndroid} from 'react-native';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../loginSlice';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    // if(username.toLocaleLowerCase() == "admin" && password.toLocaleLowerCase()=="admin") {
      dispatch(loginSuccess(username));
      navigation.navigate("Profile")
    // } else {
    //   ToastAndroid.showWithGravity(
    //     'Username dan password salah',
    //     ToastAndroid.SHORT,
    //     ToastAndroid.CENTER,
    //   );
    // }
    
  };

  const handleRegister = () => {
    navigation.navigate("Register")
    // Logika registrasi disini
    console.log('Registrasi dengan:', username, password);
  };

  const handleFacebookLogin = () => {
    // Logika login dengan Facebook disini
    console.log('Login dengan Facebook');
  };

  const handleGoogleLogin = () => {
    // Logika login dengan Google disini
    console.log('Login dengan Google');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang!</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Masuk</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#3b5998' }]} onPress={handleFacebookLogin}>
        <Text style={styles.buttonText}>Masuk via Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#db4437' }]} onPress={handleGoogleLogin}>
        <Text style={styles.buttonText}>Masuk via Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Daftar Akun Baru</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#1e90ff',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  registerButton: {
    marginTop: 20,
  },
  registerButtonText: {
    fontSize: 16,
    color: '#1e90ff',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
