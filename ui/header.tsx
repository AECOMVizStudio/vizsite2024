import Link from 'next/link';

const links = [
  { name: 'Home', href: '/'},
  { name: 'Portfolio', href: '/portfolio'},
  { name: 'About Us', href: '/about'},
  { name: "What's New", href: '/featured'},
]

const Header = () => {
  return (
    <header className="p-4 bg-white shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">AECOM Viz Studio</h1>
      <nav>
        <ul className="flex space-x-8">
          {links.map((link) => {
            return (
              <Link key={link.name}
              href={link.href}
              className='text-gray-700'
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