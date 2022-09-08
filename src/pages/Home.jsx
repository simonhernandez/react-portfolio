import React from 'react';
import { Hero, About, Skills, Portfolio, Contact } from '../components';

import { layout } from '../styles/style';


const Home = () => {
  return (
    <main className={`${layout.home}`}>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  )
}

export default Home