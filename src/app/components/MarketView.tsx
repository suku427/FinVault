import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Line } from 'recharts';
import { TrendingUp, TrendingDown, Menu, Bell, User, Search, ChevronDown, Activity } from 'lucide-react';
import { useState } from 'react';

interface MarketViewProps {
  onNavigate: (page: string) => void;
}

// Candlestick data
const candlestickData = [
  { time: '9:30', open: 2450, high: 2480, low: 2440, close: 2470, volume: 1200000 },
  { time: '10:00', open: 2470, high: 2495, low: 2465, close: 2485, volume: 1450000 },
  { time: '10:30', open: 2485, high: 2510, low: 2480, close: 2505, volume: 1680000 },
  { time: '11:00', open: 2505, high: 2520, low: 2495, close: 2500, volume: 1350000 },
  { time: '11:30', open: 2500, high: 2515, low: 2490, close: 2510, volume: 1520000 },
  { time: '12:00', open: 2510, high: 2530, low: 2505, close: 2525, volume: 1780000 },
  { time: '12:30', open: 2525, high: 2540, low: 2520, close: 2535, volume: 1920000 },
  { time: '1:00', open: 2535, high: 2545, low: 2525, close: 2530, volume: 1650000 },
  { time: '1:30', open: 2530, high: 2535, low: 2515, close: 2520, volume: 1420000 },
  { time: '2:00', open: 2520, high: 2540, low: 2515, close: 2535, volume: 1750000 },
  { time: '2:30', open: 2535, high: 2550, low: 2530, close: 2545, volume: 1880000 },
  { time: '3:00', open: 2545, high: 2555, low: 2540, close: 2550, volume: 2100000 },
];

const topGainers = [
  { symbol: 'TATAMOTORS', ltp: 745.50, change: 5.82, volume: '12.5M' },
  { symbol: 'AXISBANK', ltp: 1125.30, change: 4.65, volume: '8.2M' },
  { symbol: 'BAJFINANCE', ltp: 7250.80, change: 4.32, volume: '5.8M' },
  { symbol: 'ADANIPORTS', ltp: 1180.20, change: 3.98, volume: '6.5M' },
];

const topLosers = [
  { symbol: 'MARUTI', ltp: 10250.40, change: -3.45, volume: '4.2M' },
  { symbol: 'TITAN', ltp: 3420.60, change: -2.98, volume: '7.1M' },
  { symbol: 'ASIANPAINT', ltp: 2980.30, change: -2.56, volume: '3.8M' },
  { symbol: 'NESTLEIND', ltp: 24500.50, change: -2.12, volume: '2.5M' },
];

const orderBook = [
  { orders: 125, qty: 8500, price: 2548 },
  { orders: 98, qty: 6200, price: 2549 },
  { orders: 156, qty: 10200, price: 2550 },
  { orders: 89, qty: 5800, price: 2551 },
  { orders: 112, qty: 7400, price: 2552 },
];

