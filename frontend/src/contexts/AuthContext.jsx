import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../api/auth';
import { toast } from 'react-hot-toast';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize user with 50 points if new registration
  const initializeUser = (userData) => {
    return {
      ...userData,
      points: userData.points || 50 // Default to 50 if points not provided
    };
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const { data } = await authApi.getMe();
          setUser(initializeUser(data));
        }
      } catch (err) {
        console.error('Auth error:', err);
        logout();
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const register = async (userData) => {
    try {
      // Ensure new users get 50 points
      const userWithPoints = {
        ...userData,
        points: 50
      };
      
      const { data } = await authApi.register(userWithPoints);
      localStorage.setItem('token', data.token);
      setUser(initializeUser(data.user));
      toast.success('Registration successful! 50 points added 🎉');
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.msg || 'Registration failed');
      throw err;
    }
  };

  const login = async (credentials) => {
    try {
      const { data } = await authApi.login(credentials);
      localStorage.setItem('token', data.token);
      setUser(initializeUser(data.user));
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.msg || 'Login failed');
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  // Add function to update points
  const updatePoints = (newPoints) => {
    setUser(prev => ({
      ...prev,
      points: newPoints
    }));
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        loading, 
        register, 
        login, 
        logout,
        updatePoints, // Add this to the context value
        setUser // Optional: if you need full control
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}