import React, { FC, useRef, ReactElement } from 'react'
import {
  Alert,
  AlertIcon,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerProps,
  useColorModeValue,
} from '@chakra-ui/react'
import { IconType } from 'react-icons'
import ThemeEditorAccordion from './ThemeEditorAccordion'
import ThemeEditorAccordionItem from './ThemeEditorAccordionItem'
import { useIsMobile } from '../../utils/isMobile'
import { ThemeEditorDrawerHeader, ThemeEditorDrawerHeaderProps } from './ThemeEditorDrawerHeader'
import { ThemeEditorDrawerFooter, ThemeEditorDrawerFooterProps } from './ThemeEditorDrawerFooter'
import CreditsBox from '../base/CreditsBox'
import UpgradeBanner from '../base/UpgradeBanner'
import { useIsBrowserCompatible } from '../../utils/isBrowserCompatible'
import { ThemeEditorRootPanel } from './ThemeEditorRootPanel'
// import { DRAWER_EXPANDED_INDEX_LOCAL_STORAGE_KEY } from '../../constants'

const mobileReadyItems = ['Colors']

export type ThemeEditorDrawerProps = Omit<DrawerProps, 'children' | 'isOpen' | 'onClose'> & {
  children?:
    | ReactElement<{ icon: IconType; title: string } & Record<string, any>>[]
    | ReactElement<{ icon: IconType; title: string } & Record<string, any>>
  hideUpgradeToPro?: boolean
  hideCredits?: boolean
  headerComponent?: React.ReactElement<
    ThemeEditorDrawerHeaderProps,
    React.JSXElementConstructor<ThemeEditorDrawerHeaderProps>
  >
  footerComponent?: React.ReactElement<
    ThemeEditorDrawerFooterProps,
    React.JSXElementConstructor<ThemeEditorDrawerFooterProps>
  >
  // additionalBody?: React.ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const ThemeEditorDrawer: FC<ThemeEditorDrawerProps> = ({
  hideUpgradeToPro,
  hideCredits,
  onClose,
  isOpen,
  children,
  headerComponent = <ThemeEditorDrawerHeader />,
  footerComponent = <ThemeEditorDrawerFooter />,
  ...rest
}) => {
  const bgColor = useColorModeValue('white', 'rgba(23,25,35,1)')
  const btnRef = useRef<any>()
  const initialFocusRef = useRef<any>()
  const isMobile = useIsMobile()
  const isCompatible = useIsBrowserCompatible()
  // const storedIndex = localStorage.getItem(DRAWER_EXPANDED_INDEX_LOCAL_STORAGE_KEY)
  // const defaultIndex = storedIndex && parseInt(storedIndex) >= 0 ? parseInt(storedIndex) : 0

  // const handleOnChangeIndex = (expandedIndex) => {
  //   localStorage.setItem(
  //     DRAWER_EXPANDED_INDEX_LOCAL_STORAGE_KEY,
  //     expandedIndex >= 0 ? expandedIndex : 0
  //   )
  // }

  return (
    <Drawer
      placement="right"
      finalFocusRef={btnRef}
      size="md"
      blockScrollOnMount={false}
      onClose={onClose!}
      isOpen={isOpen!}
      {...rest}
    >
      <DrawerContent
        bgColor={{ md: bgColor }}
        shadow="md"
        fontFamily="Sora, sans-serif"
        lineHeight="1.5"
        zIndex="modal"
      >
        {React.isValidElement(headerComponent) &&
          React.cloneElement<ThemeEditorDrawerHeaderProps>(
            headerComponent as React.ReactElement<ThemeEditorDrawerHeaderProps>,
            {
              onClose,
              initialFocusRef,
            }
          )}
        <DrawerBody
          bgColor="rgba(0,0,0,0)"
          px={{ base: 3, lg: 6 }}
          py={3}
          pos="relative"
          overflowX="hidden"
        >
          {!isCompatible && (
            <Alert status="error" mb={4} borderRadius="md">
              <AlertIcon />
              This browser is not compatible, most of the features will not work.
            </Alert>
          )}
          <ThemeEditorAccordion allowToggle borderRadius="md" defaultIndex={0}>
            {React.Children.map(React.Children.toArray(children), (child, index) => {
              const { icon, title, children, ...panelProps } = (child as ReactElement).props
              return (
                <ThemeEditorAccordionItem
                  key={`theme-editor-item-${index}`}
                  icon={icon}
                  title={title}
                  fontSize="lg"
                  unmountOnExit={true}
                  isDisabled={isMobile && mobileReadyItems.indexOf(title) == -1}
                >
                  {(child as ReactElement).type === ThemeEditorRootPanel
                    ? children
                    : React.cloneElement(
                        child as ReactElement,
                        {
                          ...panelProps,
                        },
                        children
                      )}
                </ThemeEditorAccordionItem>
              )
            })}
          </ThemeEditorAccordion>
          {!hideUpgradeToPro && <UpgradeBanner mt={{ base: 3, md: 4 }} />}
          {!hideCredits && <CreditsBox mt={{ base: 3, md: 4 }} />}
        </DrawerBody>
        {React.isValidElement(footerComponent) &&
          React.cloneElement<ThemeEditorDrawerFooterProps>(
            footerComponent as React.ReactElement<ThemeEditorDrawerFooterProps>,
            {
              onClose,
              isMobile,
            }
          )}
      </DrawerContent>
    </Drawer>
  )
}
