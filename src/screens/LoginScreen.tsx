import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #000;
  padding: 20px;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  background-color: #1c1c1e;
  border-radius: 8px;
  padding: 0 15px;
  color: #fff;
  margin-bottom: 15px;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #007aff;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const ForgotPasswordText = styled.Text`
  color: #007aff;
  margin-top: 15px;
`;

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async () => {
    setError('');
    setSuccess('');
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        if (email === user.email && password === user.password) {
          setSuccess('Login realizado com sucesso!');
          setTimeout(() => {
            navigation.navigate({ name: 'Main', params: undefined });
          }, 1200);
        } else {
          setError('Email ou senha inválidos.');
        }
      } else {
        setError('Nenhum usuário cadastrado.');
      }
    } catch (e) {
      setError('Não foi possível acessar os dados.');
    }
  };

  return (
    <Container>
      <Title>MedApp</Title>
      <Input
        placeholder="Email"
        placeholderTextColor="#8e8e93"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Senha"
        placeholderTextColor="#8e8e93"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error ? (
        <Text style={{ color: '#ff5555', marginBottom: 10, fontWeight: 'bold' }}>{error}</Text>
      ) : null}
      {success ? (
        <Text style={{ color: '#34c759', marginBottom: 10, fontWeight: 'bold' }}>{success}</Text>
      ) : null}
      <Button onPress={handleLogin}>
        <ButtonText>Entrar</ButtonText>
      </Button>
      <TouchableOpacity>
        <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={{ color: '#34c759', marginTop: 20, fontWeight: 'bold', fontSize: 16 }}>Registrar</Text>
      </TouchableOpacity>
    </Container>
  );
};


