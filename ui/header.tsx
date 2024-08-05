'use client'
import Link from 'next/link';
import { useState, useEffect} from 'react'
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/'},
  { name: 'Portfolio', href: '/portfolio'},
  { name: 'About Us', href: '/about'},
  { name: "What's New", href: '/featured'},
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname()

  useEffect (() => {
    

      const handleScroll = () => {
        
        if(window.scrollY > 0) {
          setScrolled(true);
        }
        else {
          setScrolled(false)
        }
      }
    
      if (pathname == '/'){
        window.addEventListener('scroll', handleScroll)
        handleScroll()
      } else {
        setScrolled(true)
      }
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }

  }, [pathname])

  return (
    <header className={`fixed w-full z-20 p-4 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-90' : 'bg-transparent'} flex justify-between items-center`}>
      <h1 className="text-xl font-bold text-gray-200">AECOM Viz Studio</h1>
      <nav>
        <ul className="flex space-x-8">
          {links.map((link) => {
            return (
              <Link key={link.name}
              href={link.href}
              className='text-gray-200 uppercase'
              >
                <p className='hidden md:block'>{link.name}</p>
              </Link>
            )
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;