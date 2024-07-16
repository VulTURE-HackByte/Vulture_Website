import './App.css';
import LandingPage from './pages/Landing Page';
import ScansPage from './pages/Scans Page';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Signup from './components/Signup/index.jsx';
import Login from './components/Login/index.jsx';
import History from './components/History/index.jsx';
import { useEffect } from 'react';
import useAuthStore from './store/authStore';

function App() {
  const { addAuth, setUserEmail, setUserName } = useAuthStore((state) => ({
    addAuth: state.addAuth,
    setUserEmail: state.setUserEmail,
    setUserName: state.setUserName,
  }));

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      addAuth();
      setUserEmail(localStorage.getItem('email'));
      setUserName(localStorage.getItem('name'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/scans" element={<ScansPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Box>
  );
}

export default App;
