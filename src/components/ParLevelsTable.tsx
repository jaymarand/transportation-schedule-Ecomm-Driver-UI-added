import React, { useState } from 'react';
import { ParLevel } from '../types/parLevel';
import { EditableCell } from './EditableCell';

interface ParLevelsTableProps {
  parLevels: ParLevel[];
  onUpdate: (updatedParLevel: ParLevel) => void;
}

export const ParLevelsTable: React.FC<ParLevelsTableProps> = ({ parLevels, onUpdate }) => {
  const [sortField, setSortField] = useState<keyof ParLevel>('storeId');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: keyof ParLevel) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedParLevels = [...parLevels].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    if (sortDirection === 'asc') {
      return aValue < bValue ? -1 : 1;
    }
    return aValue > bValue ? -1 : 1;
  });

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-blue-50">
            <th onClick={() => handleSort('storeId')} className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200 cursor-pointer hover:bg-blue-100">
              Store ID {sortField === 'storeId' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('storeName')} className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200 cursor-pointer hover:bg-blue-100">
              Store Name {sortField === 'storeName' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('canvases')} className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200 cursor-pointer hover:bg-blue-100">
              Canvases {sortField === 'canvases' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('sleeves')} className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200 cursor-pointer hover:bg-blue-100">
              Sleeves {sortField === 'sleeves' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('caps')} className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200 cursor-pointer hover:bg-blue-100">
              Caps {sortField === 'caps' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('hardlinesRaw')} className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200 cursor-pointer hover:bg-blue-100">
              Hardlines Raw {sortField === 'hardlinesRaw' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('softlinesRaw')} className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200 cursor-pointer hover:bg-blue-100">
              Softlines Raw {sortField === 'softlinesRaw' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('totes')} className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200 cursor-pointer hover:bg-blue-100">
              Totes {sortField === 'totes' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedParLevels.map((parLevel) => (
            <tr key={parLevel.storeId} className="hover:bg-blue-50/30">
              <td className="px-2 py-0.5 border border-gray-200">{parLevel.storeId}</td>
              <td className="px-2 py-0.5 border border-gray-200">{parLevel.storeName}</td>
              <td className="border border-gray-200">
                <EditableCell
                  value={parLevel.canvases}
                  onSave={(value) => onUpdate({ ...parLevel, canvases: Number(value) })}
                  type="number"
                />
              </td>
              <td className="border border-gray-200">
                <EditableCell
                  value={parLevel.sleeves}
                  onSave={(value) => onUpdate({ ...parLevel, sleeves: Number(value) })}
                  type="number"
                />
              </td>
              <td className="border border-gray-200">
                <EditableCell
                  value={parLevel.caps}
                  onSave={(value) => onUpdate({ ...parLevel, caps: Number(value) })}
                  type="number"
                />
              </td>
              <td className="border border-gray-200">
                <EditableCell
                  value={parLevel.hardlinesRaw}
                  onSave={(value) => onUpdate({ ...parLevel, hardlinesRaw: Number(value) })}
                  type="number"
                />
              </td>
              <td className="border border-gray-200">
                <EditableCell
                  value={parLevel.softlinesRaw}
                  onSave={(value) => onUpdate({ ...parLevel, softlinesRaw: Number(value) })}
                  type="number"
                />
              </td>
              <td className="border border-gray-200">
                <EditableCell
                  value={parLevel.totes}
                  onSave={(value) => onUpdate({ ...parLevel, totes: Number(value) })}
                  type="number"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};