import { NavLink } from 'react-router-dom';

import css from './Navbar.module.css';
import items from './items';

const Navbar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={css.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={css.menu}>{elements}</ul>;
};

export default Navbar;
