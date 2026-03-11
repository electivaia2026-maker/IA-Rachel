import React, { useState } from 'react';

const PackageManager = () => {
  const [packages] = useState([
    { name: 'Core-System-API', version: 'v2.4.0', status: 'STABLE', size: '124MB' },
    { name: 'Kernel-Patch-X1', version: 'v1.0.2', status: 'STABLE', size: '45MB' },
    { name: 'Security-Module-Alpha', version: 'v0.9.8', status: 'BETA', size: '210MB' },
    { name: 'Legacy-Driver-Node', version: 'v0.1.2', status: 'DEPRECATED', size: '12MB' },
  ]);

  return (
    <div className="package-manager">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2>Servidor de Paquetes</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div className="glass-card" style={{ padding: '5px 15px', color: 'var(--primary)', border: '1px solid var(--primary)' }}>
            REPOSITORIO: ONLINE
          </div>
        </div>
      </div>
      
      <div className="grid">
        <div className="glass-card angular-card" style={{ gridRow: 'span 2' }}>
          <h3>Salud del Repositorio</h3>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem 0' }}>
            <div style={{ 
              width: '120px', 
              height: '120px', 
              borderRadius: '50%', 
              background: 'conic-gradient(var(--primary) 85%, rgba(255,255,255,0.05) 0)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--accent-glow)'
            }}>
              <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                85%
              </div>
            </div>
          </div>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-dim)', textAlign: 'center' }}>Capacidad en uso: 1.2TB / 1.5TB</div>
        </div>

        {packages.map(pkg => (
          <div key={pkg.name} className="glass-card package-box" style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderLeft: '4px solid var(--primary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{pkg.name}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{pkg.version}</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.9rem' }}>Estado: {pkg.status === 'STABLE' ? 'ESTABLE' : pkg.status}</span>
              <span className={`status-indicator ${pkg.status === 'STABLE' ? 'status-online' : pkg.status === 'BETA' ? 'status-loading' : 'status-alert'}`}></span>
            </div>

            <button style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--primary)',
              padding: '8px',
              borderRadius: '4px',
              color: 'var(--primary)',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: '0.3s'
            }}>
              DESPLEGAR
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageManager;
