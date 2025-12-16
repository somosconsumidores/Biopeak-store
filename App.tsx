import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { StorePage } from './pages/StorePage';
import { AdminPage } from './pages/AdminPage';
import { Footer } from './components/Footer';
import { ViewState } from './types';

function App() {
  // Simple state-based routing for this SPA to keep it file-compact
  const [currentView, setCurrentView] = useState<ViewState>('store');

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-gray-50">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      
      <div className="flex-grow">
        {currentView === 'store' ? <StorePage /> : <AdminPage />}
      </div>

      <Footer />
    </div>
  );
}

export default App;