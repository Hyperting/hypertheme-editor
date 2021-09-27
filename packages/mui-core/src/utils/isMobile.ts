import { useEffect, useState } from 'react'

export const isMobile = () => {
  if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  }
  return false
}

export const useIsMobile = (): boolean => {
  const [isMobileState, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    setIsMobile(isMobile())
  }, [])

  return isMobileState
}
