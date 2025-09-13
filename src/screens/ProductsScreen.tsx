import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

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

const MenuGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MenuItem = styled.TouchableOpacity`
  background-color: #1c1c1e;
  border-radius: 12px;
  width: 48%;
  padding: 20px;
  margin-bottom: 15px;
  align-items: center;
`;

const MenuText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const ProductsScreen: React.FC = () => {
  return (
    <Container>
      <SectionTitle>Produtos</SectionTitle>
      <MenuGrid>
        <MenuItem><MenuText>Renda Fixa</MenuText></MenuItem>
        <MenuItem><MenuText>Fundos de Investimentos</MenuText></MenuItem>
        <MenuItem><MenuText>Bolsa</MenuText></MenuItem>
        <MenuItem><MenuText>Ofertas Públicas</MenuText></MenuItem>
        <MenuItem><MenuText>COE</MenuText></MenuItem>
        <MenuItem><MenuText>Previdência</MenuText></MenuItem>
        <MenuItem><MenuText>Tesouro Direto</MenuText></MenuItem>
        <MenuItem><MenuText>XPlay</MenuText></MenuItem>
      </MenuGrid>
      <SectionTitle>Soluções Financeiras</SectionTitle>
      <MenuGrid>
        <MenuItem><MenuText>Conta Digital</MenuText></MenuItem>
        <MenuItem><MenuText>Open Finance</MenuText></MenuItem>
        <MenuItem><MenuText>Câmbio</MenuText></MenuItem>
        <MenuItem><MenuText>Consórcio</MenuText></MenuItem>
      </MenuGrid>
      <SectionTitle>Seguros e Crédito</SectionTitle>
      <MenuGrid>
        <MenuItem><MenuText>Seguros</MenuText></MenuItem>
        <MenuItem><MenuText>Crédito</MenuText></MenuItem>
      </MenuGrid>
    </Container>
  );
}
