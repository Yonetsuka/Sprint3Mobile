import React, { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  background-color: #FFB800;
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

const LoginLink = styled.Text`
  color: #007aff;
  margin-top: 15px;
`;

export const RegisterScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async () => {
    setError('');
    setSuccess('');
    if (!name || !email || !password || !confirmPassword) {
      setError('Preencha todos os campos.');
      return;
    }
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }
    try {
      await AsyncStorage.setItem('user', JSON.stringify({ name, email, password }));
      setSuccess('Cadastro realizado com sucesso!');
      setTimeout(() => {
        navigation.navigate('Login');
      }, 1200);
    } catch (e) {
      setError('Não foi possível salvar os dados.');
    }
  };

  return (
    <Container>
      <Title>Registrar</Title>
      <Input
        placeholder="Nome"
        placeholderTextColor="#8e8e93"
        value={name}
        onChangeText={setName}
      />
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
      <Input
        placeholder="Confirme a Senha"
        placeholderTextColor="#8e8e93"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      {error ? (
        <Text style={{ color: '#ff5555', marginBottom: 10, fontWeight: 'bold' }}>{error}</Text>
      ) : null}
      {success ? (
        <Text style={{ color: '#FFB800', marginBottom: 10, fontWeight: 'bold' }}>{success}</Text>
      ) : null}
      <Button onPress={handleRegister}>
        <ButtonText>Registrar</ButtonText>
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <LoginLink>Já tem uma conta? Entrar</LoginLink>
      </TouchableOpacity>
    </Container>
  );
};
