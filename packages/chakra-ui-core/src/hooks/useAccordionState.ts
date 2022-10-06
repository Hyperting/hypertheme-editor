import { useEffect, useState } from 'react'
import { ExpandedIndex } from '@chakra-ui/react'

type UseAccordionStateProps = (
  localStorageKey: string
) => [ExpandedIndex, (index: ExpandedIndex) => void]

export const useAccordionState: UseAccordionStateProps = (localStorageKey) => {
  const [defaultIndex, setDefaultIndex] = useState<ExpandedIndex>(0)

  useEffect(() => {
    try {
      const savedExpandedIndex = localStorage.getItem(localStorageKey)

      if (!savedExpandedIndex) {
        return
      }

      const expandedIndex = JSON.parse(savedExpandedIndex)

      if (
        typeof expandedIndex !== 'number' &&
        !Array.isArray(expandedIndex) &&
        expandedIndex.some((index: unknown) => typeof index !== 'number')
      ) {
        throw new Error('ExpandedIndex should be a number or an array of number')
      }

      setDefaultIndex(expandedIndex)
    } catch {
      localStorage.removeItem(localStorageKey)
    }
  }, [])

  const onChange = (expandedIndex: ExpandedIndex) => {
    setDefaultIndex(expandedIndex)
    localStorage.setItem(localStorageKey, JSON.stringify(expandedIndex))
  }

  return [defaultIndex, onChange]
}