import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Form as Unform } from '@unform/mobile';

import { Regular, SemiBold, Bold } from '../../styles/fonts';
import colors from '../../styles/colors';

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;
  background: white;
  padding: 20px;
`;

export const PageTitle = styled(Bold)`
  font-size: 32px;
  line-height: 40px;
  color: ${colors.black};
  margin-bottom: 10px;
`;

export const PageSubtitle = styled(Regular)`
  font-size: 20px;
  line-height: 25px;
  color: ${colors.black};
  margin-bottom: 100px;
`;

export const FormContainer = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Form = styled(Unform)`
  width: 100%;
`;

export const ControlsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ControlLink = styled(SemiBold)`
  font-size: 20px;
  line-height: 25px;
  color: ${(props) => props.color || colors.darkGray};
`;
