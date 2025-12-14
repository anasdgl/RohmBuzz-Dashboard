import { useLocation } from 'react-router-dom';
import { saveAs } from 'file-saver';
import { Download } from 'lucide-react';
import { dashboardData, usersData, analyticsData, salesData } from '../../data/mockData';
import { settingsData } from '../../data/settingsData';

const DownloadButton = () => {
  const location = useLocation();
  const path = location.pathname;

  const getDownloadConfig = () => {
    switch (path) {
      case '/':
      case '/dashboard':
        return { data: dashboardData, filename: 'dashboard_data.json', label: 'Dashboard Data' };
      case '/users':
        return { data: usersData, filename: 'users_list.json', label: 'Users List' };
      case '/analytics':
        return { data: analyticsData, filename: 'analytics_data.json', label: 'Analytics Data' };
      case '/sales':
        return { data: salesData, filename: 'sales_data.json', label: 'Sales Data' };
      case '/settings':
          return { data: settingsData, filename: 'settings_config.json', label: 'Settings Config' };
      default:
        return null;
    }
  };

  const config = getDownloadConfig();

  if (!config) return null;

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(config.data, null, 2)], { type: 'application/json' });
    saveAs(blob, config.filename);
  };

  return (
    <button
      onClick={handleDownload}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-3 
                 bg-white/10 backdrop-blur-lg border border-white/20 
                 text-white font-semibold rounded-full shadow-lg 
                 hover:bg-white/20 hover:scale-105 transition-all duration-300
                 group ring-1 ring-white/30"
    >
      <Download className="w-5 h-5 group-hover:animate-bounce" />
      <span>Download {config.label}</span>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-xl -z-10" />
    </button>
  );
};

export default DownloadButton;
