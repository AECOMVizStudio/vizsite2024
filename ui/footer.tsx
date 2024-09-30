import Link from 'next/link'

const Footer = () => {
    return (
      <footer className="bg-black text-white bg-opacity-90 py-6 ">
       
          <ul className="flex flex-col justify-center space-y-2 items-center md:flex-row md:space-x-6 md:space-y-0">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/portfolio">Showcase</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="https://aecomvis2023.herokuapp.com/portfolio" target='_blank'>Full Portfolio</Link>
            </li>
          </ul>
       
      </footer>
    );
  };
  
  export default Footer;