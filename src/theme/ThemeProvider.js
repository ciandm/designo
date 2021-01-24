import React, { createContext, useContext } from 'react'
import GlobalStyle from './GlobalStyle';
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import constants from './constants';
import useGetWindowSize from '../hooks/useGetWindowSize';

const WindowSizeContext = createContext({
  windowSize: 0
})

const useWindowSize = () => useContext(WindowSizeContext);

function ThemeProvider({ children }) {

  // get the window size to pass down to components as some need to be hidden/shown/changed depending on window size.
  const windowSize = useGetWindowSize();

  return (
    <StyledThemeProvider theme={{
      colors: constants.colors,
      mediaQueries: constants.mediaQueries,
      maxWidth: constants.maxWidth
    }}>
      <WindowSizeContext.Provider
        value={windowSize}
      >
        <GlobalStyle />
        {children}
      </WindowSizeContext.Provider>
    </StyledThemeProvider>
  )
}

export default ThemeProvider

export {
  useWindowSize
}
