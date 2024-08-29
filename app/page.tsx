import React from 'react';
import ContactForm from './components/ContactForm';
import Card from './components/Card';
import Profile from './components/Profile';
import Layout from './layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="bg-gray-800 backdrop-opacity-25 min-h-screen text-white">
        <div className="container mx-auto p-8">
          {/* Cards component here */}
          <Card size='m' title='Welcome' subtitle='here me ali' onclick={()=>{console.log("here XXX")}} icon={"✅"} />
          <Card size='s' title='aaaa' subtitle='here me ali' onclick={()=>{console.log("here XXX")}} icon={"🎓"} />
          <Card size='xl' title='John' subtitle='here me ali' onclick={()=>{console.log("here XXX")}} icon={"😍"} />
          <Card size='s' title='Welcome' subtitle='here me ali' onclick={()=>{console.log("here XXX")}} icon={"😙"} />
          {/* Cards component here */}
          {/* <Profile />
          <ContactForm /> */}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
