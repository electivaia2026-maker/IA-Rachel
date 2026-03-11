import React, { useState } from 'react';
import Firewall from './components/Firewall';
import PackageManager from './components/PackageManager';
import StreamingHub from './components/StreamingHub';
import Chatbot from './components/Chatbot';

function App() {
  const [activeTab, setActiveTab] = useState('firewall');

  const renderContent = () => {
    switch (activeTab) {
      case 'firewall': return <Firewall />;
      case 'packages': return <PackageManager />;
      case 'streaming': return <StreamingHub />;
      default: return <Firewall />;
    }
  };

  const getThemeClass = () => {
    switch (activeTab) {
      case 'firewall': return 'theme-firewall';
      case 'packages': return 'theme-packages';
      case 'streaming': return 'theme-streaming';
      default: return 'theme-firewall';
    }
  };

  return (
    <div className={`app-container ${getThemeClass()}`}>
      <div className="sidebar">
        <div className="logo">CENTINELA GATEWAY</div>
        
        <nav>
          <div 
            className={`nav-item ${activeTab === 'firewall' ? 'active' : ''}`}
            onClick={() => setActiveTab('firewall')}
          >
            🛡️ Firewall
          </div>
          <div 
            className={`nav-item ${activeTab === 'packages' ? 'active' : ''}`}
            onClick={() => setActiveTab('packages')}
          >
            📦 Servidor de Paquetes
          </div>
          <div 
            className={`nav-item ${activeTab === 'streaming' ? 'active' : ''}`}
            onClick={() => setActiveTab('streaming')}
          >
            📽️ Streaming
          </div>
        </nav>

        <div style={{ marginTop: 'auto', padding: '1rem', borderTop: '1px solid var(--glass-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
            <span className="status-online" style={{ width: '8px', height: '8px' }}></span>
            <span>Nodo Local: ACTIVO</span>
          </div>
          <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem', marginTop: '5px' }}>
            Versión: 1.0.0-Sentinel
          </div>
        </div>
      </div>

      <main className="main-content">
        {renderContent()}
      </main>

      <Chatbot />
    </div>
  );
}

export default App;
