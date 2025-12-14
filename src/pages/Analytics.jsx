import { analyticsData } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { BarChart2, PieChart as PieChartIcon } from 'lucide-react';

const Analytics = () => {
  const COLORS = ['#ec4899', '#8b5cf6', '#06b6d4', '#10b981'];

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">Analytics</h2>
        <p className="text-slate-400">Detailed insights into your platform's performance.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Visitor Chart */}
        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-purple-500" /> Weekly Visitors
          </h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analyticsData.visitors}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  cursor={{fill: '#ffffff10'}}
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }}
                />
                <Bar dataKey="count" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <PieChartIcon className="w-5 h-5 text-pink-500" /> Traffic Sources
          </h2>
          <div className="h-[300px] w-full flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={analyticsData.sources}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {analyticsData.sources.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                  ))}
                </Pie>
                <Tooltip 
                   contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }}
                />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
