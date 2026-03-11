import React from 'react';

const StreamingHub = () => {
  return (
    <div className="streaming-hub">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2>Hub de Transmisión</h2>
        <div style={{ padding: '5px 15px', color: 'var(--primary)', border: '1px solid var(--primary)', borderRadius: '20px', fontSize: '0.8rem' }}>
          UPLINK: ESTABLE
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '2fr 1fr' }}>
        <div className="glass-card wave-container" style={{ minHeight: '400px', display: 'flex', flexDirection: 'column', gap: '15px', padding: '0', overflow: 'hidden' }}>
          <div style={{ 
            flex: 1, 
            background: 'linear-gradient(180deg, #050b18 0%, #1a1a2e 100%)', 
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div className="wave"></div>
            <div style={{ zIndex: 2, color: 'var(--primary)', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '10px', textShadow: '0 0 20px var(--primary)' }}>⚛</div>
              <div style={{ fontStyle: 'italic', letterSpacing: '4px' }}>SEÑAL ALPHA-4 EN VIVO</div>
            </div>
            <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 2 }}>
              <span className="status-online" style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 'bold', color: 'black' }}>EN VIVO</span>
            </div>
          </div>
          
          <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.5)' }}>
            <div>
              <h3>Secure Media Stream</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Protocolo: SRT Encriptado | Saltos: 2</p>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{ padding: '10px 25px', borderRadius: '4px', border: '1px solid var(--primary)', background: 'transparent', color: 'var(--primary)', fontWeight: 'bold' }}>AJUSTES</button>
              <button style={{ padding: '10px 25px', borderRadius: '4px', border: 'none', background: 'var(--primary)', color: 'black', fontWeight: 'bold', boxShadow: '0 0 15px var(--primary)' }}>GRABAR</button>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-card angular-card" style={{ borderColor: 'var(--primary)' }}>
            <h3>Actividad de Uplink</h3>
            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'flex-end', gap: '4px', height: '80px' }}>
              {[10, 40, 20, 80, 50, 90, 30, 70, 40, 60].map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h}%`, background: 'var(--primary)', opacity: 0.5, borderRadius: '1px' }}></div>
              ))}
            </div>
          </div>

          <div className="glass-card">
            <h3>Nodos Relé</h3>
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['HOUSTON-E1', 'BERLIN-G2', 'TOKYO-T1'].map(node => (
                <div key={node} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '4px', borderLeft: '2px solid var(--primary)' }}>
                  <span style={{ fontSize: '0.8rem' }}>{node}</span>
                  <span style={{ color: 'var(--primary)', fontSize: '0.8rem' }}>8.5ms</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamingHub;
