import './portfolio-list.scss';

export const PortfolioList = ({ title, active, setSelected, id }) => (
  <li
    className={active ? 'portfolio-list active' : 'portfolio-list'}
    onClick={() => setSelected(id)}
  >
    {title}
  </li>
);
