import Link from 'next/link'

const Footer = () => {
    return (
      <footer className="bg-gray-200 py-6">
        <div className="container mx-auto flex justify-center">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/featured">Featured</Link>
            </li>
            <li>
              <Link href="/legacy">Legacy Mode</Link>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;