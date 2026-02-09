import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Users, TrendingUp, AlertCircle, CheckCircle, Menu, Bell, User, Search } from 'lucide-react';
import { useState } from 'react';

interface AdminPanelProps {
  onNavigate: (page: string) => void;
}

const userStats = [
  { name: 'Active Users', value: 125000, color: '#10b981' },
  { name: 'Pending KYC', value: 8500, color: '#F9A021' },
  { name: 'Suspended', value: 2300, color: '#ef4444' },
  { name: 'Dormant', value: 15200, color: '#6b7280' },
];

const pendingKYC = [
  { id: 'KYC001', name: 'Divya Menon', email: 'divya.m@email.com', phone: '+91 98234 56789', date: '2026-02-03', status: 'pending' },
  { id: 'KYC002', name: 'Karan Bajaj', email: 'karan.b@email.com', phone: '+91 98234 56790', date: '2026-02-03', status: 'pending' },
  { id: 'KYC003', name: 'Neha Desai', email: 'neha.d@email.com', phone: '+91 98234 56791', date: '2026-02-02', status: 'pending' },
  { id: 'KYC004', name: 'Rohan Verma', email: 'rohan.v@email.com', phone: '+91 98234 56792', date: '2026-02-02', status: 'review' },
  { id: 'KYC005', name: 'Anjali Iyer', email: 'anjali.i@email.com', phone: '+91 98234 56793', date: '2026-02-01', status: 'pending' },
];

const recentTransactions = [
  { id: 'TXN001', user: 'Divya Menon', type: 'Deposit', amount: 50000, status: 'completed' },
  { id: 'TXN002', user: 'Karan Bajaj', type: 'Withdrawal', amount: 25000, status: 'pending' },
  { id: 'TXN003', user: 'Neha Desai', type: 'Trade', amount: 15000, status: 'completed' },
  { id: 'TXN004', user: 'Rohan Verma', type: 'Deposit', amount: 100000, status: 'completed' },
];

