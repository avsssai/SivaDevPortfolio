import React, { useState, createContext, useContext, useEffect } from 'react';
// import {
//   COLORS,
//   COLOR_MODE_KEY,
//   INITIAL_COLOR_MODE_CSS_PROP
// } from '../../styles/theme/colors';
import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP
} from '../styles/theme/colors';

type ContextValue = (string | (() => void) | undefined)[];
interface IContext extends ContextValue {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
export const DarkModeContext = createContext<Partial<ContextValue>>([]);

export function DarkModeProvider({
  children
}: {
  children: JSX.Element | JSX.Element[];
}) {
  // initiate some state for managing the theme in the application
  const [darkMode, rawSetDarkMode] = useState<string | undefined>(undefined);

  // upon mount, set the theme mode in the state
  useEffect(() => {
    // get the current color mode from the css variable set on mount.
    const root = window.document.documentElement;
    const initialColorMode = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    );
    rawSetDarkMode(initialColorMode);
  }, []);

  const contextValue = React.useMemo(() => {
    function toggleDarkMode() {
      //set to localStorage upon channge
      const newMode = darkMode === 'light' ? 'dark' : 'light';
      window.localStorage.setItem(COLOR_MODE_KEY, newMode);
      const root = window.document.documentElement;
      // change the corresponding values of the css variables
      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`;
        const colorToSet =
          typeof colorByTheme === 'object'
            ? colorByTheme[newMode]
            : colorByTheme;
        root.style.setProperty(cssVarName, colorToSet);
      });
      rawSetDarkMode(newMode);
    }
    return [darkMode, toggleDarkMode];
  }, [darkMode, rawSetDarkMode]);
  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default function useDarkMode() {
  const context = useContext(DarkModeContext);
  return context;
}
