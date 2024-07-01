import { useEffect, useState } from 'react'

function isSafariBrowser() {
  const is_chrome = navigator.userAgent.indexOf('Chrome') > -1
  const is_safari = navigator.userAgent.indexOf('Safari') > -1

  if (is_safari) {
    if (is_chrome)
      // Chrome seems to have both Chrome and Safari userAgents
      return false
    else return true
  }
  return false
}

export const isBrowserCompatible = (): boolean => {
  // Firefox 1.0+
  // eslint-disable-next-line @typescript-eslint/dot-notation
  const isFirefox = typeof window['InstallTrigger'] !== 'undefined'

  // Safari 3.0+ "[object HTMLElementConstructor]"
  const isSafari = isSafariBrowser()

  // Internet Explorer 6-11
  const isIE = /* @cc_on!@ */ false || !!(document as any).documentMode

  if (isFirefox || isSafari || isIE) {
    return false
  }

  return true
}

export const useIsBrowserCompatible = (): boolean => {
  const [isCompatible, setIsCompatible] = useState<boolean>(true)

  useEffect(() => {
    setIsCompatible(isBrowserCompatible())
  }, [])

  return isCompatible
}
