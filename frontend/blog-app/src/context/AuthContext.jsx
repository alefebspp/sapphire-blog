import { createContext, useState, useEffect } from 'react';
import { createSession, api } from '../services/api';
export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const user_localStorage = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (user_localStorage && token) {
      setUser(JSON.parse(user_localStorage));
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    const response = await createSession(username, password);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    setUser(response.data.user);
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        error,
        setError,
        authenticated: !!user,
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
