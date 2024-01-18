import React from 'react';

const HomeNavbar = () => {
    return (
      <div className="container mx-auto mb-5">
        <div className='flex gap-7'>
          <h3>Logo</h3>
          <div>
            <ul className="flex gap-2">
              <li>Home</li>
              <li>About</li>
              <li>Blogs</li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default HomeNavbar;