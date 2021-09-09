import * as React from 'react'
import {
  useCheckbox,
  UseCheckboxProps,
  chakra,
  forwardRef,
  omitThemingProps,
  SystemStyleObject,
  useMultiStyleConfig,
  SwitchProps,
  Icon,
  As,
} from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

const cx = (...classNames: any[]) => classNames.filter(Boolean).join(' ')
const dataAttr = (condition: boolean | undefined) =>
  (condition ? '' : undefined) as boolean | 'true' | 'false'

type IconSwitchProps = {
  trueIcon: As
  falseIcon: As
} & SwitchProps

export const IconSwitch = forwardRef<IconSwitchProps, 'input'>((props, ref) => {
  const { colorScheme = 'gray', color, bgColor, ...rest } = props
  const styles = useMultiStyleConfig('Switch', rest)

  const {
    spacing = '0.5rem',
    children,
    trueIcon: TrueIcon,
    falseIcon: FalseIcon,
    ...ownProps
  } = omitThemingProps(rest)

  const { state, getInputProps, getCheckboxProps, getRootProps, getLabelProps } = useCheckbox(
    ownProps
  )

  const containerStyles: SystemStyleObject = React.useMemo(
    () => ({
      display: 'inline-block',
      verticalAlign: 'middle',
      lineHeight: 'normal',
      ...styles.container,
    }),
    [styles.container]
  )

  const trackStyles: SystemStyleObject = React.useMemo(
    () => ({
      display: 'inline-flex',
      flexShrink: 0,
      justifyContent: 'flex-start',
      boxSizing: 'content-box',
      cursor: 'pointer',
      ...styles.track,
      color,
      bgColor,
      '&[data-checked]': {
        bgColor,
      },
    }),
    [styles.track, color, bgColor]
  )

  const labelStyles: SystemStyleObject = React.useMemo(
    () => ({
      userSelect: 'none',
      marginStart: spacing,
      ...styles.label,
    }),
    [spacing, styles.label]
  )

  const thumbStyles: SystemStyleObject = React.useMemo(
    () => ({
      alignItems: 'center',
      justifyContent: 'center',
      d: 'flex',
      ...styles.thumb,
    }),
    [styles.thumb]
  )

  const iconStyle = React.useMemo(
    () => ({
      color: props.color
        ? props.color
        : state.isChecked
        ? `${colorScheme}.400`
        : `${colorScheme}.700`,
    }),
    [props.color, state.isChecked]
  )

  const iconSize = React.useMemo(() => {
    if (!props.size || props.size == 'lg') {
      return '1rem'
    } else if (props.size == 'sm') {
      return '0.6rem'
    } else {
      return '0.75rem'
    }
  }, [props.size])

  return (
    <chakra.label
      {...getRootProps()}
      className={cx('chakra-switch', props.className)}
      sx={containerStyles}
    >
      <input className="chakra-switch__input" {...getInputProps({}, ref)} />
      <chakra.span {...getCheckboxProps()} className="chakra-switch__track" sx={trackStyles}>
        <chakra.span
          __css={thumbStyles}
          className="chakra-switch__thumb"
          data-checked={dataAttr(state.isChecked)}
          data-hover={dataAttr(state.isHovered)}
        >
          {!state.isChecked ? (
            <Icon as={FalseIcon} fontSize={iconSize} sx={iconStyle} />
          ) : (
            <Icon as={TrueIcon} fontSize={iconSize} sx={iconStyle} />
          )}
        </chakra.span>
      </chakra.span>
      {children && (
        <chakra.span className="chakra-switch__label" {...getLabelProps()} sx={labelStyles}>
          {children}
        </chakra.span>
      )}
    </chakra.label>
  )
})
