// import React from 'react'

// const Navbar = () => {
//     return (
//         <nav className="flex items-center justify-between px-6 py-5 border-b border-gray-700">
//           <div className="text-xl font-bold">Sarvesh Gupta</div>
//           <ul className="flex gap-6">
//             <li>About Me</li>
//             {/* <li>Services</li> */}
//             <li>Projects</li>
//             <li>Blog</li>
//             <li>Contact Us</li>
//           </ul>
//         </nav>
//       );
// }

// export default Navbar



"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="relative flex items-center justify-between px-6 py-5 border-b border-gray-700">
      <div className="text-xl font-bold">Sarvesh Gupta</div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6">
        <li className="cursor-pointer hover:text-gray-300">About Me</li>
        <li className="cursor-pointer hover:text-gray-300">Projects</li>
        <li className="cursor-pointer hover:text-gray-300">
          <a href="https://hashnode.com/@sarveshgupta" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </li>
        <li className="cursor-pointer hover:text-gray-300">Contact Us</li>
      </ul>

      {/* Mobile Navigation Toggle */}
      <button className="md:hidden z-20" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 z-10 border-b border-gray-700">
          <ul className="flex flex-col py-4">
            <li className="px-6 py-2 cursor-pointer hover:bg-gray-800">About Me</li>
            <li className="px-6 py-2 cursor-pointer hover:bg-gray-800">Projects</li>
            <li className="px-6 py-2 cursor-pointer hover:bg-gray-800">
              <a href="https://hashnode.com/@sarveshgupta" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
            </li>
            <li className="px-6 py-2 cursor-pointer hover:bg-gray-800">Contact Us</li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
