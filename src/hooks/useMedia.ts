import { useState, useEffect, useCallback } from 'react'

const useMedia = <T>(queries: string[], values: T[], defaultValue: T) => {
  const [value, setValue] = useState<T>(defaultValue)

  useEffect(() => {
    const mediaQueryLists = queries.map(q => matchMedia(q))
    const getValue = () => {
      const index = mediaQueryLists.findIndex(mql => mql.matches)
      return values?.[index] || defaultValue
    }
    const handler = () => setValue(getValue)

    handler()
    mediaQueryLists.forEach(mql => mql.addEventListener('change', handler))
    console.log(value)

    return () =>
      mediaQueryLists.forEach(mql => mql.removeEventListener('change', handler))
  }, [])

  return value
}

export default useMedia
