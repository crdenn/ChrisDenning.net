import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 text-neutral-700">
  <nav>
    <ul className="flex">
      <li className="mr-6">
        <Link href="/">
          Home
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/about">
          About
        </Link>
      </li>
      <li>
        <Link href="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
</header>

  );
};

export default Header;
