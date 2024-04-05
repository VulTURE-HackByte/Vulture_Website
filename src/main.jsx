import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar/index.jsx';
import Login from './components/Login/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Navbar />
      <App />
      <Login />
    </ChakraProvider>
  </React.StrictMode>
);
