import React, { useRef, useEffect } from 'react';
import './intro.scss';
import { ArrowDownward } from '@material-ui/icons';
import TypeAnimation from 'react-type-animation';

export const Intro = () => {
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='img-container'>
          <img src='assets/majd2.jpg' alt='' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There, I'm</h2>
          <h1>Majd Maihoub</h1>
          <h3>
            and I'm a{' '}
            <TypeAnimation
              cursor={true}
              sequence={[
                'Frontend Developer 🧑‍💻',
                2000,
                'ReactJs Fan 🎯',
                2000,
                'UX Geek 🤓',
                2000,
              ]}
              wrapper='span'
              repeat={Infinity}
              className='type'
            />
          </h3>
        </div>
        <a href='#portfolio'>
          <ArrowDownward className='arrow' style={{ fontSize: '70px' }} />
        </a>
      </div>
    </div>
  );
};
