import { dashboardData } from '../data/mockData';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">Dashboard Overview</h2>
          <p className="text-slate-400">Welcome back! Here's what's happening today.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardData.summary.map((item, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all duration-300 group">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-10`}>
                <div className="w-6 h-6 bg-white/20 rounded-full"></div>
              </div>
              <span className={`text-sm font-medium px-2 py-1 rounded-lg ${item.isPositive ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                {item.change}
              </span>
            </div>
            <h3 className="text-slate-400 text-sm font-medium mb-1">{item.name}</h3>
            <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 group-hover:from-pink-400 group-hover:to-purple-400 transition-all">
                {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-pink-500" /> Revenue Analytics
        </h2>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dashboardData.revenueChart}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ec4899" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis dataKey="name" stroke="#94a3b8" tick={{fill: '#94a3b8'}} />
              <YAxis stroke="#94a3b8" tick={{fill: '#94a3b8'}} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }}
                itemStyle={{ color: '#fff' }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#ec4899" 
                strokeWidth={4}
                fillOpacity={1} 
                fill="url(#colorValue)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
