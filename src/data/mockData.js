import { LayoutDashboard, Users, CreditCard, Activity } from 'lucide-react';

export const dashboardData = {
  summary: [
    { name: 'Total Revenue', value: '$54,230', change: '+12%', color: 'from-pink-500 to-rose-500', isPositive: true },
    { name: 'Active Users', value: '2,400', change: '+5%', color: 'from-purple-500 to-indigo-500', isPositive: true },
    { name: 'New Signups', value: '340', change: '+18%', color: 'from-cyan-500 to-blue-500', isPositive: true },
  ],
  revenueChart: [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
    { name: 'Jul', value: 3490 },
  ]
};

export const analyticsData = {
  visitors: [
    { name: 'Mon', count: 120 },
    { name: 'Tue', count: 200 },
    { name: 'Wed', count: 150 },
    { name: 'Thu', count: 300 },
    { name: 'Fri', count: 250 },
    { name: 'Sat', count: 400 },
    { name: 'Sun', count: 350 },
  ],
  sources: [
    { name: 'Direct', value: 400 },
    { name: 'Social', value: 300 },
    { name: 'Organic', value: 300 },
    { name: 'Referral', value: 200 },
  ]
};

export const usersData = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active', lastActive: '2 min ago' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User', status: 'Inactive', lastActive: '1 day ago' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'Active', lastActive: '1 hr ago' },
  { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'Editor', status: 'Active', lastActive: '5 min ago' },
  { id: 5, name: 'Evan Wright', email: 'evan@example.com', role: 'User', status: 'Pending', lastActive: 'Just now' },
];

export const salesData = {
  recentTransactions: [
    { id: 101, customer: 'John Doe', product: 'Pro Plan', amount: '$99.00', date: '2023-10-25', status: 'Completed' },
    { id: 102, customer: 'Jane Smith', product: 'Basic Plan', amount: '$29.00', date: '2023-10-26', status: 'Completed' },
    { id: 103, customer: 'Bob Inc', product: 'Enterprise Plan', amount: '$499.00', date: '2023-10-26', status: 'Pending' },
  ],
  topProducts: [
    { name: 'Pro Plan', sales: 120, progress: 75 },
    { name: 'Basic Plan', sales: 300, progress: 45 },
    { name: 'Enterprise Plan', sales: 20, progress: 20 },
  ]
};
