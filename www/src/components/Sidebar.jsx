import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../App';

function Sidebar({ sidebarOpen, setSidebarOpen, handleTouchStart, handleTouchMove, handleTouchEnd }) {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10"
          onClick={() => setSidebarOpen(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
      )}
      <nav
        className={`fixed top-0 left-0 h-full w-3/4 max-w-[300px] p-4 space-y-6 shadow-md border-r rounded-r-lg transition-transform duration-300 ease-in-out z-20 ${
          theme === 'light' ? 'bg-[#fff] border-[#e0e0e0]' : 'bg-[#1A2A44] border-[#0A0F23]'
        } ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex justify-between items-center">
          <h2 className={`text-xl font-semibold ${theme === 'light' ? 'text-[#333]' : 'text-white'}`}>
            Menu
          </h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className={`p-2 rounded-full hover:bg-white/10 transition-colors ${theme === 'light' ? 'text-[#333] hover:text-[#00BCD4]' : 'text-white hover:text-[#00BCD4]'}`}
            aria-label="Close sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <Link
          to="/newchat"
          className={`block p-4 rounded-lg font-medium text-base transition-transform duration-200 active:scale-95 ${
            theme === 'light'
              ? 'text-[#333] hover:bg-[#00BCD4] hover:text-[#0A0F23]'
              : 'text-white hover:bg-[#00BCD4] hover:text-[#0A0F23]'
          }`}
          onClick={() => setSidebarOpen(false)}
        >
          New Chat
        </Link>
        <Link
          to="/"
          className={`block p-4 rounded-lg font-medium text-base transition-transform duration-200 active:scale-95 ${
            theme === 'light'
              ? 'text-[#333] hover:bg-[#00BCD4] hover:text-[#0A0F23]'
              : 'text-white hover:bg-[#00BCD4] hover:text-[#0A0F23]'
          }`}
          onClick={() => setSidebarOpen(false)}
        >
          Chats
        </Link>
      </nav>
    </>
  );
}

export default Sidebar;