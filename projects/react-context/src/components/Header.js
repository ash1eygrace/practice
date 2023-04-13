import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

import Nav from './Nav';

const Header = () => {
  const { accentColor } = useContext(ThemeContext);

  return (
    <div className="header" style={{ background: accentColor }}>
      <div className="bounds">
        <Link to="/">
          <h1 className="header--logo">MyApp</h1>
        </Link>
        <Nav/>
      </div>
    </div>
  );
};

export default Header;