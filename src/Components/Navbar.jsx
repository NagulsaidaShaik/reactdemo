import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../Context/Cartcontext';
import { useAuth } from '../Pages/AuthContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const { setIsAuthenticated } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.toLowerCase() === 'mobiles') {
      navigate('/mobiles');
      setSearchResult('');
    } else if (searchTerm.toLowerCase() === 'computers') {
      navigate('/computers');
      setSearchResult('');
    } else {
      setSearchResult('No item found');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/signin');
  };
  const handleLogin= () => {
    setIsAuthenticated(false);
    navigate('/userform');
  };

  return (
    <>
      <div className="navSection">
        <div className="title">
          <Link to='/e-mart'>
            <h1>E-mart</h1>
          </Link>
        </div>
        <div className="search">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
          {searchResult && <div className="searchResult">{searchResult}</div>}
        </div>
       
        <Link to='/cart'>
          <div className="cart"> Cart
            <span>{cartItems.length}</span>
          </div>
        </Link>
        <Link to='/my-orders'>
          <div className='myorders'>My Orders</div>
        </Link>
        <Link to='/register'  classname='hidden-link'>
          <div className='Register' onClick={handleLogin}>LOGIN</div>
        </Link>
        <div className="user details" onClick={handleLogout}>
          LOGOUT
        </div>
     
      </div>
      
      {location.pathname !== '/register' && (
        <div className="submenu">
          <ul>
            <Link to='/mobiles' className='hidden-link'>
              <li>Mobiles</li>
            </Link>
            <Link to='/computers' className='hidden-link'>
              <li>Computers</li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
