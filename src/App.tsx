import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { HashRouter as Router } from 'react-router-dom';
import { theme } from './theme';
import Layout from './components/Layout';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </ChakraProvider>
  );
}

export default App;