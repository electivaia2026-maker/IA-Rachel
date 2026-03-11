import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [knowledge, setKnowledge] = useState({});
  const [messages, setMessages] = useState([
    { text: "Bienvenido a Centinela Gateway. ¿En qué puedo ayudarte con tus servicios de red hoy?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    fetch('/conocimiento.txt')
      .then(res => res.text())
      .then(text => {
        const sections = text.split('[');
        const kb = {};
        sections.forEach(section => {
          if (section.trim()) {
            const lines = section.split(']');
            const key = lines[0].toLowerCase();
            const content = lines[1].trim();
            kb[key] = content;
          }
        });
        setKnowledge(kb);
      })
      .catch(err => console.error("Error cargando base de conocimiento:", err));
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulated AI Response using knowledge base
    setTimeout(() => {
      let botResponse = "Estoy analizando tu solicitud. El estado actual del sistema es ÓPTIMO.";
      const lowInput = input.toLowerCase();
      
      if (lowInput.includes('firewall') && knowledge.firewall) {
        botResponse = knowledge.firewall;
      } else if (lowInput.includes('paquete') && knowledge.paquetes) {
        botResponse = knowledge.paquetes;
      } else if (lowInput.includes('stream') && knowledge.streaming) {
        botResponse = knowledge.streaming;
      } else if (lowInput.includes('sentinel') && knowledge['ia-sentinel']) {
        botResponse = knowledge['ia-sentinel'];
      }

      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 800);
  };

  return (
    <>
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="chat-window glass-card" style={{ padding: 0 }}>
          <div className="chat-header">
            <span style={{ fontWeight: 'bold' }}>SENTINEL IA</span>
            <span style={{ fontSize: '0.8rem', color: '#00ff88' }}>● EN LÍNEA</span>
          </div>
          
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} style={{ 
                marginBottom: '1rem', 
                textAlign: msg.isBot ? 'left' : 'right' 
              }}>
                <div style={{ 
                  display: 'inline-block', 
                  padding: '8px 12px', 
                  borderRadius: '12px',
                  background: msg.isBot ? 'rgba(255,255,255,0.05)' : 'var(--secondary)',
                  maxWidth: '85%',
                  fontSize: '0.9rem',
                  border: msg.isBot ? '1px solid var(--glass-border)' : 'none'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <input 
              type="text" 
              className="chat-input" 
              placeholder="Pregunta a Centinela..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer' }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
