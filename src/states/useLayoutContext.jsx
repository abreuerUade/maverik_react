import { toggleDocumentAttribute } from '@/utils/layout';
import { createContext, useContext, useMemo, useState } from 'react';
const LayoutContext = createContext(undefined);
function useLayoutContext() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayoutContext must be used within an LayoutProvider');
  }
  return context;
}
const storageThemeKey = 'MIZZLE_THEME_KEY';
const themeKey = 'data-bs-theme';
const LayoutProvider = ({
  children
}) => {
  const getSavedTheme = () => {
    const foundTheme = localStorage.getItem(storageThemeKey);
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    if (foundTheme) {
      if (foundTheme === 'auto') {
        toggleDocumentAttribute(themeKey, preferredTheme);
        return preferredTheme;
      }
      toggleDocumentAttribute(themeKey, foundTheme);
      return foundTheme == 'dark' ? 'dark' : 'light';
    } else {
      localStorage.setItem(storageThemeKey, preferredTheme);
      return preferredTheme;
    }
  };
  const INIT_STATE = {
    theme: getSavedTheme()
  };
  const [settings, setSettings] = useState(INIT_STATE);
  const updateSettings = _newSettings => setSettings({
    ...settings,
    ..._newSettings
  });
  const updateTheme = newTheme => {
    const foundTheme = localStorage.getItem(themeKey);
    if (foundTheme !== newTheme) {
      toggleDocumentAttribute(themeKey, newTheme);
      localStorage.setItem(storageThemeKey, newTheme);
      updateSettings({
        ...settings,
        theme: newTheme
      });
    }
  };
  return <LayoutContext.Provider value={useMemo(() => ({
    ...settings,
    updateTheme
  }), [settings])}>
      {children}
    </LayoutContext.Provider>;
};
export { useLayoutContext, LayoutProvider };