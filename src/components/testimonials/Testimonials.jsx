import React from 'react';
import './testomnials.scss';
import { Testo } from '../../data';
export const Testom = () => (
  <div className='testmonials' id='testmonials'>
    <h1>Testimonials</h1>
    <div className='container'>
      {Testo.map((item) => (
        <div className={item.featured ? 'card featured' : 'card'} key={item.id}>
          <div className='top'>
            <img src='assets/right-arrow.png' className='left' alt='' />
            <img src={item.img} className='user' alt='' />
          </div>
          <div className='center'>{item.desc}</div>
          <div className='bottom'>
            <h3>{item.name}</h3>
            <h4>{item.title}</h4>
          </div>
        </div>
      ))}
    </div>
  </div>
);
