import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import PickerBox from '../../components/PickerBox';

import {
  Container,
  PageTitle,
  PageSubtitle,
  FormContainer,
  ControlsContainer,
  ControlLink,
} from './styles';
import colors from '../../styles/colors';

export default function SignUp({ navigation }) {
  const [step, setStep] = useState(0);
  const [subtitle, setSubtitle] = useState('');

  useEffect(() => {
    switch (step) {
      case 0: {
        setSubtitle(
          'Informe seu número de telefone para iniciar o processo de cadastro.'
        );
        break;
      }
      case 1: {
        setSubtitle('Qual seu nome? Se quiser, fale um pouco sobre você... ');
        break;
      }
      case 2: {
        setSubtitle(
          'Agora, se desejar, escolha uma foto para que seus amigos te vejam!'
        );
        break;
      }
      default:
        break;
    }
  }, [step]);

  /**
   * Controls step transitions for the form.
   *
   * @param {String} direction  case 'back' return to step before; case
   *                            'forward' advances to next step
   */
  function changeStep(direction) {
    if (direction === 'back') {
      if (step === 0) navigation.goBack();
      else setStep(step - 1);
    } else if (step < 2) setStep(step + 1);
  }

  const pickerItems = [
    { value: 'br', label: 'Brasil' },
    { value: 'es', label: 'Espanha' },
    { value: 'eua', label: 'Estados Unidos' },
  ];

  return (
    <Container>
      <StatusBar style="dark" />

      <View>
        <PageTitle>Cadastro</PageTitle>
        <PageSubtitle>{subtitle}</PageSubtitle>
      </View>

      <FormContainer>
        {step === 0 && <PickerBox items={pickerItems} />}
      </FormContainer>

      <ControlsContainer>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => changeStep('back')}
        >
          <ControlLink>Voltar</ControlLink>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => changeStep('forward')}
        >
          <ControlLink color={colors.primaryBlue}>Próximo</ControlLink>
        </TouchableOpacity>
      </ControlsContainer>
    </Container>
  );
}
