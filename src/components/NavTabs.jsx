import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs justify-content-end">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active text-primary' : 'nav-link text-dark'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active text-primary' : 'nav-link text-dark'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active text-primary' : 'nav-link text-dark'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active text-primary' : 'nav-link text-dark'}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;