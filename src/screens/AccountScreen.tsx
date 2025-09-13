import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Switch } from 'react-native';

const Container = styled.ScrollView`    
  flex: 1;
  background-color: #000;
  padding: 20px;
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
  return (
    <Container>
      <SectionTitle>Conta Digital</SectionTitle>
      <Item><ItemText>Lucas</ItemText></Item>
      <Item><ItemText>XP: 0 | Nível: 3</ItemText></Item>
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
    </Container>
  );
}
