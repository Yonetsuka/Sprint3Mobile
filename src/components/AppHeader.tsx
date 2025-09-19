import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../context/UserContext';

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
  const { user } = useUser();
  const getInitials = (name: string) => {
    if (!name) return '';
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };
  return (
    <HeaderRow>
      <TouchableOpacity onPress={() => navigation.navigate('Account')}>
        <Circle>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 22 }}>{getInitials(user?.name || '')}</Text>
        </Circle>
      </TouchableOpacity>
      <Name>{user?.name || 'Usuário'}</Name>
    </HeaderRow>
  );
};
