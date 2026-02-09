import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Menu, Bell, User, Search, Plus, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useState } from 'react';

interface UserDashboardProps {
  onNavigate: (page: string) => void;
}

const portfolioData = [
  { date: '10 AM', value: 245000 },
  { date: '11 AM', value: 248500 },
  { date: '12 PM', value: 247200 },
  { date: '1 PM', value: 251000 },
  { date: '2 PM', value: 249800 },
  { date: '3 PM', value: 253400 },
];

const nifty50Data = [
  { time: '9:30', price: 21450 },
  { time: '10:00', price: 21480 },
  { time: '10:30', price: 21520 },
  { time: '11:00', price: 21495 },
  { time: '11:30', price: 21540 },
  { time: '12:00', price: 21565 },
  { time: '12:30', price: 21550 },
  { time: '1:00', price: 21580 },
  { time: '1:30', price: 21610 },
  { time: '2:00', price: 21595 },
  { time: '2:30', price: 21620 },
  { time: '3:00', price: 21640 },
];

const holdings = [
  { symbol: 'RELIANCE', name: 'Reliance Industries', qty: 50, avgPrice: 2450, ltp: 2520, change: 2.86, value: 126000 },
  { symbol: 'TCS', name: 'Tata Consultancy Services', qty: 30, avgPrice: 3280, ltp: 3350, change: 2.13, value: 100500 },
  { symbol: 'HDFCBANK', name: 'HDFC Bank', qty: 40, avgPrice: 1580, ltp: 1620, change: 2.53, value: 64800 },
  { symbol: 'INFY', name: 'Infosys', qty: 60, avgPrice: 1420, ltp: 1450, change: 2.11, value: 87000 },
  { symbol: 'ICICIBANK', name: 'ICICI Bank', qty: 45, avgPrice: 920, ltp: 945, change: 2.72, value: 42525 },
];

const watchlist = [
  { symbol: 'NIFTY 50', ltp: 21640, change: 0.88, changePercent: 2.4 },
  { symbol: 'BANK NIFTY', ltp: 45280, change: -0.42, changePercent: -1.2 },
  { symbol: 'SENSEX', ltp: 71250, change: 1.23, changePercent: 3.1 },
  { symbol: 'TATAMOTORS', ltp: 745, change: 2.35, changePercent: 5.8 },
  { symbol: 'WIPRO', ltp: 425, change: -1.12, changePercent: -2.5 },
];

