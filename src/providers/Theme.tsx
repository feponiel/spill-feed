'use client'

import { GlobalStyle } from '@/styles/global'
import { darkTheme } from '@/styles/themes/darkTheme'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

interface ThemeProps {
  children: ReactNode
}

export function Theme({ children }: ThemeProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      {children}

      <GlobalStyle />
    </ThemeProvider>
  )
}
