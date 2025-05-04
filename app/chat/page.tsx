'use client';

import Message from '@/components/Message';
import { useState, useRef, useEffect } from 'react';

type MessageType = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
};

export default function ChatContainer() {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: '1',
      text: 'Hello! How can I help you today?',
      sender: 'bot',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: MessageType = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      });

      const data = await response.json();
      const botMessage: MessageType = {
        id: Date.now().toString(),
        text: data.reply,
        sender: 'bot',
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: MessageType = {
        id: Date.now().toString(),
        text: 'Sorry, something went wrong. Please try again.',
        sender: 'bot',
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden h-[70vh] flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <Message
            key={message.id}
            text={message.text}
            sender={message.sender}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="ml-2 p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-indigo-300 transition-colors"
          >
            <img src='/assets/send.svg' className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}