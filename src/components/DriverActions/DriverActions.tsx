import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { ToteForm } from './ToteForm';
import { ActionButtons } from './ActionButtons';

interface DriverActionsProps {
  storeId: string;
  onAction: (action: string, data?: any) => void;
}

export const DriverActions: React.FC<DriverActionsProps> = ({ storeId, onAction }) => {
  const { user } = useAuth();
  const [showToteForm, setShowToteForm] = useState(false);

  const handleToteAction = (action: 'load' | 'unload', data: any) => {
    onAction('tote', {
      action,
      storeId,
      driverId: user?.id,
      ...data,
      timestamp: new Date().toISOString()
    });
    setShowToteForm(false);
  };

  return (
    <div className="space-y-4">
      <ActionButtons 
        onAction={onAction}
        onToteClick={() => setShowToteForm(true)}
      />
      
      {showToteForm && (
        <ToteForm
          onSubmit={handleToteAction}
          onCancel={() => setShowToteForm(false)}
        />
      )}
    </div>
  );
};