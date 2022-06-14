import { useState } from 'react'

const useLocalStorage = <T>(key: string, initialValue?: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(
        `#useLocalStorage: an error occurred loading the localStorage key “${key}”:`,
        error
      )
      return initialValue
    }
  })

  const setValue = (value: T) => {
    if (typeof window === 'undefined') {
      console.warn(
        `#useLocalStorage: impossible to set the localStorage “${key}” inside a no-client context.`
      )
    }

    try {
      const valueToStore =
        typeof value === 'function' ? value(storedValue) : value

      localStorage.setItem(key, JSON.stringify(valueToStore))
      setStoredValue(valueToStore)
    } catch (error) {
      console.warn(
        `#useLocalStorage: error setting the localStorage key “${key}”:`,
        error
      )
    }
  }

  return [storedValue, setValue] as const
}

export default useLocalStorage
