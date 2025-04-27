import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-5 border-b border-gray-700">
          <div className="text-xl font-bold">Sarvesh</div>
          <ul className="flex gap-6">
            <li>About Me</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      );
}

export default Navbar