export function MarketView({ onNavigate }: MarketViewProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState('RELIANCE');
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('2550');

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
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Dashboard
                </button>
                <button className="font-semibold" style={{ color: '#F9A021' }}>Markets</button>
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
        {/* Stock Info Bar */}
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-md mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-300 hover:border-gray-400 font-semibold">
                {selectedStock}
                <ChevronDown size={18} />
              </button>
              <div>
                <div className="text-3xl md:text-4xl font-bold" style={{ color: '#0B1E38' }}>₹2,550.00</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-green-600 font-semibold flex items-center gap-1">
                    <TrendingUp size={16} />
                    +100.00 (+4.08%)
                  </span>
                  <span className="text-xs text-gray-500">NSE</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:flex md:items-center gap-4 md:gap-6 text-sm">
              <div>
                <div className="text-gray-600 text-xs">Open</div>
                <div className="font-semibold">₹2,450</div>
              </div>
              <div>
                <div className="text-gray-600 text-xs">High</div>
                <div className="font-semibold text-green-600">₹2,555</div>
              </div>
              <div>
                <div className="text-gray-600 text-xs">Low</div>
                <div className="font-semibold text-red-600">₹2,440</div>
              </div>
              <div>
                <div className="text-gray-600 text-xs">Volume</div>
                <div className="font-semibold">18.5M</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            {/* Price Chart */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg md:text-xl font-bold" style={{ color: '#0B1E38' }}>
                  Price Chart
                </h3>
                <div className="flex gap-2 text-xs">
                  <button className="px-3 py-1 rounded-lg bg-gray-100 font-semibold">1D</button>
                  <button className="px-3 py-1 rounded-lg hover:bg-gray-100">1W</button>
                  <button className="px-3 py-1 rounded-lg hover:bg-gray-100">1M</button>
                  <button className="px-3 py-1 rounded-lg hover:bg-gray-100">1Y</button>
                </div>
              </div>
              <div className="h-80 md:h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={candlestickData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="time" stroke="#666" style={{ fontSize: '12px' }} />
                    <YAxis yAxisId="price" domain={['dataMin - 20', 'dataMax + 20']} stroke="#666" style={{ fontSize: '12px' }} />
                    <Tooltip 
                      contentStyle={{ background: '#fff', border: '1px solid #ccc', borderRadius: '8px' }}
                      formatter={(value: number) => `₹${value}`}
                    />
                    <Line yAxisId="price" type="monotone" dataKey="close" stroke="#F9A021" strokeWidth={2} dot={false} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Volume Chart */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-4" style={{ color: '#0B1E38' }}>
                Volume
              </h3>
              <div className="h-48 md:h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={candlestickData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="time" stroke="#666" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#666" style={{ fontSize: '12px' }} />
                    <Tooltip 
                      contentStyle={{ background: '#fff', border: '1px solid #ccc', borderRadius: '8px' }}
                    />
                    <Bar dataKey="volume" fill="#0B1E38" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Order Book */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-4" style={{ color: '#0B1E38' }}>
                Market Depth
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Bid */}
                <div>
                  <div className="text-sm font-semibold text-green-600 mb-3">BID</div>
                  <table className="w-full text-sm">
                    <thead className="border-b border-gray-200">
                      <tr className="text-left text-xs text-gray-600">
                        <th className="pb-2">Orders</th>
                        <th className="pb-2">Qty</th>
                        <th className="pb-2 text-right">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderBook.slice(0, 5).reverse().map((order, idx) => (
                        <tr key={idx} className="border-b border-gray-100">
                          <td className="py-2 text-gray-600">{order.orders}</td>
                          <td className="py-2 text-gray-600">{order.qty.toLocaleString()}</td>
                          <td className="py-2 text-right font-semibold text-green-600">₹{order.price - 2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Ask */}
                <div>
                  <div className="text-sm font-semibold text-red-600 mb-3">ASK</div>
                  <table className="w-full text-sm">
                    <thead className="border-b border-gray-200">
                      <tr className="text-left text-xs text-gray-600">
                        <th className="pb-2">Orders</th>
                        <th className="pb-2">Qty</th>
                        <th className="pb-2 text-right">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderBook.map((order, idx) => (
                        <tr key={idx} className="border-b border-gray-100">
                          <td className="py-2 text-gray-600">{order.orders}</td>
                          <td className="py-2 text-gray-600">{order.qty.toLocaleString()}</td>
                          <td className="py-2 text-right font-semibold text-red-600">₹{order.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Trading Panel */}
          <div className="space-y-4 md:space-y-6">
            {/* Buy/Sell Panel */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setOrderType('buy')}
                  className={`flex-1 py-3 rounded-lg font-bold text-lg transition ${
                    orderType === 'buy'
                      ? 'bg-green-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  BUY
                </button>
                <button
                  onClick={() => setOrderType('sell')}
                  className={`flex-1 py-3 rounded-lg font-bold text-lg transition ${
                    orderType === 'sell'
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  SELL
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#0B1E38' }}>
                    Quantity
                  </label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="0"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 text-lg font-semibold"
                  />
                  <div className="flex gap-2 mt-2">
                    <button onClick={() => setQuantity('1')} className="px-3 py-1 text-xs rounded-lg bg-gray-100 hover:bg-gray-200">1</button>
                    <button onClick={() => setQuantity('10')} className="px-3 py-1 text-xs rounded-lg bg-gray-100 hover:bg-gray-200">10</button>
                    <button onClick={() => setQuantity('50')} className="px-3 py-1 text-xs rounded-lg bg-gray-100 hover:bg-gray-200">50</button>
                    <button onClick={() => setQuantity('100')} className="px-3 py-1 text-xs rounded-lg bg-gray-100 hover:bg-gray-200">100</button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#0B1E38' }}>
                    Price
                  </label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 text-lg font-semibold"
                  />
                  <div className="flex gap-2 mt-2">
                    <button className="px-3 py-1 text-xs rounded-lg bg-gray-100 hover:bg-gray-200">Market</button>
                    <button className="px-3 py-1 text-xs rounded-lg bg-gray-100 hover:bg-gray-200">Limit</button>
                    <button className="px-3 py-1 text-xs rounded-lg bg-gray-100 hover:bg-gray-200">SL</button>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-gray-600">Order Value</span>
                    <span className="font-semibold">₹{(Number(quantity || 0) * Number(price)).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mb-4 text-sm">
                    <span className="text-gray-600">Available Margin</span>
                    <span className="font-semibold text-green-600">₹45,200</span>
                  </div>
                </div>

                <button
                  className={`w-full py-4 rounded-lg text-white font-bold text-lg shadow-lg hover:shadow-xl transition ${
                    orderType === 'buy' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
                  }`}
                >
                  {orderType === 'buy' ? 'BUY' : 'SELL'} {selectedStock}
                </button>
              </div>
            </div>

            {/* Top Gainers */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <Activity size={20} style={{ color: '#F9A021' }} />
                <h3 className="text-lg font-bold" style={{ color: '#0B1E38' }}>Top Gainers</h3>
              </div>
              <div className="space-y-3">
                {topGainers.map((stock, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <div>
                      <div className="font-semibold text-sm" style={{ color: '#0B1E38' }}>{stock.symbol}</div>
                      <div className="text-xs text-gray-500">{stock.volume}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-sm">₹{stock.ltp}</div>
                      <div className="text-xs text-green-600 font-semibold">+{stock.change}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Losers */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <TrendingDown size={20} className="text-red-600" />
                <h3 className="text-lg font-bold" style={{ color: '#0B1E38' }}>Top Losers</h3>
              </div>
              <div className="space-y-3">
                {topLosers.map((stock, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <div>
                      <div className="font-semibold text-sm" style={{ color: '#0B1E38' }}>{stock.symbol}</div>
                      <div className="text-xs text-gray-500">{stock.volume}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-sm">₹{stock.ltp}</div>
                      <div className="text-xs text-red-600 font-semibold">{stock.change}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
