import { useState, useContext } from 'react';
import { ThemeContext } from '../App';

function Chat({ chats, setChats, sidebarOpen }) {
  const { theme } = useContext(ThemeContext);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessage = {
        id: chats.length,
        text: input,
        sender: 'user',
        timestamp: new Date().toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
      };
      setChats((prevChats) => {
        const updatedChats = [...prevChats, newMessage];
        // addMessage(newMessage); // Commented out as ChatManager implementation is unknown
        return updatedChats;
      });
      setInput('');
    }
  };

  return (
    <div className="space-y-6 bg-transparent">
      <h2 className={`text-2xl font-semibold ${theme === 'light' ? 'text-[#333]' : 'text-white'}`}>Chat</h2>
      <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pb-20">
        {chats.length === 0 ? (
          <p className={`italic ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>Start a new conversation!</p>
        ) : (
          chats.map((msg) => (
            <div
              key={msg.id}
              className={`p-3 rounded-lg shadow-md max-w-[70%] ${
                msg.sender === 'user'
                  ? 'bg-[#00BCD4] text-[#0A0F23] ml-auto'
                  : theme === 'light'
                  ? 'bg-[#e0e0e0] text-[#333]'
                  : 'bg-[#FF8C00] text-[#0A0F23]'
              }`}
            >
              <p className="text-inherit">{msg.text}</p>
              <span className={`text-xs ${theme === 'light' ? 'text-gray-600' : 'text-black/70'}`}>
                {msg.timestamp}
              </span>
            </div>
          ))
        )}
      </div>
      <form
        onSubmit={handleSend}
        className={`fixed bottom-0 p-3 shadow-lg border-t transition-all duration-300 ${
          theme === 'light' ? 'bg-[#fff] border-[#e0e0e0]' : 'bg-[#1A2A44] border-[#0A0F23]'
        }`}
        style={{ left: sidebarOpen ? '75vw' : '0', right: '0' }}
      >
        <div className="flex space-x-2 w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={`flex-1 p-3 text-base border rounded-lg focus:ring-2 focus:ring-[#00BCD4] focus:border-[#00BCD4] transition-shadow touch-none ${
              theme === 'light' ? 'bg-[#fff] text-[#333] border-gray-300' : 'bg-[#0A0F23] text-white border-[#00BCD4]'
            }`}
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className={`p-3 text-base rounded-lg transition-colors ${
              theme === 'light'
                ? 'bg-[#00BCD4] text-[#0A0F23] hover:bg-[#FF8C00] hover:text-white'
                : 'bg-[#00BCD4] text-[#0A0F23] hover:bg-[#FF8C00] hover:text-white'
            }`}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Chat;