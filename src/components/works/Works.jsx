import React, { useState } from 'react';
import './works.scss';
import { Slider } from '../../data';
import { Slide } from '@material-ui/core';

export const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < Slide.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className='works' id='works'>
      <div
        className='slider'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {Slider.map((slide) => (
          <div className='container' key={slide.id}>
            <div className='item'>
              <div className='left'>
                <div className='left-container'>
                  <div className='img-container'>
                    <img src={slide.icon} alt='' />
                  </div>
                  <h2>{slide.title}</h2>
                  <p>{slide.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className='right'>
                <img src={slide.img} alt='' />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src='assets/arrow.png'
        className='arrow left'
        alt=''
        onClick={() => handleClick('left')}
      />
      <img
        src='assets/arrow.png'
        className='arrow right'
        alt=''
        onClick={() => handleClick('right')}
      />
    </div>
  );
};
