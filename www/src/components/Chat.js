import { useState } from 'react';

// Receive sidebarOpen as a prop
function Chat({ chats, setChats, sidebarOpen }) {
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
      setChats(prevChats => {
        const updatedChats = [...prevChats, newMessage];
        // Ensure you have a working addMessage function from ChatManager
        // If not, you may need to implement this logic or remove the call
        // addMessage(newMessage); 
        return updatedChats;
      });
      setInput('');
    }
  };

  return (
    <div className="space-y-6 bg-transparent">
      <h2 className="text-3xl font-semibold text-white">Chat</h2>
      <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pb-20">
        {chats.length === 0 ? (
          <p className="text-gray-400 italic">Start a new conversation!</p>
        ) : (
          chats.map(msg => (
            <div
              key={msg.id}
              className={`p-3 rounded-lg shadow-md max-w-[70%] ${
                msg.sender === 'user' ? 'bg-[#00BCD4] text-[#0A0F23] ml-auto' : 'bg-[#FF8C00] text-[#0A0F23]'
              }`}
            >
              <p cla  ssName="text-inherit">{msg.text}</p>
              <span className="text-xs text-black/70">{msg.timestamp}</span>
            </div>
          ))
        )}
      </div>
      {/* Conditionally apply styles based on sidebarOpen */}
      <form
        onSubmit={handleSend}
        className="fixed bottom-0 p-4 bg-[#1A2A44] shadow-lg border-t border-[#0A0F23] transition-all duration-300"
        style={{ left: sidebarOpen ? '256px' : '0', right: '0' }}
      >
        <div className="flex space-x-2 w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border border-[#00BCD4] rounded-lg focus:ring-2 focus:ring-[#00BCD4] focus:border-[#00BCD4] transition-shadow bg-[#0A0F23] text-white"
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="bg-[#00BCD4] text-[#0A0F23] p-2 rounded-lg hover:bg-[#FF8C00] hover:text-white transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Chat;