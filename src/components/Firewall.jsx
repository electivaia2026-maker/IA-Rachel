import React, { useState } from 'react';

const Firewall = () => {
  const [rules, setRules] = useState([
    { id: 1, type: 'INBOUND', service: 'HTTPS', status: 'ACTIVE', ip: '0.0.0.0/0' },
    { id: 2, type: 'INBOUND', service: 'SSH', status: 'RESTRICTED', ip: '192.168.1.1' },
    { id: 3, type: 'OUTBOUND', service: 'SMTP', status: 'BLOCKED', ip: 'ANY' },
  ]);

  return (
    <div className="firewall-view">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2>Centro de Control de Firewall</h2>
        <div className="glass-card" style={{ padding: '5px 15px', color: 'var(--primary)', border: '1px solid var(--primary)', borderRadius: '4px' }}>
          ESCUDO ACTIVO
        </div>
      </div>

      <div className="grid">
        <div className="glass-card angular-card pulse">
          <h3>Mapa de Amenazas Global</h3>
          <div style={{ marginTop: '1rem', position: 'relative', height: '180px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', overflow: 'hidden' }}>
            <svg width="100%" height="100%" viewBox="0 0 800 400" className="map-dots">
              <path d="M150,150 Q250,50 400,150 T650,150" fill="none" stroke="var(--primary)" strokeWidth="1" opacity="0.2" />
              <circle cx="200" cy="180" r="3" fill="var(--primary)" />
              <circle cx="450" cy="120" r="3" fill="#ff3e3e" />
              <circle cx="600" cy="250" r="3" fill="var(--primary)" />
              <line x1="200" y1="180" x2="450" y2="120" stroke="#ff3e3e" strokeWidth="1" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
              </line>
            </svg>
            <div style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '0.7rem', color: 'var(--primary)' }}>MODO: DETECCIÓN ACTIVA</div>
          </div>
        </div>

        <div className="glass-card angular-card">
          <h3>Log de Intrusiones</h3>
          <div style={{ marginTop: '1rem', fontMono: 'true', fontSize: '0.8rem' }}>
            <div style={{ color: '#00f2ff', marginBottom: '5px' }}>[10:40:05] INTENTO DE FUERZA BRUTA !! IP 203.0.113.5</div>
            <div style={{ color: '#ff3e3e', marginBottom: '5px' }}>[10:40:07] IP BLOQUEADA POR REGLA #009</div>
            <div style={{ color: '#00ff88', marginBottom: '5px' }}>[10:40:10] INTEGRIDAD DE NODO VERIFICADA</div>
            <div style={{ color: 'var(--text-dim)' }}>[10:40:15] ESCANEO DE PUERTOS: 0 AMENAZAS</div>
          </div>
        </div>
      </div>

      <div className="glass-card" style={{ marginTop: '2rem', borderTop: '4px solid var(--primary)' }}>
        <h3>Reglas de Seguridad Activas</h3>
        <table style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', color: 'var(--text-dim)', borderBottom: '1px solid var(--glass-border)' }}>
              <th style={{ padding: '10px' }}>ID</th>
              <th>TIPO</th>
              <th>SERVICIO</th>
              <th>OBJETIVO</th>
              <th>ESTADO</th>
            </tr>
          </thead>
          <tbody>
            {rules.map(rule => (
              <tr key={rule.id} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <td style={{ padding: '15px 10px' }}>#00{rule.id}</td>
                <td style={{ color: '#00f2ff' }}>{rule.type === 'INBOUND' ? 'ENTRANTE' : 'SALIENTE'}</td>
                <td>{rule.service}</td>
                <td style={{ fontFamily: 'monospace' }}>{rule.ip}</td>
                <td>
                  <span className={`status-indicator ${rule.status === 'ACTIVE' ? 'status-online' : rule.status === 'BLOCKED' ? 'status-alert' : 'status-loading'}`}></span>
                  {rule.status === 'ACTIVE' ? 'ACTIVO' : rule.status === 'BLOCKED' ? 'BLOQUEADO' : 'RESTRINGIDO'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Firewall;
