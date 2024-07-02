import React, { FC, useCallback, useEffect, useState } from 'react'
import {
  Button,
  ButtonProps,
  Icon,
  CircularProgress,
  Divider,
  useToast,
  Text,
  Box,
} from '@chakra-ui/react'
import { FaChevronDown, FaDownload } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'

import { SiJavascript, SiTypescript } from 'react-icons/si'
import BaseMenu from '../base/BaseMenu'
import BaseMenuItem from '../base/BaseMenuItem'
import { API_ENDPOINT } from '../../constants'
import { Theme, useThemeEditor } from '../../hooks/useThemeEditor'
import { BsArrowRight } from 'react-icons/bs'

const GENERATE_THEME_ENDPOINT = `${API_ENDPOINT}/generate-theme`

type Props = {
  baseTheme: any
  selectedProperties: string[] | number[]
  selectedLanguage: string
} & ButtonProps

export const ThemeDownloadButton: FC<Props> = ({
  baseTheme,
  selectedProperties,
  selectedLanguage,
  ...rest
}) => {
  const [downloading, setDownloading] = useState<boolean>(false)
  let { theme } = useThemeEditor()
  const [editableTheme, setEditableTheme] = useState(baseTheme)
  const toast = useToast()

  const objectify = (array) => {
    return array.reduce((obj, item) => {
      if (theme !== undefined) {
        obj[item] = theme[item]
        return obj
      }
    }, {})
  }

  useEffect(() => {
    const selected = objectify(selectedProperties)
    setEditableTheme({ ...selected, ...baseTheme })
  }, [selectedProperties])

  const handleDownload = useCallback(
    (language: string) => async () => {
      try {
        setDownloading(true)
        const result = await fetch(GENERATE_THEME_ENDPOINT, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ theme: { ...editableTheme }, language }),
        })

        if (!result.ok) {
          const jsonResult = await result.json()
          toast({
            title: 'Error during the download.',
            description: jsonResult.error,
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
          return
        }
        const resultBlob = await result.blob()
        const url = window.URL.createObjectURL(resultBlob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'theme.zip'
        document.body.appendChild(a) // we need to append the element to the dom -> otherwise it will not work in firefox
        a.click()
        a.remove()
      } catch (error) {
        console.log('wee error', error)
        // show an alert here
        // toast({
        //   title: 'Error during the download.',
        //   description: <>{error?.messagge}</> || <>Unexpected error</>,
        //   status: 'error',
        //   duration: 5000,
        //   isClosable: true,
        // })
      } finally {
        setDownloading(false)
      }
    },
    [theme, editableTheme, toast]
  )

  return (
    <Button
      size="md"
      colorScheme="primary"
      variant="solid"
      borderRadius="3xl"
      isLoading={downloading}
      disabled={downloading || selectedProperties.length === 0}
      w="fit-content"
      px={10}
      onClick={handleDownload(selectedLanguage)}
      {...rest}
    >
      Export <Icon boxSize={4} ml={2} as={BsArrowRight} />
    </Button>
  )
}

/* 
 return (
    <BaseMenu
      hasPortal={false}
      offset={[0, 10] as any}
      placement="top-start"
      trigger={<ThemeDownloadMenuButton />}
      buttonProps={{ w: { base: '100%', md: 'initial' } }}
    >
      <BaseMenuItem
        colorScheme="blue"
        icon={SiTypescript}
        onClick={handleDownload('ts')}
        isDisabled={downloading}
        endIcon={FaDownload}
      >
        Export TypeScript {downloading && <CircularProgress isIndeterminate />}
      </BaseMenuItem>
      <Divider />
      <BaseMenuItem
        colorScheme="yellow"
        icon={SiJavascript}
        onClick={handleDownload('js')}
        isDisabled={downloading}
        endIcon={FaDownload}
      >
        Export JavaScript {downloading && <CircularProgress isIndeterminate />}
      </BaseMenuItem>
    </BaseMenu>
  )
*/
