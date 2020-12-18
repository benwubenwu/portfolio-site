import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import theme from "./theme";

const defaultContextData = {
    dark: false,
    toggle: () => {},
};

const ThemeContext = React.createContext(defaultContextData);
const useTheme = () => React.useContext(ThemeContext);

const useEffectDarkMode = () => {
    const [themeState, setThemeState] = React.useState({
        dark: false,
        hasThemeMounted: false,
    });

    React.useEffect(() => {
        const lsDark = localStorage.getItem('dark') === 'true';
        setThemeState({ ...themeState, dark: lsDark, hasThemeMounted: true });
    }, []);

    return [themeState, setThemeState];
};

const ThemeProvider = ({ children }) => {
    const [themeState, setThemeState] = useEffectDarkMode();
    if (!themeState.hasThemeLoaded) {
      /*
        If the theme is not yet loaded we don't want to render
        this is just a workaround to avoid having the app rendering
        in light mode by default and then switch to dark mode while
        getting the theme state from localStorage
      */
      return <div />;
    }
    const theme = themeState.dark ? theme('dark') : theme('light');
    const toggle = () => {
      // toogle function goes here
    };
    return (
      <EmotionThemeProvider theme={theme}>
        <ThemeContext.Provider
          value={{
            dark: themeState.dark,
            toggle,
          }}
        >
          {children}
        </ThemeContext.Provider>
      </EmotionThemeProvider>
    );
  };

export { useTheme, ThemeProvider };