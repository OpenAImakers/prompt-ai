let chats = [];

export function getChats() {
  return chats;
}

export function clearChats() {
  chats = [];
}

export function addMessage(message) {
  chats.push(message);
}