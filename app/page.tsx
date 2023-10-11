import React from 'react';
import ContactForm from './components/ContactForm';
import Profile from './components/Profile';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-800 min-h-screen text-white">
      <div className="container mx-auto p-8">
        <Profile />
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
