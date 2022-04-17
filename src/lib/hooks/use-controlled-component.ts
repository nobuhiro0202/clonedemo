import { useState } from 'react';

export default function useControlledComponent<T>(initialValue: T) {
  const 
    [value, setValue] = useState(initialValue),
    onChangeText = (newValue: T) => {
      setValue(newValue);
    };

  return {
    value,
    onChangeText,
  };
}