import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, FileSpreadsheet, Settings, ClipboardList, Truck, Package } from 'lucide-react';
import { exportToCSV } from '../utils/csvExport';
import { Store } from '../types/store';

interface ExportButtonsProps {
  stores: Store[];
}

export const ExportButtons: React.FC<ExportButtonsProps> = ({ stores }) => {
  const handleScreenshotExport = async () => {
    try {
      const dashboard = document.getElementById('dashboard-content');
      if (!dashboard) return;

      const canvas = await html2canvas(dashboard, {
        scale: 2,
        logging: false,
        useCORS: true,
        windowWidth: dashboard.scrollWidth,
        windowHeight: dashboard.scrollHeight,
        width: dashboard.scrollWidth,
        height: dashboard.scrollHeight
      });

      const now = new Date();
      const time = now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });
      const date = now.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      });

      const imageData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imageData;
      link.download = `(${time}) Transportation Schedule (${date}).png`;
      link.click();
    } catch (error) {
      console.error('Error generating screenshot:', error);
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={handleScreenshotExport}
        className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        <Mail className="w-3.5 h-3.5" />
        Export Image
      </button>
      <button
        onClick={() => exportToCSV(stores)}
        className="flex items-center gap-1 px-3 py-1 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
      >
        <FileSpreadsheet className="w-3.5 h-3.5" />
        Export CSV
      </button>
      <Link
        to="/container-count"
        className="flex items-center gap-1 px-3 py-1 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
      >
        <ClipboardList className="w-3.5 h-3.5" />
        Container Count
      </Link>
      <Link
        to="/ecommerce-logs"
        className="flex items-center gap-1 px-3 py-1 text-sm bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
      >
        <Package className="w-3.5 h-3.5" />
        E-commerce Logs
      </Link>
      <Link
        to="/driver"
        className="flex items-center gap-1 px-3 py-1 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
      >
        <Truck className="w-3.5 h-3.5" />
        Driver UI
      </Link>
      <Link
        to="/par-levels"
        className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
      >
        <Settings className="w-3.5 h-3.5" />
        Par Levels
      </Link>
    </div>
  );
};