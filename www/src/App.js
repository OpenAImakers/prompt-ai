import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Account from './components/Account';
import { clearChats, getChats, addMessage } from './scripts/ChatManager';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [chats, setChats] = useState(getChats());

  useEffect(() => {
    document.addEventListener('deviceready', () => {
      console.log('Cordova is ready');
      if (window.StatusBar) {
        window.StatusBar.backgroundColorByHexString('#2196F3'); // Blue status bar
        window.StatusBar.overlaysWebView(false); // Prevent overlap
      }
      if (location.pathname !== '/' && location.pathname !== '/newchat') {
        navigate('/');
      }
    }, false);
  }, [navigate, location.pathname]);

  const toggleSidebar = () => {
    if (location.pathname !== '/account') {
      setSidebarOpen(!sidebarOpen); // Toggle sidebar (open if closed, close if open)
    }
  };

  const handleTouchStart = (e) => {
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    setTouchStart(clientX);
    setTouchEnd(null);
  };

  const handleTouchMove = (e) => {
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    setTouchEnd(clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart && touchEnd && location.pathname !== '/account') {
      const deltaX = touchEnd - touchStart;
      if (deltaX < -50) setSidebarOpen(false);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleDeleteChats = () => {
    clearChats();
    setChats(getChats());
    console.log('Chats cleared');
  };

  const openAccount = () => {
    setSidebarOpen(false);
    navigate('/account');
  };

  const closeSidebar = () => {
    if (sidebarOpen && location.pathname !== '/account') {
      setSidebarOpen(false);
    }
  };

  const isChatRoute = location.pathname === '/' || location.pathname === '/newchat';

  return (
    <div className="flex flex-col h-screen bg-[#0A0F23] font-sans">
      {/* Overlay for closing sidebar when tapping outside */}
      {sidebarOpen && isChatRoute && (
        <div
          className="fixed inset-0 bg-black/50 z-10"
          onClick={closeSidebar}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
      )}
      <header className="p-4 flex justify-between items-center bg-[#1A2A44] shadow-lg border-b border-white/10 z-20">
        <h1
          className={`text-2xl font-semibold text-white transition-colors ${
            isChatRoute ? 'cursor-pointer hover:text-[#00BCD4]' : ''
          }`}
          onClick={toggleSidebar}
        >
          prompt-ai
        </h1>
        {isChatRoute ? (
          <div className="flex space-x-4">
            <button
              onClick={handleDeleteChats}
              className="text-white hover:text-[#FF8C00] focus:outline-none p-2 rounded-full hover:bg-white/10 transition-colors"
              title="Delete Chats"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4M3 7h18" />
              </svg>
            </button>
            <button
              onClick={openAccount}
              className="text-white hover:text-[#00BCD4] focus:outline-none p-2 rounded-full hover:bg-white/10 transition-colors"
              title="Account"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        ) : (
          <button
            onClick={() => window.history.back()}
            className="text-white hover:text-[#00BCD4] focus:outline-none p-2 rounded-full hover:bg-white/10 transition-colors"
            title="Back to Chats"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
      </header>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          handleTouchStart={handleTouchStart}
          handleTouchMove={handleTouchMove}
          handleTouchEnd={handleTouchEnd}
        />
        <main
          className="flex-1 p-6 overflow-auto transition-all duration-300"
          style={{ transform: sidebarOpen && isChatRoute ? 'translateX(256px)' : 'translateX(0)' }}
        >
          <Routes>
            <Route path="/" element={<Chat chats={chats} setChats={setChats} sidebarOpen={sidebarOpen} />} />
            <Route path="/newchat" element={<Chat chats={[]} setChats={setChats} sidebarOpen={sidebarOpen} />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;