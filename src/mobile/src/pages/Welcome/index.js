import React from 'react';
import { StatusBar } from 'expo-status-bar';

import OutlineButton from '../../components/OutlineButton';

import { Container, Header, Logo, Greeting, Salutation } from './styles';
import colors from '../../styles/colors';

import logo from '../../../assets/icon/foreground.png';

export default function Welcome({ navigation }) {
  return (
    <Container colors={[colors.primaryGreen, colors.primaryBlue]}>
      <StatusBar style="light" />

      <Header>
        <Logo source={logo} />
        <Greeting>Olá!</Greeting>
        <Salutation>Bem-vindo ao Courier!</Salutation>
      </Header>

      <OutlineButton
        color="white"
        label="iniciar"
        width="260px"
        onPress={() => navigation.navigate('SignUp')}
      />
    </Container>
  );
}
