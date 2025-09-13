import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { DashboardScreen } from '../screens/DashboardScreen';
import { ProductsScreen } from '../screens/ProductsScreen';
import { AccountScreen } from '../screens/AccountScreen';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Dashboard: undefined;
  Products: undefined;
  Account: undefined;
  Investimentos: undefined;
  Banco: undefined;
  Bolsa: undefined;
  Main: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#111' },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#888',
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Investimentos') return <Ionicons name="bar-chart" size={size} color={color} />;
          if (route.name === 'Banco') return <Ionicons name="cash" size={size} color={color} />;
          if (route.name === 'Bolsa') return <Ionicons name="stats-chart" size={size} color={color} />;
          if (route.name === 'Produtos') return <Ionicons name="grid" size={size} color={color} />;
          return null;
        },
      })}
    >
      <Tab.Screen name="Investimentos" component={HomeScreen} options={{ tabBarLabel: 'Investimentos' }} />
      <Tab.Screen name="Banco" component={DashboardScreen} options={{ tabBarLabel: 'Banco' }} />
      <Tab.Screen name="Bolsa" component={AccountScreen} options={{ tabBarLabel: 'Bolsa' }} />
      <Tab.Screen name="Produtos" component={ProductsScreen} options={{ tabBarLabel: 'Produtos' }} />
    </Tab.Navigator>
  );
}

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


