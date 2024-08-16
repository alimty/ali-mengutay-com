import React from 'react';
import ContactForm from './components/ContactForm';
import Cards from './components/Cards';
import Profile from './components/Profile';
import Layout from './layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="bg-gray-800 backdrop-opacity-25 min-h-screen text-white">
        <div className="container mx-auto p-8">
          {/* Cards component here */}
          <Cards/>
          {/* Cards component here */}
          {/* <Profile />
          <ContactForm /> */}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
