import { EcommerceTote, ToteLog } from '../types/ecommerce';
import { mockTotes, mockToteLogs } from '../data/mockEcommerce';

export const getTotesByStore = (storeId: string): EcommerceTote[] => {
  return mockTotes.filter(tote => tote.storeId === storeId);
};

export const getToteLogsByStore = (storeId: string): ToteLog[] => {
  const storeTotes = getTotesByStore(storeId);
  const toteIds = storeTotes.map(tote => tote.id);
  return mockToteLogs.filter(log => toteIds.includes(log.toteId));
};

export const getLatestToteStatus = (toteId: string): ToteLog | undefined => {
  const logs = mockToteLogs
    .filter(log => log.toteId === toteId)
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  return logs[0];
};

export const formatToteTimestamp = (timestamp: string): string => {
  return new Date(timestamp).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};