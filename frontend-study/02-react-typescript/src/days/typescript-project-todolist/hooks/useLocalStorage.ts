import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    try {
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      console.warn(
        `Failed to parse localStorage item for key "${key}". Resetting to initial value.`,
      );
      return initialValue;
    }
  });

  const setStoredValue: React.Dispatch<React.SetStateAction<T>> = (
    newValue,
  ) => {
    const valueToStore =
      typeof newValue === 'function'
        ? (newValue as (prev: T) => T)(value)
        : newValue;

    if (valueToStore === undefined) {
      console.warn(
        `skipping localStorage update for key "${key}" because the value is undefined.`,
      );
    }
    setValue(valueToStore);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [value, setStoredValue] as const;
}
