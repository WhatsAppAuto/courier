import React from 'react';
import { Picker } from '@react-native-community/picker';

import { PickerContainer, Line } from './styles';

export default function PickerBox({
  width = '100%',
  items,
  selectedItem,
  onSelect,
}) {
  const placeholderItem = { value: null, label: 'País' };

  items.unshift(placeholderItem);

  return (
    <>
      <PickerContainer
        width={width}
        selectedValue={selectedItem}
        onValueChange={(item) => onSelect(item)}
      >
        {items.map((item) => (
          <Picker.Item
            key={`${item.value}#${item.label}`}
            label={item.label}
            value={item.value}
          />
        ))}
      </PickerContainer>
      <Line width={width} />
    </>
  );
}
