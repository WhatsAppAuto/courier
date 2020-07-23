import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { Container, Border, TextInput, Label } from './styles';
import colors from '../../styles/colors';

export default function LineInput({ name, label, width = '100%', ...rest }) {
  const inputRef = useRef(null);

  const {
    fieldName,
    registerField,
    defaultValue,
    error,
    clearError,
  } = useField(name);

  const [valid, setValid] = useState(false);
  const [active, setActive] = useState(false);
  const [borderColors, setBorderColors] = useState([
    colors.lightGray,
    colors.lightGray,
  ]);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    if (inputRef.current) {
      const { value } = inputRef.current;

      if (value && value !== '') setValid(true);
      else setValid(false);
    }
  }, [inputRef.current]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    if (active) setBorderColors([colors.primaryGreen, colors.primaryBlue]);
    else if (valid) setBorderColors([colors.gray, colors.gray]);
    else setBorderColors([colors.lightGray, colors.lightGray]);
  }, [active]);

  return (
    <Container width={width}>
      {label && (
        <Label error={error} active={active} valid={valid}>
          {label}
        </Label>
      )}
      <TextInput
        ref={inputRef}
        keyboardAppearance="dark"
        defaultValue={defaultValue}
        style={{ includeFontPadding: true, textAlignVertical: 'center' }}
        onFocus={() => {
          clearError();
          setActive(true);
        }}
        onBlue={() => setActive(false)}
        onChangeText={(value) => {
          if (inputRef.current) {
            inputRef.current.value = value;
          }
        }}
        {...rest}
      />
      <Border
        width={width}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={borderColors}
      />
    </Container>
  );
}
