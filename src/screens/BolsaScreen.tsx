const LogoCircle = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: #222;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;
const StockList = styled.View`
  margin-top: 10px;
`;

const StockItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #18181a;
  border-radius: 10px;
  padding: 14px 16px;
  margin-bottom: 10px;
`;

const StockName = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const StockValue = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 10px;
`;

const StockChange = styled.Text<{ up?: boolean }>`
  color: ${props => props.up ? '#4caf50' : '#ff5252'};
  font-size: 15px;
  font-weight: bold;
  margin-left: 12px;
`;
import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { AppHeader } from '../components/AppHeader';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
  padding: 24px;
`;

const Grid = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const Square = styled.View`
  background-color: #1c1c1e;
  border-radius: 14px;
  width: 23%;
  height: 90px;
  align-items: center;
  justify-content: center;
`;

const SquareText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const BolsaScreen: React.FC = () => {
  return (
    <Container>
      <AppHeader />
      <Grid>
        <Square>
          <Image source={require('../../assets/negociar.png')} style={{ width: 32, height: 32, marginBottom: 8 }} />
          <SquareText>Negociar</SquareText>
        </Square>
        <Square>
          <Image source={require('../../assets/posicao.png')} style={{ width: 32, height: 32, marginBottom: 8 }} />
          <SquareText>Posição</SquareText>
        </Square>
        <Square>
          <Image source={require('../../assets/ordens.png')} style={{ width: 32, height: 32, marginBottom: 8 }} />
          <SquareText>Ordens</SquareText>
        </Square>
        <Square>
          <Image source={require('../../assets/notas.png')} style={{ width: 32, height: 32, marginBottom: 8 }} />
          <SquareText>Notas</SquareText>
        </Square>
      </Grid>
      <StockList>
        <StockItem>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <LogoCircle>
              <Image source={require('../../assets/petr4.png')} style={{ width: 24, height: 24 }} />
            </LogoCircle>
            <StockName>PETR4</StockName>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <StockValue>R$ 37,12</StockValue>
            <StockChange up>+1,25%</StockChange>
          </View>
        </StockItem>
        <StockItem>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <LogoCircle>
              <Image source={require('../../assets/vale3.png')} style={{ width: 24, height: 24 }} />
            </LogoCircle>
            <StockName>VALE3</StockName>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <StockValue>R$ 68,90</StockValue>
            <StockChange>-0,87%</StockChange>
          </View>
        </StockItem>
        <StockItem>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <LogoCircle>
              <Image source={require('../../assets/itub4.png')} style={{ width: 24, height: 24 }} />
            </LogoCircle>
            <StockName>ITUB4</StockName>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <StockValue>R$ 29,45</StockValue>
            <StockChange up>+0,42%</StockChange>
          </View>
        </StockItem>
        <StockItem>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <LogoCircle>
              <Image source={require('../../assets/abev3.png')} style={{ width: 24, height: 24 }} />
            </LogoCircle>
            <StockName>ABEV3</StockName>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <StockValue>R$ 14,22</StockValue>
            <StockChange>-1,10%</StockChange>
          </View>
        </StockItem>
      </StockList>
    </Container>
  );
};
