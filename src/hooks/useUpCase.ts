import { useEffect, useState } from 'react';

export const useUpperCase = (initialValue: string) => {
  const transformed = initialValue.toUpperCase();
  const [value, setValue] = useState(transformed);
  const update  = (newValue: string):void => {
    setValue(newValue.toUpperCase());
  }
  useEffect(() => {
    setValue(initialValue.toUpperCase());
  }, [initialValue])

  return { value, update };
}