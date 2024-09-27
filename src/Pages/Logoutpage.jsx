
import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Logoutpage = () => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthenticated(false);
    navigate('/signin'); 
  }, [setIsAuthenticated, navigate]);

  return null; 
};

export default Logoutpage;
