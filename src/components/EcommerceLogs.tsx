import React from 'react';
import { ToteLog } from '../types/ecommerce';
import { formatToteTimestamp } from '../utils/ecommerceUtils';

interface EcommerceLogsProps {
  logs: ToteLog[];
}

export const EcommerceLogs: React.FC<EcommerceLogsProps> = ({ logs }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-blue-50">
            <th className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200">Time</th>
            <th className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200">Action</th>
            <th className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200">Location</th>
            <th className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200">Performed By</th>
            <th className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200">Seal Numbers</th>
            <th className="px-2 py-1 text-left text-xs font-semibold text-blue-800 border border-gray-200">Notes</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id} className="hover:bg-blue-50/30">
              <td className="px-2 py-0.5 border border-gray-200">{formatToteTimestamp(log.timestamp)}</td>
              <td className="px-2 py-0.5 border border-gray-200">
                <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${
                  log.action === 'loaded' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {log.action.charAt(0).toUpperCase() + log.action.slice(1)}
                </span>
              </td>
              <td className="px-2 py-0.5 border border-gray-200">{log.location}</td>
              <td className="px-2 py-0.5 border border-gray-200">{log.performedBy}</td>
              <td className="px-2 py-0.5 border border-gray-200">
                {log.sealNumbers.join(', ')}
              </td>
              <td className="px-2 py-0.5 border border-gray-200">{log.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};