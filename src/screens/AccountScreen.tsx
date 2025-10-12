import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import { Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { useUser } from '../context/UserContext';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
  padding: 20px;
`;

const HeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Circle = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #222;
  align-items: center;
  justify-content: center;
`;

const BigCircle = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: #222;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

const LevelBarContainer = styled.View`
  flex: 1;
  height: 16px;
  background-color: #333;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 4px;
`;

const LevelBarFill = styled.View`
  height: 100%;
  background-color: #fff;
  width: 40%;
`;

const RankBarContainer = styled.View`
  width: 100%;
  height: 12px;
  background-color: #333;
  border-radius: 6px;
  overflow: hidden;
  margin: 16px 0 24px 0;
`;


const XPBarContainer = styled.View`
  flex: 1;
  height: 12px;
  background-color: #333;
  border-radius: 6px;
  overflow: hidden;
  margin-left: 12px;
`;

const XPBarFill = styled.View`
  height: 100%;
  background-color: #fff;
  width: 60%;
`;

const RankBarFill = styled.View`
  height: 100%;
  background-color: #fff;
  width: 60%;
`;

const SectionTitle = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Item = styled.View`
  background-color: #1c1c1e;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 10px;
`;

const ItemText = styled.Text`
  color: #fff;
  font-size: 16px;
`;


export const AccountScreen: React.FC = () => {
  const navigation = useNavigation();
  const { user } = useUser();
  const getInitials = (name: string) => {
    if (!name) return '';
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };
  const handleLogout = async () => {
    await AsyncStorage.removeItem('isLoggedIn');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };
  return (
    <Container>
      <HeaderRow>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Circle>
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </Circle>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Circle>
            <Ionicons name="chatbubble-ellipses-outline" size={22} color="#fff" />
          </Circle>
          <Circle>
            <Ionicons name="notifications-outline" size={22} color="#fff" />
          </Circle>
        </View>
      </HeaderRow>

      <SectionTitle>Conta Digital</SectionTitle>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
        <BigCircle>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 28 }}>{getInitials(user?.name || '')}</Text>
        </BigCircle>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>{user?.name || 'Usuário'}</Text>
            <XPBarContainer>
              <XPBarFill />
            </XPBarContainer>
            <Text style={{ color: '#fff', fontSize: 12, marginLeft: 8 }}>120/300 XP</Text>
          </View>
          <Text style={{ color: '#fff', fontSize: 12, marginTop: 2 }}>Nível 3</Text>
        </View>
      </View>

const XPBarContainer = styled.View`
  width: 60px;
  height: 8px;
  background-color: #333;
  border-radius: 4px;
  overflow: hidden;
`;

const XPBarFill = styled.View`
  height: 100%;
  background-color: #42a5f5;
  width: 40%;
`;
      <RankBarContainer>
        <RankBarFill />
      </RankBarContainer>
      <Text style={{ color: '#fff', fontSize: 12, marginBottom: 16 }}>Ranking: Ouro</Text>


      <Item><ItemText>Agência: 0001 | Conta: 123456-7</ItemText></Item>
      <Item><ItemText>Central de benefícios</ItemText></Item>

      <SectionTitle>Mais informações</SectionTitle>
      <Item><ItemText>Aprovações</ItemText></Item>
      <Item><ItemText>Ordens</ItemText></Item>
      <Item><ItemText>Preferências de notificação</ItemText></Item>
      <Item><ItemText>Central de Segurança</ItemText></Item>
      <Item><ItemText>Perfil de investimentos</ItemText></Item>
      <Item><ItemText>Imposto de renda</ItemText></Item>
      <Item><ItemText>Avisos e Regras</ItemText></Item>
      <Item><ItemText>Indique e ganhe</ItemText></Item>

      <SectionTitle>Personalização</SectionTitle>
      <Item style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <ItemText>Modo Bolsa</ItemText>
        <Switch value={true} />
      </Item>
      <Item><ItemText>Aparência</ItemText></Item>

      <SectionTitle>Serviços</SectionTitle>
      <Item><ItemText>Consulta de boletos - DDA</ItemText></Item>
      <Item><ItemText>Configurações Pix</ItemText></Item>
      <Item><ItemText>Benefícios do Cartão</ItemText></Item>
      <Item><ItemText>Seguros</ItemText></Item>
      <Item><ItemText>Crédito</ItemText></Item>
      <Item><ItemText>Open Finance</ItemText></Item>

      <SectionTitle>Missões do Dia</SectionTitle>
      <Item><ItemText>Explore a Bolsa (+20 XP)</ItemText></Item>
      <Item><ItemText>Confira o seu Portfólio (+10 XP)</ItemText></Item>

      <SectionTitle>Minha conta</SectionTitle>
      <Item><ItemText>Dados cadastrais</ItemText></Item>
      <Item><ItemText>Conta para menor de idade</ItemText></Item>

      <TouchableOpacity
        style={{
          marginTop: 32,
          backgroundColor: '#FF5555',
          borderRadius: 8,
          paddingVertical: 14,
          alignItems: 'center',
        }}
        onPress={handleLogout}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Sair da conta</Text>
      </TouchableOpacity>
    </Container>
  );
}
