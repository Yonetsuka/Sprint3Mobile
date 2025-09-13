import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { AppHeader } from '../components/AppHeader';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
  padding: 20px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Circle = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #222;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const YellowButton = styled.TouchableOpacity`
  background-color: #ffd700;
  border-radius: 8px;
  padding: 12px 0;
  align-items: center;
  margin-bottom: 10px;
`;

const GrayButton = styled.TouchableOpacity`
  background-color: #222;
  border-radius: 8px;
  padding: 12px 0;
  align-items: center;
  margin-bottom: 10px;
`;

const ServiceCard = styled.View`
  background-color: #1c1c1e;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MissionCard = styled.View`
  background-color: #222;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Card = styled.View`
  background-color: #1c1c1e;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
`;

const CardTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardValue = styled.Text`
  color: #ffd700;
  font-size: 24px;
  font-weight: bold;
`;

export const DashboardScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <AppHeader />

      {/* Saldo */}
      <Row style={{ marginBottom: 10 }}>
        <Text style={{ color: '#fff', fontSize: 16 }}>Saldo conta digital</Text>
        <Text style={{ color: '#ffd700', fontWeight: 'bold' }}>Extrato {'>'}</Text>
      </Row>
      <Text style={{ color: '#fff', fontSize: 32, fontWeight: 'bold', marginBottom: 10 }}>R$ 0,00</Text>
      <Row style={{ marginBottom: 20 }}>
        <YellowButton><Text style={{ color: '#000', fontWeight: 'bold' }}>Pix e Transferir</Text></YellowButton>
        <GrayButton style={{ marginLeft: 10 }}><Text style={{ color: '#fff', fontWeight: 'bold' }}>Pagar</Text></GrayButton>
      </Row>

      {/* Cartão XP */}
      <Row style={{ marginBottom: 10 }}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Cartão XP</Text>
        <Text style={{ color: '#ffd700' }}>Mostrar mais {'>'}</Text>
      </Row>
      <Card style={{ marginBottom: 10 }}>
        <Text style={{ color: '#fff', fontWeight: 'bold', marginBottom: 5 }}>Cartões XP</Text>
        <Text style={{ color: '#fff', marginBottom: 10 }}>Saiba como adquirir o cartão ideal para quem investe</Text>
        <YellowButton><Text style={{ color: '#000', fontWeight: 'bold' }}>Pedir cartão</Text></YellowButton>
      </Card>
      <YellowButton><Text style={{ color: '#000', fontWeight: 'bold' }}>Conheça nossos cartões</Text></YellowButton>

      {/* Missões do Dia */}
      <Text style={{ color: '#fff', fontWeight: 'bold', marginBottom: 10 }}>Missões do Dia</Text>
      <MissionCard>
        <Text style={{ color: '#fff' }}>Explore a Bolsa</Text>
        <Text style={{ color: '#ffd700', fontWeight: 'bold' }}>+ 20 XP</Text>
      </MissionCard>
      <MissionCard>
        <Text style={{ color: '#fff' }}>Confira o seu Portfólio</Text>
        <Text style={{ color: '#ffd700', fontWeight: 'bold' }}>+ 10 XP</Text>
      </MissionCard>

      {/* Serviços */}
      <Text style={{ color: '#fff', fontWeight: 'bold', marginBottom: 10 }}>Serviços</Text>
      <ServiceCard>
        <Text style={{ color: '#fff' }}>Consulta de boletos - DDA</Text>
        <Text style={{ color: '#ffd700' }}>{'>'}</Text>
      </ServiceCard>
      <ServiceCard>
        <Text style={{ color: '#fff' }}>Configurações Pix</Text>
        <Text style={{ color: '#ffd700' }}>{'>'}</Text>
      </ServiceCard>
      <ServiceCard>
        <Text style={{ color: '#fff' }}>Benefícios do Cartão</Text>
        <Text style={{ color: '#ffd700' }}>{'>'}</Text>
      </ServiceCard>
      <ServiceCard>
        <Text style={{ color: '#fff' }}>Seguros</Text>
        <Text style={{ color: '#ffd700' }}>{'>'}</Text>
      </ServiceCard>
      <ServiceCard>
        <Text style={{ color: '#fff' }}>Crédito</Text>
        <Text style={{ color: '#ffd700' }}>{'>'}</Text>
      </ServiceCard>
      <ServiceCard>
        <Text style={{ color: '#fff' }}>Open Finance</Text>
        <Text style={{ color: '#ffd700' }}>{'>'}</Text>
      </ServiceCard>

      {/* Avaliação */}
      <View style={{ marginVertical: 20, alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Avalie sua experiência</Text>
        <Text style={{ color: '#fff' }}>Com o Banco Digital {'>'}</Text>
      </View>
    </Container>
  );
}