export function AdminPanel({ onNavigate }: AdminPanelProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="px-4 lg:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 md:gap-8">
              <div className="text-xl md:text-2xl font-bold" style={{ color: '#0B1E38' }}>
                Findoc Admin
              </div>
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <button className="font-semibold" style={{ color: '#F9A021' }}>Dashboard</button>
                <button className="text-gray-600 hover:text-gray-900">Users</button>
                <button className="text-gray-600 hover:text-gray-900">Transactions</button>
                <button className="text-gray-600 hover:text-gray-900">Reports</button>
              </nav>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg hidden md:block">
                <Search size={20} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></span>
              </button>
              <button
                onClick={() => onNavigate('profile')}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <User size={20} className="text-gray-600" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg md:hidden"
              >
                <Menu size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 lg:p-6 max-w-7xl mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-green-100">
                <Users className="text-green-600" size={24} />
              </div>
              <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">+12%</span>
            </div>
            <div className="text-sm text-gray-600 mb-1">Total Users</div>
            <div className="text-2xl md:text-3xl font-bold" style={{ color: '#0B1E38' }}>151K</div>
          </div>

          <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'rgba(249, 160, 33, 0.1)' }}>
                <TrendingUp style={{ color: '#F9A021' }} size={24} />
              </div>
              <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">+8%</span>
            </div>
            <div className="text-sm text-gray-600 mb-1">Daily Volume</div>
            <div className="text-2xl md:text-3xl font-bold" style={{ color: '#0B1E38' }}>₹1.2K Cr</div>
          </div>

          <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'rgba(249, 160, 33, 0.1)' }}>
                <AlertCircle style={{ color: '#F9A021' }} size={24} />
              </div>
              <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded-full">Urgent</span>
            </div>
            <div className="text-sm text-gray-600 mb-1">Pending KYC</div>
            <div className="text-2xl md:text-3xl font-bold" style={{ color: '#0B1E38' }}>8.5K</div>
          </div>

          <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-green-100">
                <CheckCircle className="text-green-600" size={24} />
              </div>
              <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">+15%</span>
            </div>
            <div className="text-sm text-gray-600 mb-1">Active Trades</div>
            <div className="text-2xl md:text-3xl font-bold" style={{ color: '#0B1E38' }}>24.3K</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            {/* Pending KYC Table */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg md:text-xl font-bold" style={{ color: '#0B1E38' }}>
                  Pending KYC Approvals ({pendingKYC.length})
                </h3>
                <button className="text-sm" style={{ color: '#F9A021' }}>View All</button>
              </div>
              <div className="overflow-x-auto -mx-4 md:mx-0">
                <table className="w-full min-w-[600px]">
                  <thead className="border-b border-gray-200">
                    <tr className="text-left text-xs md:text-sm text-gray-600">
                      <th className="pb-3 pl-4 md:pl-0">ID</th>
                      <th className="pb-3">User Details</th>
                      <th className="pb-3">Date</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3 pr-4 md:pr-0 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingKYC.map((kyc, idx) => (
                      <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 text-sm md:text-base">
                        <td className="py-3 pl-4 md:pl-0 font-semibold text-gray-700">{kyc.id}</td>
                        <td className="py-3">
                          <div className="font-semibold" style={{ color: '#0B1E38' }}>{kyc.name}</div>
                          <div className="text-xs text-gray-500">{kyc.email}</div>
                          <div className="text-xs text-gray-500">{kyc.phone}</div>
                        </td>
                        <td className="py-3 text-gray-600 text-sm">{kyc.date}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            kyc.status === 'pending' 
                              ? 'bg-yellow-100 text-yellow-700' 
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {kyc.status}
                          </span>
                        </td>
                        <td className="py-3 pr-4 md:pr-0">
                          <div className="flex gap-2 justify-end">
                            <button className="px-3 py-1 rounded-lg text-white text-xs md:text-sm font-semibold bg-green-600 hover:bg-green-700">
                              Approve
                            </button>
                            <button className="px-3 py-1 rounded-lg border border-red-600 text-red-600 text-xs md:text-sm font-semibold hover:bg-red-50">
                              Reject
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg md:text-xl font-bold" style={{ color: '#0B1E38' }}>
                  Recent Transactions
                </h3>
                <button className="text-sm" style={{ color: '#F9A021' }}>View All</button>
              </div>
              <div className="overflow-x-auto -mx-4 md:mx-0">
                <table className="w-full min-w-[500px]">
                  <thead className="border-b border-gray-200">
                    <tr className="text-left text-xs md:text-sm text-gray-600">
                      <th className="pb-3 pl-4 md:pl-0">Transaction ID</th>
                      <th className="pb-3">User</th>
                      <th className="pb-3">Type</th>
                      <th className="pb-3">Amount</th>
                      <th className="pb-3 pr-4 md:pr-0">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTransactions.map((txn, idx) => (
                      <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 text-sm md:text-base">
                        <td className="py-3 pl-4 md:pl-0 font-semibold text-gray-700">{txn.id}</td>
                        <td className="py-3" style={{ color: '#0B1E38' }}>{txn.user}</td>
                        <td className="py-3 text-gray-600">{txn.type}</td>
                        <td className="py-3 font-semibold">₹{txn.amount.toLocaleString()}</td>
                        <td className="py-3 pr-4 md:pr-0">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            txn.status === 'completed' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {txn.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 md:space-y-6">
            {/* User Distribution Chart */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-4" style={{ color: '#0B1E38' }}>
                User Distribution
              </h3>
              <div className="h-64 md:h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={userStats}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {userStats.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2">
                {userStats.map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ background: stat.color }}></div>
                      <span className="text-gray-600">{stat.name}</span>
                    </div>
                    <span className="font-semibold">{stat.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-4" style={{ color: '#0B1E38' }}>
                Today's Overview
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="text-sm text-gray-600">New Signups</span>
                  <span className="text-lg font-bold text-green-600">+342</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Total Trades</span>
                  <span className="text-lg font-bold" style={{ color: '#0B1E38' }}>15,420</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Active Sessions</span>
                  <span className="text-lg font-bold" style={{ color: '#0B1E38' }}>8,234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Support Tickets</span>
                  <span className="text-lg font-bold" style={{ color: '#F9A021' }}>23</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-4" style={{ color: '#0B1E38' }}>
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full py-3 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-all" style={{ background: '#F9A021' }}>
                  Generate Report
                </button>
                <button className="w-full py-3 rounded-lg border-2 font-semibold hover:bg-gray-50 transition-all" style={{ borderColor: '#0B1E38', color: '#0B1E38' }}>
                  Export Data
                </button>
                <button className="w-full py-3 rounded-lg border-2 font-semibold hover:bg-gray-50 transition-all" style={{ borderColor: '#0B1E38', color: '#0B1E38' }}>
                  User Analytics
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}