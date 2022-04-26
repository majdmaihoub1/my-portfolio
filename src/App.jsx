import React, { useState } from 'react';
import { Contact } from './components/contact/Contact';
import { Intro } from './components/intro/Intro';
import { Portfolio } from './components/portfolio/Portfolio';
import { Testom } from './components/testimonials/Testimonials';
import TopBar from './components/topbar/Topbar';
import { Works } from './components/works/Works';
import './App.scss';
import { Menu } from './components/menu/Menu';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='app'>
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='sections'>
        <Intro />
        <Portfolio />
        <Works />
        <Testom />
        <Contact />
      </div>
    </div>
  );
}

export default App;
