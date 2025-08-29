import React, { useState } from 'react';

function Account() {
  // Initialize states with values that match <option> values exactly
  const [selectedLiteModel, setSelectedLiteModel] = useState('gpt-3.5-turbo');
  const [selectedIntelligentModel, setSelectedIntelligentModel] = useState('gpt-4o');
  const [selectedProModel, setSelectedProModel] = useState('gpt-4o + GPT Image 1');

  const getModelName = (model) => {
    switch (model) {
      case 'gpt-3.5-turbo':
        return 'p-ai Lite';
      case 'grok-3-mini':
        return 'p-ai Fast';
      case 'deepseek-chat':
        return 'p-ai Expert';
      case 'gpt-4o':
        return 'p-ai Fast';
      case 'grok-3':
        return 'p-ai Intelligent';
      case 'deepseek-chat (V3)':
        return 'p-ai Expert';
      case 'gpt-4o + GPT Image 1':
        return 'p-ai Pro';
      case 'grok-4-0709 + grok-2-image-1212':
        return 'p-ai Vision';
      default:
        return 'Subscribe';
    }
  };

  return (
    <div
      className="p-6 min-h-screen font-sans relative"
      style={{
        background: 'linear-gradient(135deg, #0A0F23, #1A2A44)',
        overflow: 'hidden',
      }}
    >
      {/* Dynamic Starfield Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute bg-white rounded-full opacity-50"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 2 + 1}s infinite alternate`,
              boxShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
            }}
          />
        ))}
        {/* Animated Comets/Shooting Stars using logo colors */}
        {[...Array(7)].map((_, i) => (
          <div
            key={`comet-${i}`}
            className={`absolute rounded-full ${i % 2 === 0 ? 'bg-[#00BCD4]' : 'bg-[#FF8C00]'}`}
            style={{
              width: '3px',
              height: '3px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `comet ${Math.random() * 4 + 3}s infinite linear forwards ${Math.random() * 2}s`,
              boxShadow: `0 0 15px ${i % 2 === 0 ? 'rgba(0, 188, 212, 0.8)' : 'rgba(255, 140, 0, 0.8)'}`,
              filter: 'blur(1px)',
              transformOrigin: 'center center',
            }}
          />
        ))}
      </div>

      <h2 className="text-4xl font-extrabold text-white mb-8 relative z-10 text-center tracking-wide">
        <span style={{ color: '#00BCD4' }}>p-ai</span> <span style={{ color: '#FF8C00' }}>Subscription</span> Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 max-w-6xl mx-auto">
        
        {/* p-ai Lite Card */}
        <div className="bg-gradient-to-br from-[#1A2A44] to-[#0A0F23] p-8 rounded-xl shadow-2xl border border-gray-500 overflow-hidden relative">
          <h3 className="text-2xl font-semibold text-white mb-4 relative z-20">p-ai Lite</h3>
          <p className="text-gray-300 mb-6 relative z-20">Simple, fast, text-only conversations.</p>
          <ul className="space-y-3 text-white relative z-20">
            <li>
              <h4 className="font-bold text-[#FF8C00]">p-ai Fast</h4>
              <p className="text-sm text-gray-400">OpenAI's gpt-3.5-turbo</p>
            </li>
            <li>
              <h4 className="font-bold text-[#FF8C00]">p-ai Intelligent</h4>
              <p className="text-sm text-gray-400">xAI's grok-3-mini</p>
            </li>
            <li>
              <h4 className="font-bold text-[#FF8C00]">p-ai Expert</h4>
              <p className="text-sm text-gray-400">DeepSeek's deepseek-chat</p>
            </li>
          </ul>
          {/* Subscription Dropdown */}
          <div className="mt-6 relative z-20">
            <label className="block text-sm font-medium text-gray-300 mb-2">Select Model</label>
            <select
              className="w-full p-2 border border-[#00BCD4] rounded-lg bg-[#0A0F23] text-white"
              value={selectedLiteModel}
              onChange={(e) => {
                console.log('Lite model selected:', e.target.value);
                setSelectedLiteModel(e.target.value);
              }}
            >
              <option value="gpt-3.5-turbo">p-ai Fast (gpt-3.5-turbo)</option>
              <option value="grok-3-mini">p-ai Intelligent (grok-3-mini)</option>
              <option value="deepseek-chat">p-ai Expert (deepseek-chat)</option>
            </select>
          </div>
          <button className="w-full mt-6 cosmic-button bg-gradient-to-br from-[#0A0F23] to-[#1A2A44] text-white p-4 rounded-xl shadow-lg hover:from-[#1A2A44] hover:to-[#0A0F23] transition-all duration-300 transform hover:scale-105 border border-[#00BCD4] text-[#00BCD4] relative z-20">
            Subscribe to {getModelName(selectedLiteModel)}
          </button>
        </div>

        {/* p-ai Intelligent Card */}
        <div className="bg-gradient-to-br from-[#1A2A44] to-[#0A0F23] p-8 rounded-xl shadow-2xl border border-[#00BCD4] overflow-hidden relative">
          <div className="absolute inset-0 bg-[#00BCD4] opacity-10 blur-xl scale-150 rounded-full pointer-events-none" style={{ top: '-50%', left: '-50%' }}></div>
          <h3 className="text-2xl font-semibold text-[#00BCD4] mb-4 relative z-20">p-ai Intelligent</h3>
          <p className="text-gray-300 mb-6 relative z-20">Enhanced understanding of text and documents.</p>
          <ul className="space-y-3 text-white relative z-20">
            <li>
              <h4 className="font-bold text-[#FF8C00]">p-ai Fast</h4>
              <p className="text-sm text-gray-400">OpenAI's gpt-4o</p>
            </li>
            <li>
              <h4 className="font-bold text-[#FF8C00]">p-ai Intelligent</h4>
              <p className="text-sm text-gray-400">xAI's grok-3</p>
            </li>
            <li>
              <h4 className="font-bold text-[#FF8C00]">p-ai Expert</h4>
              <p className="text-sm text-gray-400">DeepSeek's deepseek-chat (V3)</p>
            </li>
          </ul>
          {/* Subscription Dropdown */}
          <div className="mt-6 relative z-20">
            <label className="block text-sm font-medium text-gray-300 mb-2">Select Model</label>
            <select
              className="w-full p-2 border border-[#00BCD4] rounded-lg bg-[#0A0F23] text-white"
              value={selectedIntelligentModel}
              onChange={(e) => {
                console.log('Intelligent model selected:', e.target.value);
                setSelectedIntelligentModel(e.target.value);
              }}
            >
              <option value="gpt-4o">p-ai Fast (gpt-4o)</option>
              <option value="grok-3">p-ai Intelligent (grok-3)</option>
              <option value="deepseek-chat (V3)">p-ai Expert (deepseek-chat V3)</option>
            </select>
          </div>
          <button className="w-full mt-6 cosmic-button bg-gradient-to-br from-[#0A0F23] to-[#1A2A44] text-white p-4 rounded-xl shadow-lg hover:from-[#1A2A44] hover:to-[#0A0F23] transition-all duration-300 transform hover:scale-105 border border-[#FF8C00] text-[#FF8C00] relative z-20">
            Subscribe to {getModelName(selectedIntelligentModel)}
          </button>
        </div>

        {/* p-ai Pro Card */}
        <div className="bg-gradient-to-br from-[#1A2A44] to-[#0A0F23] p-8 rounded-xl shadow-2xl border border-[#FF8C00] overflow-hidden relative">
          <div className="absolute inset-0 bg-[#FF8C00] opacity-10 blur-xl scale-150 rounded-full pointer-events-none" style={{ bottom: '-50%', right: '-50%' }}></div>
          <h3 className="text-2xl font-semibold text-[#FF8C00] mb-4 relative z-20">p-ai Pro</h3>
          <p className="text-gray-300 mb-6 relative z-20">Full-suite capabilities with files and images.</p>
          <ul className="space-y-3 text-white relative z-20">
            <li>
              <h4 className="font-bold text-[#00BCD4]">p-ai Pro</h4>
              <p className="text-sm text-gray-400">OpenAI's gpt-4o + GPT Image 1</p>
            </li>
            <li>
              <h4 className="font-bold text-[#00BCD4]">p-ai Vision</h4>
              <p className="text-sm text-gray-400">xAI's grok-4-0709 + grok-2-image-1212</p>
            </li>
          </ul>
          {/* Subscription Dropdown */}
          <div className="mt-6 relative z-20">
            <label className="block text-sm font-medium text-gray-300 mb-2">Select Model</label>
            <select
              className="w-full p-2 border border-[#FF8C00] rounded-lg bg-[#0A0F23] text-white"
              value={selectedProModel}
              onChange={(e) => {
                console.log('Pro model selected:', e.target.value);
                setSelectedProModel(e.target.value);
              }}
            >
              <option value="gpt-4o + GPT Image 1">p-ai Pro (gpt-4o + GPT Image 1)</option>
              <option value="grok-4-0709 + grok-2-image-1212">p-ai Vision (grok-4 + grok-2-image)</option>
            </select>
          </div>
          <button className="w-full mt-6 cosmic-button bg-gradient-to-br from-[#0A0F23] to-[#1A2A44] text-white p-4 rounded-xl shadow-lg hover:from-[#1A2A44] hover:to-[#0A0F23] transition-all duration-300 transform hover:scale-105 border border-white text-white relative z-20">
            Subscribe to {getModelName(selectedProModel)}
          </button>
        </div>
        
      </div>

      {/* CSS for Animations and Button/Dropdown Styles */}
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.9; transform: scale(1.2); }
          }
          @keyframes comet {
            0% { transform: translate(0, 0) rotate(45deg); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translate(-150vw, 150vh) rotate(45deg); opacity: 0; }
          }
          .cosmic-button {
            background-image: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.6) 70%);
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
            box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.5), 0 6px 10px rgba(0, 0, 0, 0.4);
            letter-spacing: 0.05em;
          }
          .cosmic-button:hover {
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.6), 0 8px 12px rgba(0, 0, 0, 0.5);
          }
          select {
            z-index: 20;
            appearance: auto;
            cursor: pointer;
            outline: none;
          }
          .absolute.inset-0.z-0 {
            pointer-events: none;
          }
          /* Ensure card backgrounds don't interfere with dropdowns */
          .bg-gradient-to-br {
            position: relative;
            z-index: 10;
          }
          /* Ensure absolute background elements in cards are non-interactive */
          .bg-gradient-to-br > .absolute {
            pointer-events: none;
          }
        `}
      </style>
    </div>
  );
}

export default Account;