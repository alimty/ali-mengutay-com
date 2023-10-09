import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <button
          style={{
            fontSize: '30px',
            display: 'inline-block',
            cursor: 'pointer'
          }}
          onClick={toggleNav}
        >
          &#9776; {/* Unicode for hamburger icon */}
        </button>
      </div>

      <div style={{ display: isOpen ? 'block' : 'none' }}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/project">Project</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
