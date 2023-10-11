"use client"; // This is a client component
import React, { useState, useEffect } from 'react';
const TypingGreeting: React.FC = () => {
  const [text, setText] = useState('');
  const message = 'Hello, there...';

  useEffect(() => {
    let currentText = '';
    let index = 0;
    const timer = setInterval(() => {
      if (index < message.length) {
        currentText += message[index];
        setText(currentText);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    // Cleanup
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this useEffect runs once when the component mounts

  return (
    <h1 className="text-white text-4xl text-center rounded-lg shadow-md p-4">
      {text}
    </h1>
  );
};

export default TypingGreeting;
