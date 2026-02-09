import { ArrowRight, TrendingUp, Shield, Zap, ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="text-2xl md:text-3xl font-bold" style={{ color: '#0B1E38' }}>
                Findoc
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
                <a href="#about" className="text-gray-600 hover:text-gray-900 transition">About</a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
              </nav>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('login')}
                className="hidden md:block px-5 py-2 rounded-lg border-2 font-semibold hover:bg-gray-50 transition"
                style={{ borderColor: '#0B1E38', color: '#0B1E38' }}
              >
                Login
              </button>
              <button
                onClick={() => onNavigate('login')}
                className="hidden md:block px-5 py-2 rounded-lg text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                style={{ background: '#F9A021' }}
              >
                Get Started
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <nav className="flex flex-col gap-3">
                <a href="#features" className="text-gray-600 hover:text-gray-900 py-2">Features</a>
                <a href="#about" className="text-gray-600 hover:text-gray-900 py-2">About</a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900 py-2">Pricing</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 py-2">Contact</a>
                <button
                  onClick={() => onNavigate('login')}
                  className="px-5 py-2 rounded-lg border-2 font-semibold hover:bg-gray-50 transition mt-2"
                  style={{ borderColor: '#0B1E38', color: '#0B1E38' }}
                >
                  Login
                </button>
                <button
                  onClick={() => onNavigate('login')}
                  className="px-5 py-2 rounded-lg text-white font-semibold shadow-lg"
                  style={{ background: '#F9A021' }}
                >
                  Get Started
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1E38 0%, #1a3a5c 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold" style={{ background: 'rgba(249, 160, 33, 0.2)', color: '#F9A021' }}>
                🇮🇳 Trusted by 150K+ Indian Traders
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Trade Smarter,
                <br />
                Grow Faster with
                <br />
                <span style={{ color: '#F9A021' }}>Findoc</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                India's fastest growing fintech platform. Trade stocks, futures, and options with zero brokerage on delivery trades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => onNavigate('login')}
                  className="px-8 py-4 rounded-xl text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                  style={{ background: '#F9A021' }}
                >
                  Start Trading Now
                  <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => onNavigate('market')}
                  className="px-8 py-4 rounded-xl border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  Explore Markets
                  <ChevronRight size={20} />
                </button>
              </div>
              <div className="flex gap-8 pt-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold" style={{ color: '#F9A021' }}>₹0</div>
                  <div className="text-sm text-gray-400">Delivery Brokerage</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold" style={{ color: '#F9A021' }}>150K+</div>
                  <div className="text-sm text-gray-400">Active Traders</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold" style={{ color: '#F9A021' }}>24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative z-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=600&fit=crop"
                  alt="Trading Dashboard"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute top-10 -right-10 w-64 h-64 rounded-full blur-3xl opacity-30" style={{ background: '#F9A021' }}></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ background: '#10b981' }}></div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#0B1E38' }}>
              Why Choose Findoc?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the future of trading with cutting-edge technology and unmatched support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ background: 'rgba(249, 160, 33, 0.1)' }}>
                <TrendingUp size={32} style={{ color: '#F9A021' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0B1E38' }}>Advanced Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Real-time market data, TradingView charts, and AI-powered insights to make informed decisions
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
                <Shield size={32} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0B1E38' }}>Bank-Grade Security</h3>
              <p className="text-gray-600 leading-relaxed">
                2FA authentication, encrypted transactions, and SEBI-registered broker for complete peace of mind
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ background: 'rgba(59, 130, 246, 0.1)' }}>
                <Zap size={32} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0B1E38' }}>Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Execute trades in milliseconds with our high-speed trading engine and instant order placement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Indian Landmarks Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#0B1E38' }}>
              Empowering India's Financial Future
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From Mumbai to Bangalore, Delhi to Kolkata - traders across India trust Findoc
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=300&fit=crop"
                alt="Gateway of India"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="font-bold text-lg mb-2" style={{ color: '#0B1E38' }}>Mumbai</h4>
              <p className="text-sm text-gray-600">Financial Capital</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop"
                alt="India Gate"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="font-bold text-lg mb-2" style={{ color: '#0B1E38' }}>Delhi</h4>
              <p className="text-sm text-gray-600">National Capital</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&h=300&fit=crop"
                alt="Bangalore"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="font-bold text-lg mb-2" style={{ color: '#0B1E38' }}>Bangalore</h4>
              <p className="text-sm text-gray-600">Tech Hub</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558431382-27f94e8e1e3e?w=400&h=300&fit=crop"
                alt="Kolkata"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="font-bold text-lg mb-2" style={{ color: '#0B1E38' }}>Kolkata</h4>
              <p className="text-sm text-gray-600">Cultural Capital</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#0B1E38' }}>
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No hidden fees. No surprises. Just honest pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-all">
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#0B1E38' }}>Equity Delivery</h3>
              <div className="text-4xl font-bold mb-6" style={{ color: '#F9A021' }}>₹0</div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Zero brokerage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Free AMC</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>NIFTY 50 stocks</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 shadow-xl relative overflow-hidden" style={{ borderColor: '#F9A021' }}>
              <div className="absolute top-0 right-0 px-4 py-1 text-xs font-bold text-white rounded-bl-lg" style={{ background: '#F9A021' }}>
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#0B1E38' }}>Intraday & F&O</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold" style={{ color: '#F9A021' }}>₹20</span>
                <span className="text-gray-600 ml-2">per order</span>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Flat ₹20/order</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Unlimited trades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Advanced charts</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-all">
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#0B1E38' }}>Currency</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold" style={{ color: '#F9A021' }}>₹10</span>
                <span className="text-gray-600 ml-2">per order</span>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Flat ₹10/order</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>All currency pairs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Real-time data</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(135deg, #0B1E38 0%, #1a3a5c 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Trading Journey?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Join 150,000+ traders who trust Findoc for their investment needs
          </p>
          <button
            onClick={() => onNavigate('login')}
            className="px-10 py-4 rounded-xl text-white font-bold text-lg shadow-2xl hover:shadow-3xl transition-all inline-flex items-center gap-3"
            style={{ background: '#F9A021' }}
          >
            Open Free Account
            <ArrowRight size={24} />
          </button>
          <p className="text-sm text-gray-400 mt-6">
            * No account opening charges. No annual maintenance charges.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4" style={{ color: '#F9A021' }}>Findoc</div>
              <p className="text-gray-400 text-sm">
                India's trusted fintech platform for smart trading and investing.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Stocks</a></li>
                <li><a href="#" className="hover:text-white transition">Futures & Options</a></li>
                <li><a href="#" className="hover:text-white transition">Currency</a></li>
                <li><a href="#" className="hover:text-white transition">Mutual Funds</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Press</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 Findoc. All rights reserved. | SEBI Registration No: INZ000123456</p>
            <p className="mt-2">Investments in securities market are subject to market risks. Read all related documents carefully before investing.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
