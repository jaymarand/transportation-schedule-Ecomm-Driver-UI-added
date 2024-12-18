import React, { useState } from 'react';

interface EditableCellProps {
  value: string | number;
  onSave: (value: string | number) => void;
  type?: 'text' | 'number';
}

export const EditableCell: React.FC<EditableCellProps> = ({ 
  value, 
  onSave, 
  type = 'text' 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const handleSave = () => {
    onSave(type === 'number' ? Number(editValue) : editValue);
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  if (isEditing) {
    return (
      <input
        type={type}
        className="w-full px-1 py-0.5 border rounded text-xs"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onBlur={handleSave}
        onKeyPress={handleKeyPress}
        autoFocus
        min={type === 'number' ? 0 : undefined}
      />
    );
  }

  return (
    <div 
      className="px-2 py-0.5 cursor-pointer hover:bg-blue-50 text-xs"
      onClick={() => setIsEditing(true)}
    >
      {value}
    </div>
  );
};