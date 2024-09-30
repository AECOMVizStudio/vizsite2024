'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Showcase', href: '/portfolio' },
  { name: 'About Us', href: '/about' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    if (pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    } else {
      setScrolled(true);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className= {`fixed w-full p-5 m-0 z-20 transition-all duration-300 flex justify-between items-center ${scrolled ? 'bg-black bg-opacity-90' : 'bg-transparent'}`}>
      <h1 className="text-xl font-bold text-gray-200">AECOM Viz Studio</h1>


      {/* Mobile menu button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-200 focus:outline-none">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Desktop menu */}
      <nav className="hidden md:flex space-x-8">
        {links.map((link) => (
          <Link key={link.name} href={link.href}>
            <p className="text-gray-200 uppercase cursor-pointer">{link.name}</p>
          </Link>
        ))}
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-90">
          <ul className="flex flex-col space-y-4 p-4">
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>
                  <p className="text-gray-200 uppercase cursor-pointer" onClick={toggleMenu}>
                    {link.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      
    </header>
  );
};

export default Header;
