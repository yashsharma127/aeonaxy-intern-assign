'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BriefcaseBusiness } from 'lucide-react';

const Navbar = ({ profileImage }:any) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="bg-white border-b">
      <div className={`fixed inset-0 bg-gray-50 z-50 w-64 overflow-y-auto ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-600">Sidebar</h2>
          <ul className="mt-4">
            <li className="mb-2">
              <Link href="/">
                <button className="text-gray-600 hover:text-gray-400" onClick={closeSidebar}>
                  Inspiration
                </button>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/">
                <button className="text-gray-600 hover:text-gray-400" onClick={closeSidebar}>
                  Find Work
                </button>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/">
                <button className="text-gray-600 hover:text-gray-400" onClick={closeSidebar}>
                  Learn Design
                </button>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/">
                <button className="text-gray-600 hover:text-gray-400" onClick={closeSidebar}>
                  Go Pro
                </button>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/">
                <button className="text-gray-600 hover:text-gray-400" onClick={closeSidebar}>
                  Hire Designers
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center">
                <Image src="./dlogob.png" alt="Logo" width={100} height={100} className="rounded-lg" />
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden lg:flex space-x-6">
              <Link href="/">
                <button className="text-gray-600 hover:text-gray-400 p-2">Inspiration</button>
              </Link>
              <Link href="/">
                <button className="text-gray-600 hover:text-gray-400 p-2">Find Work</button>
              </Link>
              <Link href="/">
                <button className="text-gray-600 hover:text-gray-400 p-2">Learn Design</button>
              </Link>
              <Link href="/">
                <button className="text-gray-600 hover:text-gray-400 p-2">Go Pro</button>
              </Link>
              <Link href="/">
                <button className="text-gray-600 hover:text-gray-400 p-2">Hire Designers</button>
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex flex justify-end">
              <input
                type="text"
                placeholder="@ Search"
                className=" bg-gray-100 w-1/2 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <Link href="/">
              <BriefcaseBusiness color="gray" size={20} />
            </Link>

            <div>
              {/* Use profileImage prop here dynamically */}
              <Image src={profileImage} alt="Profile" width={40} height={40} className="rounded-full" />
            </div>

            <div className="hidden md:block">
              <button className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded-md">
                Upload
              </button>
            </div>

            <div className="lg:hidden">
              <button className="text-gray-600 focus:outline-none" onClick={toggleSidebar}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isSidebarOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
