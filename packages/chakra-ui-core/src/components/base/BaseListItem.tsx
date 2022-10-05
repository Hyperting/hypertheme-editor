import React, { FC } from 'react'
import {
    useColorModeValue,
    Box,
    Text,
    Circle,
    Stack,
    Flex,
    ThemingProps,
    As,
    BoxProps,
} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'

export type BaseListItemProps = {
    subtitle?: string
    bgImage?: string
    icon?: As
    endIcon?: React.ReactElement
    isClickable?: boolean

} & Pick<ThemingProps, 'colorScheme'> &
    BoxProps

const BaseListItem: FC<BaseListItemProps> = ({
    title,
    subtitle,
    colorScheme = 'gray',
    children,
    icon: Icon,
    endIcon = <FaArrowRight />,
    isClickable,

    ...rest
}) => {
    const focusBgColor = useColorModeValue(`${colorScheme}.100`, `${colorScheme}.800`)

    return (
        <Box
            w="auto"
            d="flex"
            pos="relative"
            borderRadius="md"
            overflow="hidden"
            p="1rem"
            alignItems="flex-start"
            cursor={isClickable ? 'pointer' : undefined}
            _hover={{ bgColor: isClickable && focusBgColor }}
            {...rest}
        >
            <Stack alignItems={rest.alignItems} w="100%" spacing="0.125rem" overflow="visible">
                <Flex alignItems="center" h="100%">
                    {Icon && (
                        <Circle
                            size="25px"
                            bgColor={`${colorScheme}.200`}
                            color={`${colorScheme}.600`}
                            fontSize="sm"
                            mr="0.5rem"
                        >
                            <Icon />
                        </Circle>
                    )}
                    {title && (
                        <Text
                            fontSize="md"
                            d="flex"
                            alignContent="space-between"
                            textOverflow="ellipsis"
                            overflow="scroll"
                            alignSelf="center"
                        >
                            {title}
                        </Text>
                    )}
                    {children}
                </Flex>
                {subtitle && (
                    <Text fontSize="xs" textOverflow="ellipsis" overflow="scroll">
                        {subtitle}
                    </Text>
                )}
            </Stack>

            {endIcon && isClickable && (
                <Flex
                    color={`${colorScheme}.600`}
                    fontSize="sm"
                    pos="absolute"
                    right={3}
                    top={0}
                    h="100%"
                    alignItems="center"
                >
                    {React.cloneElement(endIcon, {})}
                </Flex>
            )}
        </Box>
    )
}

export default BaseListItem
