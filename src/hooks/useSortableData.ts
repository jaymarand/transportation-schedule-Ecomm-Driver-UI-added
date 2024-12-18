import { useState, useMemo } from 'react';
import { ParLevel } from '../types/parLevel';

export const useSortableData = (data: ParLevel[]) => {
  const [sortConfig, setSortConfig] = useState<{
    field: keyof ParLevel;
    direction: 'asc' | 'desc';
  }>({
    field: 'storeId',
    direction: 'asc',
  });

  const sortedData = useMemo(() => {
    const sorted = [...data].sort((a, b) => {
      const aValue = a[sortConfig.field];
      const bValue = b[sortConfig.field];
      if (sortConfig.direction === 'asc') {
        return aValue < bValue ? -1 : 1;
      }
      return aValue > bValue ? -1 : 1;
    });
    return sorted;
  }, [data, sortConfig]);

  const requestSort = (field: keyof ParLevel) => {
    setSortConfig((prevConfig) => ({
      field,
      direction:
        prevConfig.field === field && prevConfig.direction === 'asc'
          ? 'desc'
          : 'asc',
    }));
  };

  return { sortedData, sortConfig, requestSort };
};