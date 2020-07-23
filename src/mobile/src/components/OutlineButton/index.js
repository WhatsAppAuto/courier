import React from 'react';

import { Touchable, Label } from './styles';

export default function OutlineButton({
  width = '100%',
  color,
  label,
  onPress = () => {},
}) {
  return (
    <Touchable
      width={width}
      color={color}
      activeOpacity={0.8}
      underlayColor="rgba(255, 255, 255, 0.1)"
      onPress={onPress}
    >
      <Label color={color}>{label}</Label>
    </Touchable>
  );
}
