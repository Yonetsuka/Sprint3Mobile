import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { AppHeader } from '../components/AppHeader';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
  padding: 24px;
`;



const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 18px;
`;

const BalanceCard = styled.View`
  background-color: #1c1c1e;
  border-radius: 16px;
  padding: 22px 18px 18px 18px;
  margin-bottom: 22px;
`;

const BalanceLabel = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-bottom: 8px;
`;

const BalanceValue = styled.Text`
  color: #ffd700;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 18px;
`;

const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  gap: 10px;
`;

const WhiteButton = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 8px;
  padding: 10px 0;
  flex: 1;
  align-items: center;
`;

const BlackButton = styled.TouchableOpacity`
  background-color: #000;
  border: 1px solid #fff;
  border-radius: 8px;
  padding: 10px 0;
  flex: 1;
  align-items: center;
`;

const ButtonTextBlack = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 15px;
`;

const ButtonTextWhite = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;


const PerfilCard = styled.View`
  background-color: #1c1c1e;
  border-radius: 16px;
  padding: 18px 18px 12px 18px;
  margin-bottom: 22px;
  margin-top: 10px;
`;

const InfoText = styled.Text`
  color: #fff;
  font-size: 15px;
  margin-bottom: 14px;
`;

const YellowButton = styled.TouchableOpacity`
  background-color: #ffd700;
  border-radius: 8px;
  padding: 12px 0;
  align-items: center;
`;

const YellowButtonText = styled.Text`
  color: #222;
  font-weight: bold;
  font-size: 16px;
`;

export const HomeScreen: React.FC = () => {
  return (
    <Container>
      <AppHeader />
      <Title>Comece a investir</Title>
      <BalanceCard>
        <BalanceLabel>Saldo investido</BalanceLabel>
        <BalanceValue>R$ 0,00</BalanceValue>
        <ButtonRow>
          <WhiteButton>
            <ButtonTextBlack>Agência e Conta</ButtonTextBlack>
          </WhiteButton>
          <BlackButton>
            <ButtonTextWhite>Pix</ButtonTextWhite>
          </BlackButton>
        </ButtonRow>
      </BalanceCard>
      <PerfilCard>
        <InfoText>O perfil de investidor ainda não foi escolhido.</InfoText>
        <YellowButton>
          <YellowButtonText>Escolher o perfil investidor</YellowButtonText>
        </YellowButton>
      </PerfilCard>
    </Container>
  );
};


