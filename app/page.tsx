import React from 'react';
import ContactForm from './components/ContactForm';
import Profile from './components/Profile';
import Layout from './layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="bg-gray-800 backdrop-opacity-25 min-h-screen text-white">
        <div className="container mx-auto p-8">
          <Profile />
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
