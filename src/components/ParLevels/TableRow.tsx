import React from 'react';
import { ParLevel } from '../../types/parLevel';
import { EditableCell } from '../EditableCell';

interface TableRowProps {
  parLevel: ParLevel;
  onUpdate: (updatedParLevel: ParLevel) => void;
}

export const TableRow: React.FC<TableRowProps> = ({ parLevel, onUpdate }) => {
  const handleUpdate = (field: keyof ParLevel, value: number) => {
    onUpdate({ ...parLevel, [field]: value });
  };

  return (
    <tr className="hover:bg-blue-50/30">
      <td className="px-2 py-0.5 border border-gray-200">{parLevel.storeId}</td>
      <td className="px-2 py-0.5 border border-gray-200">{parLevel.storeName}</td>
      <td className="border border-gray-200">
        <EditableCell
          value={parLevel.canvases}
          onSave={(value) => handleUpdate('canvases', Number(value))}
          type="number"
        />
      </td>
      <td className="border border-gray-200">
        <EditableCell
          value={parLevel.sleeves}
          onSave={(value) => handleUpdate('sleeves', Number(value))}
          type="number"
        />
      </td>
      <td className="border border-gray-200">
        <EditableCell
          value={parLevel.caps}
          onSave={(value) => handleUpdate('caps', Number(value))}
          type="number"
        />
      </td>
      <td className="border border-gray-200">
        <EditableCell
          value={parLevel.hardlinesRaw}
          onSave={(value) => handleUpdate('hardlinesRaw', Number(value))}
          type="number"
        />
      </td>
      <td className="border border-gray-200">
        <EditableCell
          value={parLevel.softlinesRaw}
          onSave={(value) => handleUpdate('softlinesRaw', Number(value))}
          type="number"
        />
      </td>
      <td className="border border-gray-200">
        <EditableCell
          value={parLevel.totes}
          onSave={(value) => handleUpdate('totes', Number(value))}
          type="number"
        />
      </td>
    </tr>
  );
};