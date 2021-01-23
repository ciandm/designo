import React from 'react'
import GlobalStyle from './GlobalStyle';
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import constants from './constants';

function ThemeProvider({ children }) {
  return (
    <StyledThemeProvider theme={{
      colors: constants.colors,
      mediaQueries: constants.mediaQueries,
      maxWidth: constants.maxWidth
    }}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  )
}

export default ThemeProvider
