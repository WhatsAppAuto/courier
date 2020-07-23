import styled from 'styled-components/native';

import { Bold } from '../../styles/fonts';

export const Touchable = styled.TouchableHighlight`
  justify-content: center;
  width: ${(props) => props.width};
  height: 50px;
  background: transparent;
  border: 2px solid ${(props) => props.color};
  border-radius: 25px;
  padding: 12px 20px;
`;

export const Label = styled(Bold)`
  width: 100%;
  text-align: center;
  font-size: 20px;
  line-height: 25px;
  text-transform: uppercase;
  color: ${(props) => props.color};
`;
