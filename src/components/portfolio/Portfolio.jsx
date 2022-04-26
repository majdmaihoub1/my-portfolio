import React, { useEffect, useState } from 'react';
import { PortfolioList } from '../portfolio-list/PortfolioList';
import './portfolio.scss';
import { featured, WebApp, UxDesign } from '../../data';

export const Portfolio = () => {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);
  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'webapp',
      title: 'Web App',
    },
    {
      id: 'uxdesign',
      title: 'UX Design',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featured);
        break;

      case 'webapp':
        setData(WebApp);
        break;

      case 'uxdesign':
        setData(UxDesign);
        break;
      default:
        setData(featured);
    }
  }, [selected]);
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className='container'>
        {data.map((item) => (
          <div className='item' key={item.id}>
            <img src={item.img} alt='' />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
