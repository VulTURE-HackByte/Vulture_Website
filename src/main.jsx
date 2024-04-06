import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar/index.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import Landing from './components/Landing/index.jsx';
import Features from './components/Features/index.jsx';
import Input from './components/Input/index.jsx';
import { extendTheme } from '@chakra-ui/react';
import Footer from './components/Footer/index.jsx';

const theme = extendTheme({
  fonts: {
    body: `Poppins, sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTHO_DOMAIN_ID}
        clientId={import.meta.env.VITE_AUTHO_CLIENT_ID}
        redirectUri={window.location.origin}
      >
        <Navbar />
        <App />
        <Landing />
        <Features />
        <Input />
        <Footer />
      </Auth0Provider>
    </ChakraProvider>
  </React.StrictMode>
);
