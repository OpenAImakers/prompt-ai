export function getChats() {
      const chats = localStorage.getItem('chats');
      return chats ? JSON.parse(chats) : [];
    }

    export function clearChats() {
      localStorage.removeItem('chats');
    }

    export function addMessage(message) {
      const chats = getChats();
      chats.push(message);
      localStorage.setItem('chats', JSON.stringify(chats));
    }