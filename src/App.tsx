import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './hooks/usePersistedState';
import Layout from './components/Layout';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';



const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout toggleTheme={toggleTheme}/>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;
