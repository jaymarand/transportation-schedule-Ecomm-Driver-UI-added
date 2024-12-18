import React from 'react';
import { Mail } from 'lucide-react';
import html2canvas from 'html2canvas';
import { getCurrentDateTime } from '../utils/dateUtils';

export const EmailButton: React.FC = () => {
  const handleEmailClick = async () => {
    try {
      const dashboard = document.getElementById('dashboard-content');
      if (!dashboard) return;

      // Format the current time and date for the filename
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

      const canvas = await html2canvas(dashboard, {
        scale: 2,
        logging: false,
        useCORS: true,
        windowWidth: dashboard.scrollWidth,
        windowHeight: dashboard.scrollHeight,
        width: dashboard.scrollWidth,
        height: dashboard.scrollHeight
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
    <button
      onClick={handleEmailClick}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
    >
      <Mail className="w-4 h-4" />
      Export Schedule
    </button>
  );
};