import React, { FC, useCallback, useState } from 'react'
import { Button, ButtonProps, Icon, CircularProgress, Divider, useToast } from '@chakra-ui/react'
import { FaChevronDown, FaDownload } from 'react-icons/fa'
import { SiJavascript, SiTypescript } from 'react-icons/si'
import BaseMenu from '../base/BaseMenu'
import BaseMenuItem from '../base/BaseMenuItem'
import { API_ENDPOINT } from '../../constants'
import { useThemeEditor } from '../../hooks/useThemeEditor'

const GENERATE_THEME_ENDPOINT = `${API_ENDPOINT}/generate-theme`

type Props = {} & ButtonProps

export const ThemeDownloadButton: FC<Props> = ({ ...rest }) => {
  const [downloading, setDownloading] = useState<boolean>(false)
  const { theme } = useThemeEditor()
  const toast = useToast()

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
          body: JSON.stringify({ theme, language }),
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
    [theme, toast]
  )

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
}

const ThemeDownloadMenuButton = ({ downloading = false, ...rest }) => {
  return (
    <Button
      rightIcon={<FaChevronDown />}
      size="md"
      colorScheme="primary"
      variant="solid"
      isLoading={downloading}
      disabled={downloading}
      w="full"
      {...rest}
    >
      <Icon as={FaDownload} mr="0.5rem" /> Export
    </Button>
  )
}
