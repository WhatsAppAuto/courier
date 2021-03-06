import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import PickerBox from '../../components/PickerBox';
import LineInput from '../../components/LineInput';

import {
  Container,
  PageTitle,
  PageSubtitle,
  FormContainer,
  Form,
  ControlsContainer,
  ControlLink,
} from './styles';
import colors from '../../styles/colors';

export default function SignUp({ navigation }) {
  const formRef = useRef(null);

  const [step, setStep] = useState(0);
  const [subtitle, setSubtitle] = useState('');
  const [data, setData] = useState({});
  const [selectedItem, setSelectedItem] = useState({}); // For Picker

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
   * Controls step transitions for the form. In the final step, it will submit
   * the form.
   *
   * @param {String} direction  case 'back' return to step before; case
   *                            'forward' advances to next step
   */
  function changeStep(direction) {
    if (direction === 'back') {
      if (step === 0) navigation.goBack();
      else setStep(step - 1);
    } else if (step < 2) {
      setData({ ...data, ...formRef.current.getData() });
      setStep(step + 1);
    } else formRef.current.submitForm();
  }

  const pickerItems = [
    { value: 'br', label: 'Brasil' },
    { value: 'es', label: 'Espanha' },
    { value: 'eua', label: 'Estados Unidos' },
  ];

  async function handleSelection(item) {
    setSelectedItem(item);

    // TODO : fetch countries by an API
  }

  async function handleSubmit() {
    console.log(data);
  }

  return (
    <Container>
      <StatusBar style="dark" />

      <View>
        <PageTitle>Cadastro</PageTitle>
        <PageSubtitle>{subtitle}</PageSubtitle>
      </View>

      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={data}>
          {step === 0 && (
            <>
              <PickerBox
                items={pickerItems}
                selectedItem={selectedItem}
                onSelect={handleSelection}
              />
              <LineInput name="teste" />
            </>
          )}
        </Form>
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
