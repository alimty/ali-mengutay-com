"use client"; // This is a client component
import React from 'react';
import Image from 'next/image';
import TypingGreeting from './TypingGreeting';


const Profile: React.FC = () => {
  return (
    <div className="border rounded-lg p-4 mb-8 bg-gray-700 ">
      <Image
        src="/images/me-avatar.jpeg" 
        alt="Random Men Image"
        width={500}
        height={500}
      />
      <TypingGreeting />
      <div>
        <h1 className="text-2xl mb-4">Ali Mengütay...</h1>
        <p>This will be my personal website. Maybe we&apos;ll see 🤞.</p>
      </div>
    </div>
  );
};

export default Profile;
