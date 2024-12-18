import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { ParLevels } from './pages/ParLevels';
import { ContainerCountPage } from './pages/ContainerCount';
import { EcommerceLogsPage } from './pages/EcommerceLogs';
import { DriverUI } from './pages/DriverUI';
import { Login } from './components/Login';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/par-levels" element={
              <ProtectedRoute allowedRoles={['dispatch']}>
                <ParLevels />
              </ProtectedRoute>
            } />
            <Route path="/container-count" element={
              <ProtectedRoute allowedRoles={['store', 'dispatch']}>
                <ContainerCountPage />
              </ProtectedRoute>
            } />
            <Route path="/ecommerce-logs" element={
              <ProtectedRoute allowedRoles={['dispatch']}>
                <EcommerceLogsPage />
              </ProtectedRoute>
            } />
            <Route path="/driver" element={
              <ProtectedRoute allowedRoles={['driver', 'dispatch']}>
                <DriverUI />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;