import Link from 'next/link';

const Header = () => {
  return (
    <header className="p-4 bg-white shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">AECOM Viz Studio</h1>
      <nav>
        <ul className="flex space-x-8">
          <li><Link href="/portfolio" className="text-gray-700">Portfolio</Link></li>
          <li><Link href="/about" className="text-gray-700">About Us</Link></li>
          <li><Link href="/featured" className="text-gray-700">What's New</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;