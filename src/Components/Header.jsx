import React from 'react';


const Header = () => {
    return (
        <header>
            <div className="logo">
                <h1>E-mart</h1>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </div>
          
        </header>
    );
};

export default Header;
