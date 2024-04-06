import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar/index.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import Landing from './components/Landing/index.jsx';
import { extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup/index.jsx';
import Login from './components/Login/index.jsx';
import InputScan from './components/Input/index.jsx';

const theme = extendTheme({
  fonts: {
    body: `Poppins, sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Auth0Provider
          domain={import.meta.env.VITE_AUTHO_DOMAIN_ID}
          clientId={import.meta.env.VITE_AUTHO_CLIENT_ID}
          redirectUri={window.location.origin}
        >
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path='/features' element={<Features />} /> */}
            <Route path="/input" element={<InputScan />} />
          </Routes>
        </Auth0Provider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
