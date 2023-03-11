import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHistory, FaMoneyBill } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/search"><FaSearch /> Search History</Link></li>
        <li><Link to="/applied"><FaHistory /> Applied Scholarships</Link></li>
        <li><Link to="/financial-aid"><FaMoneyBill /> Financial Aid</Link></li>
        <li><Link to="/profile"><span role="img" aria-label="profile">&#x1F464;</span></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