export function UserDashboard({ onNavigate }: UserDashboardProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalInvested = holdings.reduce((sum, h) => sum + (h.avgPrice * h.qty), 0);
  const currentValue = holdings.reduce((sum, h) => sum + h.value, 0);
  const totalPnL = currentValue - totalInvested;
  const totalPnLPercent = ((totalPnL / totalInvested) * 100).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="px-4 lg:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 md:gap-8">
              <div className="text-xl md:text-2xl font-bold" style={{ color: '#0B1E38' }}>
                Findoc
              </div>
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <button className="font-semibold" style={{ color: '#F9A021' }}>Dashboard</button>
                <button
                  onClick={() => onNavigate('market')}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Markets
                </button>
                <button className="text-gray-600 hover:text-gray-900">Portfolio</button>
                <button className="text-gray-600 hover:text-gray-900">Orders</button>
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
            <div className="text-sm text-gray-600 mb-2">Total Investment</div>
            <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: '#0B1E38' }}>
              ₹{(totalInvested / 1000).toFixed(0)}K
            </div>
            <div className="text-xs text-gray-500">Principal amount</div>
          </div>

          <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
            <div className="text-sm text-gray-600 mb-2">Current Value</div>
            <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: '#0B1E38' }}>
              ₹{(currentValue / 1000).toFixed(0)}K
            </div>
            <div className="flex items-center gap-1 text-xs text-green-600">
              <TrendingUp size={14} />
              <span>+{((currentValue - totalInvested) / 1000).toFixed(1)}K</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
            <div className="text-sm text-gray-600 mb-2">Total P&L</div>
            <div className={`text-2xl md:text-3xl font-bold mb-1 ${totalPnL >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {totalPnL >= 0 ? '+' : ''}₹{(totalPnL / 1000).toFixed(1)}K
            </div>
            <div className={`text-xs ${totalPnL >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {totalPnL >= 0 ? '+' : ''}{totalPnLPercent}%
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
            <div className="text-sm text-gray-600 mb-2">Available Margin</div>
            <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: '#0B1E38' }}>
              ₹45.2K
            </div>
            <button className="text-xs font-semibold flex items-center gap-1 mt-1" style={{ color: '#F9A021' }}>
              <Plus size={12} />
              Add Funds
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            {/* Portfolio Chart */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg md:text-xl font-bold" style={{ color: '#0B1E38' }}>
                  Portfolio Performance
                </h3>
                <div className="flex gap-2 text-xs">
                  <button className="px-3 py-1 rounded-lg bg-gray-100 font-semibold">1D</button>
                  <button className="px-3 py-1 rounded-lg hover:bg-gray-100">1W</button>
                  <button className="px-3 py-1 rounded-lg hover:bg-gray-100">1M</button>
                  <button className="px-3 py-1 rounded-lg hover:bg-gray-100">1Y</button>
                </div>
              </div>
              <div className="h-64 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={portfolioData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F9A021" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#F9A021" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="date" stroke="#666" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#666" style={{ fontSize: '12px' }} />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#F9A021" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* NIFTY 50 Chart */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold" style={{ color: '#0B1E38' }}>NIFTY 50</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-2xl font-bold">21,640</span>
                    <span className="text-green-600 font-semibold flex items-center gap-1">
                      <TrendingUp size={16} />
                      +190 (+0.88%)
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('market')}
                  className="px-4 py-2 rounded-lg text-white font-semibold text-sm shadow-md hover:shadow-lg transition"
                  style={{ background: '#F9A021' }}
                >
                  Trade Now
                </button>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={nifty50Data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="time" stroke="#666" style={{ fontSize: '12px' }} />
                    <YAxis domain={['dataMin - 50', 'dataMax + 50']} stroke="#666" style={{ fontSize: '12px' }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#10b981" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Holdings Table */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg md:text-xl font-bold" style={{ color: '#0B1E38' }}>
                  Holdings ({holdings.length})
                </h3>
                <button className="text-sm" style={{ color: '#F9A021' }}>View All</button>
              </div>
              <div className="overflow-x-auto -mx-4 md:mx-0">
                <table className="w-full min-w-[600px]">
                  <thead className="border-b border-gray-200">
                    <tr className="text-left text-xs md:text-sm text-gray-600">
                      <th className="pb-3 pl-4 md:pl-0">Instrument</th>
                      <th className="pb-3 text-right">Qty</th>
                      <th className="pb-3 text-right">Avg Price</th>
                      <th className="pb-3 text-right">LTP</th>
                      <th className="pb-3 text-right">P&L</th>
                      <th className="pb-3 pr-4 md:pr-0 text-right">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {holdings.map((holding, idx) => {
                      const pnl = (holding.ltp - holding.avgPrice) * holding.qty;
                      const pnlPercent = ((holding.ltp - holding.avgPrice) / holding.avgPrice * 100).toFixed(2);
                      return (
                        <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 text-sm md:text-base">
                          <td className="py-3 pl-4 md:pl-0">
                            <div className="font-semibold" style={{ color: '#0B1E38' }}>{holding.symbol}</div>
                            <div className="text-xs text-gray-500 hidden md:block">{holding.name}</div>
                          </td>
                          <td className="py-3 text-right text-gray-600">{holding.qty}</td>
                          <td className="py-3 text-right text-gray-600">₹{holding.avgPrice}</td>
                          <td className="py-3 text-right font-semibold">₹{holding.ltp}</td>
                          <td className={`py-3 text-right font-semibold ${pnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            <div>{pnl >= 0 ? '+' : ''}₹{pnl.toFixed(0)}</div>
                            <div className="text-xs">{pnl >= 0 ? '+' : ''}{pnlPercent}%</div>
                          </td>
                          <td className="py-3 pr-4 md:pr-0 text-right font-semibold">₹{holding.value.toLocaleString()}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 md:space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
              <h3 className="text-lg font-bold mb-4" style={{ color: '#0B1E38' }}>Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => onNavigate('market')}
                  className="w-full py-3 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition"
                  style={{ background: '#F9A021' }}
                >
                  Buy Stocks
                </button>
                <button className="w-full py-3 rounded-lg border-2 font-semibold hover:bg-gray-50 transition" style={{ borderColor: '#0B1E38', color: '#0B1E38' }}>
                  Add Funds
                </button>
                <button className="w-full py-3 rounded-lg border-2 font-semibold hover:bg-gray-50 transition" style={{ borderColor: '#0B1E38', color: '#0B1E38' }}>
                  View Reports
                </button>
              </div>
            </div>

            {/* Watchlist */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold" style={{ color: '#0B1E38' }}>Watchlist</h3>
                <button className="text-xs" style={{ color: '#F9A021' }}>Edit</button>
              </div>
              <div className="space-y-3">
                {watchlist.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <div>
                      <div className="font-semibold text-sm" style={{ color: '#0B1E38' }}>{item.symbol}</div>
                      <div className={`text-xs font-semibold ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {item.change >= 0 ? '+' : ''}{item.change}%
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{item.ltp.toLocaleString()}</div>
                      <div className={`text-xs flex items-center justify-end gap-1 ${item.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {item.changePercent >= 0 ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                        {item.changePercent >= 0 ? '+' : ''}{item.changePercent}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Summary */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
              <h3 className="text-lg font-bold mb-4" style={{ color: '#0B1E38' }}>Market Summary</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Advances</span>
                  <span className="font-semibold text-green-600">1,234</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Declines</span>
                  <span className="font-semibold text-red-600">856</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Unchanged</span>
                  <span className="font-semibold text-gray-600">210</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-600">52W High</span>
                  <span className="font-semibold text-gray-900">324</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
