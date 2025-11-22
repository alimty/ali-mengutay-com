'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for managing localStorage with auto-save functionality
 * @param key - localStorage key
 * @param initialValue - default value if nothing in localStorage
 * @param debounceMs - milliseconds to debounce saves (default 500ms)
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  debounceMs: number = 500
): [T, (value: T) => void, boolean] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isLoading, setIsLoading] = useState(true);

  // Load from localStorage on mount (client-side only)
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item !== null) {
        const parsed = JSON.parse(item);
        // Check if parsed value is empty or just whitespace
        if (typeof parsed === 'string' && parsed.trim() === '') {
          // Empty string - use default
          setStoredValue(initialValue);
        } else if (parsed) {
          setStoredValue(parsed);
        } else {
          setStoredValue(initialValue);
        }
      } else {
        // No item in localStorage - use default
        setStoredValue(initialValue);
      }
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      setStoredValue(initialValue);
    } finally {
      setIsLoading(false);
    }
  }, [key, initialValue]);

  // Debounced save to localStorage
  const setValue = useCallback(
    (value: T) => {
      setStoredValue(value);

      // Debounce the save
      const timeoutId = setTimeout(() => {
        try {
          window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
          console.error('Error saving to localStorage:', error);
        }
      }, debounceMs);

      return () => clearTimeout(timeoutId);
    },
    [key, debounceMs]
  );

  return [storedValue, setValue, isLoading];
}

