import React, { FC } from 'react'
import { IconType } from 'react-icons'
import { ThemeEditorAccordionItemProps } from './ThemeEditorAccordionItem'

export type ThemeEditorRootPanelProps = {
  icon: IconType
  title: string
} & ThemeEditorAccordionItemProps

export const ThemeEditorRootPanel: FC<ThemeEditorRootPanelProps> = () => {
  return null
}
