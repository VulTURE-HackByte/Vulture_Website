import './App.css';
import LandingPage from './pages/Landing Page';
import ScansPage from './pages/Scans Page';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Signup from './components/Signup/index.jsx';
import Login from './components/Login/index.jsx';

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/scans" element={<ScansPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Box>
  );
}

export default App;
