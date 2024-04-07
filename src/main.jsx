import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar/index.jsx';
import { extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';

const theme = extendTheme({
  fonts: {
    body: `Poppins, sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
