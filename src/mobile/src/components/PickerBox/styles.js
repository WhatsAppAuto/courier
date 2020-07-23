import styled from 'styled-components/native';
import { Picker } from '@react-native-community/picker';

import colors from '../../styles/colors';

export const PickerContainer = styled(Picker)`
  width: ${(props) => props.width};
  height: 50px;
`;

export const Line = styled.View`
  width: ${(props) => props.width};
  height: 2px;
  background: ${colors.lightGray};
`;
