import { Link } from 'react-router-dom';

function Sidebar({ sidebarOpen, setSidebarOpen, handleTouchStart, handleTouchMove, handleTouchEnd }) {
  return (
    <nav
      className={`bg-[#1A2A44] w-64 p-4 space-y-6 fixed h-full shadow-lg border-r border-[#0A0F23] transition-transform duration-300 ease-in-out z-20 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
    >
      <Link
        to="/newchat"
        className="block p-3 text-white hover:bg-[#00BCD4] rounded-lg font-medium transition-colors hover:text-[#0A0F23]"
        onClick={() => setSidebarOpen(false)}
      >
        New Chat
      </Link>
      <Link
        to="/"
        className="block p-3 text-white hover:bg-[#00BCD4] rounded-lg font-medium transition-colors hover:text-[#0A0F23]"
        onClick={() => setSidebarOpen(false)}
      >
        Chats
      </Link>
    </nav>
  );
}

export default Sidebar;