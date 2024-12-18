import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthContextType } from '../types/user';

const AuthContext = createContext<AuthContextType | null>(null);

// Default user for development
const defaultUser: User = {
  id: '1',
  name: 'Default User',
  role: 'dispatch',
  storeId: '9011'
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(defaultUser); // Set default user for development
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading user data
    setLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    // TODO: Implement actual authentication
    const mockUser: User = {
      id: '1',
      name: username,
      role: 'store',
      storeId: '9011'
    };
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};