import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { EcommerceLogs as EcommerceLogsComponent } from '../components/EcommerceLogs';
import { mockToteLogs } from '../data/mockEcommerce';

export const EcommerceLogsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-2">
      <div className="w-full mx-auto">
        <div className="bg-white rounded-lg shadow-md min-w-[1200px]">
          <div className="p-3 border-b border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-bold text-blue-900">E-commerce Tote Logs</h1>
                <Link
                  to="/"
                  className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Back to Dashboard
                </Link>
              </div>
            </div>
          </div>
          
          <div className="p-3">
            <EcommerceLogsComponent logs={mockToteLogs} />
          </div>
        </div>
      </div>
    </div>
  );
};