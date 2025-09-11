import { useEffect, useState, createContext, useContext } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Account from './components/Account';
import { clearChats, getChats, addMessage } from './scripts/ChatManager';

// ThemeContext for light/dark mode
export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [chats, setChats] = useState(getChats());

  useEffect(() => {
    document.addEventListener('deviceready', () => {
      console.log('Cordova is ready');
      if (window.StatusBar) {
        window.StatusBar.backgroundColorByHexString(theme === 'light' ? '#ffffff' : '#2196F3');
        window.StatusBar.overlaysWebView(false);
      }
      if (location.pathname !== '/' && location.pathname !== '/newchat') {
        navigate('/');
      }
    }, false);
  }, [navigate, location.pathname, theme]);

  const toggleSidebar = () => {
    if (location.pathname !== '/account') {
      setSidebarOpen(!sidebarOpen);
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

  const isChatRoute = location.pathname === '/' || location.pathname === '/newchat';

  return (
    <div className={`flex flex-col h-screen font-sans transition-colors duration-300 ${theme === 'light' ? 'bg-[#f5f5f5]' : 'bg-[#0A0F23]'}`}>
      <header className={`p-4 flex justify-between items-center shadow-lg border-b z-20 ${theme === 'light' ? 'bg-[#fff] border-[#e0e0e0]' : 'bg-[#1A2A44] border-white/10'}`}>
        <h1
          className={`text-2xl font-semibold transition-colors ${theme === 'light' ? 'text-[#333]' : 'text-white'} ${isChatRoute ? 'cursor-pointer hover:text-[#00BCD4]' : ''}`}
          onClick={toggleSidebar}
        >
          prompt-ai
        </h1>
        <div className="flex space-x-4">
          {isChatRoute ? (
            <>
              {!sidebarOpen && (
                <button
                  onClick={handleDeleteChats}
                  className={`focus:outline-none p-3 rounded-full hover:bg-white/10 transition-colors ${theme === 'light' ? 'text-[#333] hover:text-[#FF8C00]' : 'text-white hover:text-[#FF8C00]'}`}
                  title="Delete Chats"
                  aria-label="Delete all chats"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4M3 7h18" />
                  </svg>
                </button>
              )}
              <button
                onClick={openAccount}
                className={`focus:outline-none p-3 rounded-full hover:bg-white/10 transition-colors ${theme === 'light' ? 'text-[#333] hover:text-[#00BCD4]' : 'text-white hover:text-[#00BCD4]'}`}
                title="Account"
                aria-label="Open account page"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </>
          ) : (
            <button
              onClick={() => window.history.back()}
              className={`focus:outline-none p-3 rounded-full hover:bg-white/10 transition-colors ${theme === 'light' ? 'text-[#333] hover:text-[#00BCD4]' : 'text-white hover:text-[#00BCD4]'}`}
              title="Back to Chats"
              aria-label="Go back to chats"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
        </div>
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
          className={`flex-1 p-4 sm:p-6 overflow-auto transition-all duration-300 ease-in-out ${theme === 'light' ? 'bg-[#fff]' : 'bg-[#0A0F23]'}`}
          style={{ transform: sidebarOpen && isChatRoute ? 'translateX(75vw)' : 'translateX(0)' }}
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

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;