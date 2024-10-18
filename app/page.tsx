import React from 'react';
import ContactForm from './components/ContactForm';
import Card from './components/Card';
import Profile from './components/Profile';
import Layout from './layout';

const Home: React.FC = () => {
  return (
    <Layout>

      <div className="grid grid-cols-4 gap-4">
        <Card size='m' title='Welcome' subtitle='here me ali' onclick={() => { console.log("here XXX") }} icon={"✅"} />
        <Card size='s' title='aaaa' subtitle='here me ali' onclick={() => { console.log("here XXX") }} icon={"🎓"} />
        <Card size='l' title='John' subtitle='here me ali' onclick={() => { console.log("here XXX") }} icon={"😍"} />
        <Card size='s' title='Welcome' subtitle='here me ali' onclick={() => { console.log("here XXX") }} icon={"😙"} />
      </div>

    </Layout>
  );
};

export default Home;
