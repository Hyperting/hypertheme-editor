import React, { FC } from 'react'
import {
  Box,
  Text,
  AccordionItemProps,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  Circle,
  useColorModeValue,
  ThemingProps,
  As,
  Tag,
  Flex,
  Collapse,
  Icon as ChakraIcon,
} from '@chakra-ui/react'
import { FaLock } from 'react-icons/fa'

export type ThemeEditorAccordionItemProps = {
  title?: string
  subtitle?: string
  icon?: As
  endIcon?: As
  tag?: string
  unmountOnExit?: boolean
} & AccordionItemProps &
  Pick<ThemingProps, 'colorScheme'>

export const ThemeEditorAccordionItem: FC<ThemeEditorAccordionItemProps> = (props) => {
  const {
    title = 'Accordion title',
    subtitle,
    colorScheme = 'gray',
    icon: Icon,
    tag,
    children,
    isDisabled,
    unmountOnExit = true,
    ...rest
  } = props
  const hoverBgColor = useColorModeValue('gray.200', 'gray.700')
  const bgColor = useColorModeValue(`${colorScheme}.200`, `${colorScheme}.900`)

  return (
    <AccordionItem isDisabled={isDisabled} {...rest}>
      {({ isExpanded }) => (
        <>
          <AccordionButton
            p={{ base: 3, sm: 4 }}
            borderRadius={rest.borderRadius || 'md'}
            _hover={{ bgColor: hoverBgColor }}
          >
            {Icon && (
              <Circle
                size="25px"
                bgColor={`${colorScheme}.200`}
                color={`${colorScheme}.600`}
                fontSize="0.875rem"
                mr="0.5rem"
              >
                <Icon />
              </Circle>
            )}
            <Flex direction="column" textAlign="left" w="full">
              <Text flex="1" fontWeight="bold" d="flex" justifyContent="space-between">
                {title}
                {tag && (
                  <Tag
                    colorScheme={colorScheme}
                    size="sm"
                    ml="0.5rem"
                    bgColor={bgColor}
                    px="0.25rem"
                  >
                    {tag}
                  </Tag>
                )}
              </Text>
              {subtitle && <Text flex="1">{subtitle}</Text>}
            </Flex>

            {!isDisabled ? <AccordionIcon ml="0.5rem" /> : <ChakraIcon as={FaLock} />}
          </AccordionButton>
          <Collapse in={isExpanded && !isDisabled} unmountOnExit={unmountOnExit}>
            <Box
              boxSize="100%"
              p="0.5rem"
              sx={{
                ' > *': {
                  w: 'full',
                  px: '0.5rem',
                  py: '0.5rem',
                  borderRadius: 'none',
                },
              }}
            >
              {children}
            </Box>
          </Collapse>
        </>
      )}
    </AccordionItem>
  )
}

export default ThemeEditorAccordionItem
