import React from 'react';
import Link from 'next/link';


const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <div className="flex items-center">
        {/* Left Side: Text Logo */}
        <h1 className="text-xl font-semibold text-white">Todo App</h1>
      </div>
      <div>

      {/* Right Side: Admin Button */}
      
      <li>
     <Link href="/adminpanel" legacyBehavior>
     <a className="bg-white text-black px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white">
        Admin Panel
    </a>
  </Link>
</li>

    </div>
    </header>
  );
};

export default Header;
