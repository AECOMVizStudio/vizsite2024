import Link from 'next/link'

const Footer = () => {
    return (
      <footer className="bg-black text-white bg-opacity-90 py-6">
        <div className="container mx-auto flex justify-center">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="https://aecomvis2023.herokuapp.com/portfolio" target='_blank'>Legacy Mode</Link>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;