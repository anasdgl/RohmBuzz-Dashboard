import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { X, LayoutDashboard, BarChart2, Users, DollarSign, Settings, LogOut } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const { logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', path: '/', icon: LayoutDashboard },
    { label: 'Analytics', path: '/analytics', icon: BarChart2 },
    { label: 'Users', path: '/users', icon: Users },
    { label: 'Sales', path: '/sales', icon: DollarSign },
    { label: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-slate-900/90 backdrop-blur-xl border-r border-white/10 p-6 
        transition-transform duration-300 ease-in-out lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        text-white flex flex-col justify-between
      `}>
        <div>
          <div className="mb-10 flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <img 
                src="https://i.ibb.co/Hf64PxmH/rrr.jpg" 
                alt="RohmBuzz Logo" 
                className="w-10 h-10 rounded-lg shadow-lg shadow-pink-500/20 object-cover"
              />
              <h1 className="text-2xl font-bold tracking-tight">RohmBuzz</h1>
            </div>
             <button onClick={onClose} className="lg:hidden p-1 rounded-full hover:bg-white/10">
                <X className="w-6 h-6" />
             </button>
          </div>
        
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => window.innerWidth < 1024 && onClose()}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                  ${isActive 
                    ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-white/10 shadow-lg shadow-purple-500/10' 
                    : 'hover:bg-white/5 hover:translate-x-1'
                  }
                `}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-pink-400' : 'text-slate-400'}`} />
                <span className={isActive ? 'font-semibold' : 'text-slate-300'}>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <button
        onClick={logout}
        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 hover:text-red-400 text-slate-400 transition-all duration-300 group"
      >
        <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span>Logout</span>
      </button>
      </div>
    </>
  );
};

export default Sidebar;
