import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import DownloadButton from '../UI/DownloadButton';
import { Menu } from 'lucide-react';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black text-white selection:bg-pink-500/30">
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-500/20 rounded-full blur-[120px]" />
      </div>
      
      {/* Mobile Top Bar */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-white/10 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
            <img src="https://i.ibb.co/Hf64PxmH/rrr.jpg" alt="Logo" className="w-8 h-8 rounded-lg object-cover" />
            <span className="font-bold text-lg">RohmBuzz</span>
        </div>
        <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        >
            <Menu className="w-6 h-6" />
        </button>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <main className="lg:ml-64 p-4 lg:p-8 min-h-screen transition-all duration-300">
        <div className="max-w-7xl mx-auto pt-4 lg:pt-0">
          <Outlet />
        </div>
      </main>

      <DownloadButton />
    </div>
  );
};

export default DashboardLayout;
