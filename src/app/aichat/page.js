'use client';

// TODO: Implement the api request. Need to buy credits first to test this.

// ChatComponent.js
import React, { useState } from 'react';
import { fetchAIResponse } from '@/app/utilities/apiService';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    // Add user's message to the chat history
    const newMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, newMessage]);

    setLoading(true);
    setError(null);

    try {
      const aiResponse = await fetchAIResponse(input);
      // Update chat with AI's response
      setMessages((prev) => [...prev, { sender: 'ai', text: aiResponse }]);
    } catch (err) {
      setError('Error fetching response. Please try again.');
    } finally {
      setLoading(false);
      setInput(''); // Clear input after sending
    }
  };

  return (
    <div>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="loading">AI is typing...</div>}
        {error && <div className="error">{error}</div>}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        placeholder="Type your message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatComponent;