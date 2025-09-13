import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const HeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #000;
  padding: 24px 24px 0 24px;
`;

const Circle = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: #222;
  align-items: center;
  justify-content: center;
  margin-right: 14px;
`;

const Name = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const AppHeader: React.FC = () => {
  const navigation = useNavigation();
  return (
    <HeaderRow>
      <TouchableOpacity onPress={() => navigation.navigate('Account')}>
        <Circle>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 22 }}>LA</Text>
        </Circle>
      </TouchableOpacity>
      <Name>Lucas Andrade</Name>
    </HeaderRow>
  );
};
