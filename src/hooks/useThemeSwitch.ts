import { useState, useEffect } from 'react';

const useThemeSwitch = () => {
  const [theme, setTheme] = useState<null | string>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return { theme, setTheme, handleThemeSwitch };
};

export default useThemeSwitch;
