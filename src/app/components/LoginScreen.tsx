import { useState } from 'react';
import { ArrowLeft, Smartphone, Lock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LoginScreenProps {
  onNavigate: (page: string) => void;
}

export function LoginScreen({ onNavigate }: LoginScreenProps) {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length === 10) {
      setStep('otp');
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.every(digit => digit !== '')) {
      onNavigate('dashboard');
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left Side - Login Form */}
      <div className="flex flex-col justify-center px-6 py-12 lg:px-16 bg-white">
        <button
          onClick={() => onNavigate('landing')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <div className="max-w-md w-full mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#0B1E38' }}>
              Welcome to Findoc
            </h1>
            <p className="text-gray-600">
              {step === 'phone' ? 'Enter your mobile number to continue' : 'Enter the OTP sent to your mobile'}
            </p>
          </div>

          {step === 'phone' ? (
            <form onSubmit={handlePhoneSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#0B1E38' }}>
                  Mobile Number
                </label>
                <div className="flex gap-3">
                  <div className="w-20 px-4 py-4 border-2 border-gray-300 rounded-lg bg-gray-50 flex items-center justify-center font-semibold text-gray-700">
                    +91
                  </div>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="9876543210"
                    className="flex-1 px-4 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition text-lg"
                    maxLength={10}
                    required
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  We'll send you a 6-digit OTP for verification
                </p>
              </div>

              <button
                type="submit"
                disabled={phoneNumber.length !== 10}
                className="w-full py-4 rounded-lg text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ background: '#F9A021' }}
              >
                <Smartphone size={20} />
                Send OTP
              </button>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#0B1E38' }}>
                  Enter OTP
                </label>
                <div className="flex gap-3 justify-between">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      className="w-14 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition"
                      maxLength={1}
                      pattern="\d*"
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-gray-600">
                    Sent to +91 {phoneNumber}
                  </p>
                  <button
                    type="button"
                    onClick={() => setStep('phone')}
                    className="text-sm font-semibold hover:underline"
                    style={{ color: '#F9A021' }}
                  >
                    Change Number
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={otp.some(digit => digit === '')}
                className="w-full py-4 rounded-lg text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ background: '#F9A021' }}
              >
                <Lock size={20} />
                Verify & Login
              </button>

              <button
                type="button"
                className="w-full text-sm font-semibold hover:underline"
                style={{ color: '#F9A021' }}
              >
                Resend OTP in 30s
              </button>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              By continuing, you agree to Findoc's{' '}
              <a href="#" className="font-semibold hover:underline" style={{ color: '#F9A021' }}>
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="font-semibold hover:underline" style={{ color: '#F9A021' }}>
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Hero Image */}
      <div className="hidden md:flex flex-col justify-center items-center p-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1E38 0%, #1a3a5c 100%)' }}>
        <div className="relative z-10 text-center text-white space-y-6 max-w-lg">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Start Your
            <br />
            <span style={{ color: '#F9A021' }}>Trading Journey</span>
          </h2>
          <p className="text-lg text-gray-300">
            Join thousands of traders who are making smarter investment decisions every day
          </p>
          
          <div className="grid grid-cols-2 gap-6 pt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2" style={{ color: '#F9A021' }}>₹0</div>
              <div className="text-sm text-gray-300">Account Opening</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2" style={{ color: '#F9A021' }}>₹0</div>
              <div className="text-sm text-gray-300">AMC Charges</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2" style={{ color: '#F9A021' }}>₹0</div>
              <div className="text-sm text-gray-300">Delivery Trading</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2" style={{ color: '#F9A021' }}>24/7</div>
              <div className="text-sm text-gray-300">Support</div>
            </div>
          </div>

          <div className="pt-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
              alt="Trading Platform"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl opacity-20" style={{ background: '#F9A021' }}></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-3xl opacity-20" style={{ background: '#10b981' }}></div>
      </div>
    </div>
  );
}
