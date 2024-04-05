import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar/index.jsx';
import Login from './components/Login/index.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTHO_DOMAIN_ID}
        clientId={import.meta.env.VITE_AUTHO_CLIENT_ID}
        redirectUri={window.location.origin}
      >
        <Navbar />
        <App />
        <Login />
      </Auth0Provider>
    </ChakraProvider>
  </React.StrictMode>
);
