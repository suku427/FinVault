import { useState } from 'react';
import { LandingPage } from '@/app/components/LandingPage';
import { LoginScreen } from '@/app/components/LoginScreen';
import { UserDashboard } from '@/app/components/UserDashboard';
import { MarketView } from '@/app/components/MarketView';
import { AdminPanel } from '@/app/components/AdminPanel';
import { ProfileSettings } from '@/app/components/ProfileSettings';

type Page = 'landing' | 'login' | 'dashboard' | 'market' | 'admin' | 'profile';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'login':
        return <LoginScreen onNavigate={setCurrentPage} />;
      case 'dashboard':
        return <UserDashboard onNavigate={setCurrentPage} />;
      case 'market':
        return <MarketView onNavigate={setCurrentPage} />;
      case 'admin':
        return <AdminPanel onNavigate={setCurrentPage} />;
      case 'profile':
        return <ProfileSettings onNavigate={setCurrentPage} />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderPage()}
      
      {/* Quick Navigation Helper - Dev Only */}
      <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-xl p-3 border-2 border-gray-200">
        <div className="text-xs font-semibold mb-2" style={{ color: '#0B1E38' }}>Quick Nav</div>
        <div className="flex flex-col gap-1 text-xs">
          <button
            onClick={() => setCurrentPage('landing')}
            className={`px-3 py-1 rounded ${currentPage === 'landing' ? 'bg-orange-100 text-orange-700' : 'hover:bg-gray-100'}`}
          >
            Landing
          </button>
          <button
            onClick={() => setCurrentPage('login')}
            className={`px-3 py-1 rounded ${currentPage === 'login' ? 'bg-orange-100 text-orange-700' : 'hover:bg-gray-100'}`}
          >
            Login
          </button>
          <button
            onClick={() => setCurrentPage('dashboard')}
            className={`px-3 py-1 rounded ${currentPage === 'dashboard' ? 'bg-orange-100 text-orange-700' : 'hover:bg-gray-100'}`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setCurrentPage('market')}
            className={`px-3 py-1 rounded ${currentPage === 'market' ? 'bg-orange-100 text-orange-700' : 'hover:bg-gray-100'}`}
          >
            Market
          </button>
          <button
            onClick={() => setCurrentPage('admin')}
            className={`px-3 py-1 rounded ${currentPage === 'admin' ? 'bg-orange-100 text-orange-700' : 'hover:bg-gray-100'}`}
          >
            Admin
          </button>
          <button
            onClick={() => setCurrentPage('profile')}
            className={`px-3 py-1 rounded ${currentPage === 'profile' ? 'bg-orange-100 text-orange-700' : 'hover:bg-gray-100'}`}
          >
            Profile
          </button>
        </div>
      </div>
    </div>
  );
}
