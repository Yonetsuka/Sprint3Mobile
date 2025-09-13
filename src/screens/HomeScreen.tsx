import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-top: 10px;
`;

export const HomeScreen: React.FC = () => {
  return (
    <Container>
      <Title>Bem-vindo ao MedApp!</Title>
      <Subtitle>Sua saúde em suas mãos.</Subtitle>
    </Container>
  );
};


