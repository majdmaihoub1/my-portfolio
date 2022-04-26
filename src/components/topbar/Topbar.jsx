import React from 'react';
import './topbar.scss';
import { Person, Mail } from '@material-ui/icons';

const TopBar = ({ menuOpen, setMenuOpen }) => (
  <div className={'topbar ' + (menuOpen && 'active')}>
    <div className='wrapper'>
      <div className='left'>
        <a href='#' className='logo'>
          majd.m
        </a>
        <div className='item-container'>
          <Person className='icon' />
          <span>+963 995 908 740</span>
        </div>
        <div className='item-container'>
          <Mail className='icon' />
          <span>majd.maihoub94@gmail.com</span>
        </div>
      </div>

      <div className='right'>
        <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
        </div>
      </div>
    </div>
  </div>
);

export default TopBar;
