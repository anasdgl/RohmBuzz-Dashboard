import { salesData } from '../data/mockData';
import { DollarSign, Package, TrendingUp } from 'lucide-react';

const Sales = () => {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Transactions */}
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h2 className="text-xl font-bold mb-6 text-white">Recent Transactions</h2>
          <div className="space-y-4">
            {salesData.recentTransactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-purple-500/20 text-purple-500">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{tx.customer}</h3>
                    <p className="text-sm text-slate-400">{tx.product}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-white">{tx.amount}</p>
                  <p className="text-xs text-slate-400">{tx.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

         {/* Top Products */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <h2 className="text-xl font-bold mb-6 text-white">Top Products</h2>
          <div className="space-y-6">
            {salesData.topProducts.map((product) => (
              <div key={product.id}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-slate-300">{product.name}</span>
                  <span className="text-slate-400">{product.sales} sales</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    style={{ width: `${product.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
