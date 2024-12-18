import React from 'react';
import { ParLevel } from '../../types/parLevel';
import { SortableHeader } from './SortableHeader';
import { TableRow } from './TableRow';
import { useSortableData } from '../../hooks/useSortableData';

interface ParLevelsTableProps {
  parLevels: ParLevel[];
  onUpdate: (updatedParLevel: ParLevel) => void;
}

const headers: { field: keyof ParLevel; label: string }[] = [
  { field: 'storeId', label: 'Store ID' },
  { field: 'storeName', label: 'Store Name' },
  { field: 'canvases', label: 'Canvases' },
  { field: 'sleeves', label: 'Sleeves' },
  { field: 'caps', label: 'Caps' },
  { field: 'hardlinesRaw', label: 'Hardlines Raw' },
  { field: 'softlinesRaw', label: 'Softlines Raw' },
  { field: 'totes', label: 'Totes' },
];

export const ParLevelsTable: React.FC<ParLevelsTableProps> = ({
  parLevels,
  onUpdate,
}) => {
  const { sortedData, sortConfig, requestSort } = useSortableData(parLevels);

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-blue-50">
            {headers.map(({ field, label }) => (
              <SortableHeader
                key={field}
                field={field}
                label={label}
                currentSort={sortConfig.field}
                direction={sortConfig.direction}
                onSort={requestSort}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((parLevel) => (
            <TableRow
              key={parLevel.storeId}
              parLevel={parLevel}
              onUpdate={onUpdate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};