import { ArrowLeft, User, Building2, Shield, Bell, ChevronRight, Eye, EyeOff, Check } from 'lucide-react';
import { useState } from 'react';

interface ProfileSettingsProps {
  onNavigate: (page: string) => void;
}

export function ProfileSettings({ onNavigate }: ProfileSettingsProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'bank' | 'security'>('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="px-4 lg:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => onNavigate('dashboard')}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ArrowLeft size={20} className="text-gray-600" />
              </button>
              <h1 className="text-xl md:text-2xl font-bold" style={{ color: '#0B1E38' }}>
                Profile & Settings
              </h1>
            </div>
            <div className="text-xl md:text-2xl font-bold" style={{ color: '#0B1E38' }}>
              Findoc
            </div>
          </div>
        </div>
      </header>

      <main className="p-4 lg:p-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Sidebar - Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ background: '#F9A021' }}>
                  AK
                </div>
                <div>
                  <div className="font-bold" style={{ color: '#0B1E38' }}>Arjun Kapoor</div>
                  <div className="text-sm text-gray-500">ID: FD123456</div>
                </div>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === 'profile' 
                      ? 'text-white shadow-md' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  style={activeTab === 'profile' ? { background: '#F9A021' } : {}}
                >
                  <User size={20} />
                  <span>Profile</span>
                </button>

                <button
                  onClick={() => setActiveTab('bank')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === 'bank' 
                      ? 'text-white shadow-md' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  style={activeTab === 'bank' ? { background: '#F9A021' } : {}}
                >
                  <Building2 size={20} />
                  <span>Bank Details</span>
                </button>

                <button
                  onClick={() => setActiveTab('security')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === 'security' 
                      ? 'text-white shadow-md' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  style={activeTab === 'security' ? { background: '#F9A021' } : {}}
                >
                  <Shield size={20} />
                  <span>Security</span>
                </button>

                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-all">
                  <Bell size={20} />
                  <span>Notifications</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
                <h2 className="text-xl md:text-2xl font-bold mb-6" style={{ color: '#0B1E38' }}>
                  Personal Information
                </h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Full Name</label>
                      <input
                        type="text"
                        value="Arjun Kapoor"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                        disabled
                        readOnly
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Email Address</label>
                      <input
                        type="email"
                        value="arjun.kapoor@email.com"
                        onChange={() => {}}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Mobile Number</label>
                      <div className="flex gap-2">
                        <div className="w-16 px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 flex items-center justify-center text-gray-700">
                          +91
                        </div>
                        <input
                          type="tel"
                          value="9123456789"
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                          disabled
                          readOnly
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-600 mb-2">PAN Number</label>
                      <input
                        type="text"
                        value="BKXPK7845M"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                        disabled
                        readOnly
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Date of Birth</label>
                      <input
                        type="text"
                        value="22/03/1988"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                        disabled
                        readOnly
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Gender</label>
                      <input
                        type="text"
                        value="Male"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                        disabled
                        readOnly
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Address</label>
                    <textarea
                      value="123, MG Road, Bangalore, Karnataka - 560001"
                      onChange={() => {}}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                      rows={3}
                      disabled
                      readOnly
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button className="px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-all" style={{ background: '#F9A021' }}>
                      Update Email
                    </button>
                    <button className="px-6 py-3 rounded-lg border-2 font-semibold hover:bg-gray-50 transition-all" style={{ borderColor: '#0B1E38', color: '#0B1E38' }}>
                      Request Changes
                    </button>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> Personal details like Name, PAN, DOB cannot be changed online. Please contact support for assistance.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bank Details Tab */}
            {activeTab === 'bank' && (
              <div className="space-y-4 md:space-y-6">
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
                  <h2 className="text-xl md:text-2xl font-bold mb-6" style={{ color: '#0B1E38' }}>
                    Bank Accounts
                  </h2>

                  {/* Primary Bank */}
                  <div className="border-2 rounded-xl p-4 md:p-6 mb-4" style={{ borderColor: '#F9A021' }}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-bold" style={{ color: '#0B1E38' }}>HDFC Bank</h3>
                          <span className="text-xs font-semibold px-2 py-1 rounded-full text-white" style={{ background: '#F9A021' }}>
                            Primary
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">Account Number: •••• •••• 4567</p>
                      </div>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100">
                        <Check className="text-green-600" size={20} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-600 mb-1">IFSC Code</div>
                        <div className="font-semibold">HDFC0001234</div>
                      </div>
                      <div>
                        <div className="text-gray-600 mb-1">Account Type</div>
                        <div className="font-semibold">Savings</div>
                      </div>
                      <div>
                        <div className="text-gray-600 mb-1">Branch</div>
                        <div className="font-semibold">MG Road, Bangalore</div>
                      </div>
                      <div>
                        <div className="text-gray-600 mb-1">Status</div>
                        <div className="font-semibold text-green-600">Verified</div>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Bank */}
                  <div className="border border-gray-200 rounded-xl p-4 md:p-6 mb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold mb-2" style={{ color: '#0B1E38' }}>ICICI Bank</h3>
                        <p className="text-sm text-gray-600">Account Number: •••• •••• 8901</p>
                      </div>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100">
                        <Check className="text-gray-400" size={20} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-600 mb-1">IFSC Code</div>
                        <div className="font-semibold">ICIC0005678</div>
                      </div>
                      <div>
                        <div className="text-gray-600 mb-1">Account Type</div>
                        <div className="font-semibold">Savings</div>
                      </div>
                      <div>
                        <div className="text-gray-600 mb-1">Branch</div>
                        <div className="font-semibold">Koramangala, Bangalore</div>
                      </div>
                      <div>
                        <div className="text-gray-600 mb-1">Status</div>
                        <div className="font-semibold text-green-600">Verified</div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full md:w-auto px-6 py-3 rounded-lg border-2 font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2" style={{ borderColor: '#0B1E38', color: '#0B1E38' }}>
                    + Add New Bank Account
                  </button>
                </div>

                {/* UPI */}
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
                  <h2 className="text-xl md:text-2xl font-bold mb-6" style={{ color: '#0B1E38' }}>
                    UPI Details
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#F9A021' }}>
                          <span className="text-white font-bold">UPI</span>
                        </div>
                        <div>
                          <div className="font-semibold">arjun@okhdfc</div>
                          <div className="text-xs text-gray-500">Linked to HDFC Bank</div>
                        </div>
                      </div>
                      <button className="text-sm" style={{ color: '#F9A021' }}>Remove</button>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200">
                          <span className="text-gray-600 font-bold">UPI</span>
                        </div>
                        <div>
                          <div className="font-semibold">9123456789@paytm</div>
                          <div className="text-xs text-gray-500">Paytm</div>
                        </div>
                      </div>
                      <button className="text-sm" style={{ color: '#F9A021' }}>Remove</button>
                    </div>
                  </div>

                  <button className="w-full md:w-auto mt-4 px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-all" style={{ background: '#F9A021' }}>
                    + Add UPI ID
                  </button>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="space-y-4 md:space-y-6">
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
                  <h2 className="text-xl md:text-2xl font-bold mb-6" style={{ color: '#0B1E38' }}>
                    Login & Security
                  </h2>

                  <div className="space-y-6">
                    {/* Password */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Change Password</label>
                      <div className="space-y-3">
                        <input
                          type="password"
                          placeholder="Current Password"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                        />
                        <input
                          type="password"
                          placeholder="New Password"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                        />
                        <input
                          type="password"
                          placeholder="Confirm New Password"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                        />
                        <button className="px-6 py-2.5 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-all" style={{ background: '#F9A021' }}>
                          Update Password
                        </button>
                      </div>
                    </div>

                    {/* 2FA */}
                    <div className="pt-6 border-t border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-semibold mb-1" style={{ color: '#0B1E38' }}>
                            Two-Factor Authentication
                          </h3>
                          <p className="text-sm text-gray-600">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={twoFactorEnabled}
                            onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
                            className="sr-only peer"
                          />
                          <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-opacity-30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                      </div>
                      {twoFactorEnabled && (
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <p className="text-sm text-green-800">
                            <strong>Enabled:</strong> OTP will be sent to +91 9876543210
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Notifications */}
                    <div className="pt-6 border-t border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-semibold mb-1" style={{ color: '#0B1E38' }}>
                            Login Notifications
                          </h3>
                          <p className="text-sm text-gray-600">
                            Get notified of new login attempts
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notificationsEnabled}
                            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                            className="sr-only peer"
                          />
                          <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-opacity-30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Active Sessions */}
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
                  <h2 className="text-xl md:text-2xl font-bold mb-6" style={{ color: '#0B1E38' }}>
                    Active Sessions
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <div className="font-semibold mb-1">Chrome on Windows</div>
                        <div className="text-sm text-gray-600">Last active: Just now</div>
                        <div className="text-xs text-gray-500 mt-1">IP: 103.xxx.xxx.123 • Bangalore, India</div>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
                        Current
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <div className="font-semibold mb-1">Mobile App on Android</div>
                        <div className="text-sm text-gray-600">Last active: 2 hours ago</div>
                        <div className="text-xs text-gray-500 mt-1">IP: 103.xxx.xxx.124 • Bangalore, India</div>
                      </div>
                      <button className="text-sm text-red-600 hover:underline">
                        Logout
                      </button>
                    </div>
                  </div>

                  <button className="w-full md:w-auto mt-4 px-6 py-3 rounded-lg border-2 text-red-600 font-semibold hover:bg-red-50 transition-all" style={{ borderColor: '#ef4444' }}>
                    Logout All Devices
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}