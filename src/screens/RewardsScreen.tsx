import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  background: transparent;
`;

const Container = styled.ScrollView`
  flex: 1;
  background-color: #111;
  padding: 20px;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const XPCard = styled.View`
  background-color: #222;
  border-radius: 12px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const XPText = styled.Text`
  color: #ffd700;
  font-size: 22px;
  font-weight: bold;
  margin-left: 10px;
`;

const SectionTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const BenefitCard = styled.View`
  background-color: #222;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const BenefitInfo = styled.View`
  flex: 1;
  margin-left: 15px;
`;

const BenefitTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const BenefitDesc = styled.Text`
  color: #ccc;
  font-size: 13px;
  margin-bottom: 5px;
`;

const BenefitXP = styled.Text`
  color: #ffd700;
  font-size: 15px;
  font-weight: bold;
`;

const RedeemButton = styled.TouchableOpacity`
  background-color: #ffd700;
  border-radius: 8px;
  padding: 8px 16px;
  align-items: center;
  margin-top: 5px;
`;

const RedeemText = styled.Text`
  color: #222;
  font-weight: bold;
  font-size: 15px;
`;

export const RewardsScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="#fff" />
      </BackButton>
      <Title style={{ textAlign: 'center', marginTop: 8 }}>Recompensas</Title>
      <XPCard>
        {/* Ícone XPlay */}
        <Image source={require('../../assets/xplay.png')} style={{ width: 32, height: 32 }} />
        <XPText>8.350 XP</XPText>
      </XPCard>
      <SectionTitle>Loja de Benefícios</SectionTitle>
      <BenefitCard>
        <Image source={require('../../assets/cashback.png')} style={{ width: 40, height: 40 }} />
        <BenefitInfo>
          <BenefitTitle>Cashback em Investimentos</BenefitTitle>
          <BenefitDesc>Verifique mais detalhes ao clicar em Resgatar</BenefitDesc>
          <BenefitXP>2.500 XP</BenefitXP>
        </BenefitInfo>
        <RedeemButton><RedeemText>Resgatar</RedeemText></RedeemButton>
      </BenefitCard>
      <BenefitCard>
        <Image source={require('../../assets/premium.png')} style={{ width: 40, height: 40 }} />
        <BenefitInfo>
          <BenefitTitle>Curso Premium</BenefitTitle>
          <BenefitDesc>Acesso a aulas e conteúdos exclusivos</BenefitDesc>
          <BenefitXP>3.000 XP</BenefitXP>
        </BenefitInfo>
        <RedeemButton><RedeemText>Resgatar</RedeemText></RedeemButton>
      </BenefitCard>
      <BenefitCard>
        <Image source={require('../../assets/consultoria.png')} style={{ width: 40, height: 40 }} />
        <BenefitInfo>
          <BenefitTitle>Consultoria Exclusiva</BenefitTitle>
          <BenefitDesc>Verifique mais detalhes ao clicar em Resgatar</BenefitDesc>
          <BenefitXP>3.000 XP</BenefitXP>
        </BenefitInfo>
        <RedeemButton><RedeemText>Resgatar</RedeemText></RedeemButton>
      </BenefitCard>
    </Container>
  );
}
