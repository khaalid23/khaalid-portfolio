import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-gray-900 bg-opacity-80 backdrop-blur-md">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <h1 className="text-2xl font-bold text-white">My Portfolio</h1>
        <nav>
          <Link to="hero" smooth={true} duration={500} className="px-4 text-white cursor-pointer hover:text-brand">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="px-4 text-white cursor-pointer hover:text-brand">
            About
          </Link>
          <Link to="skills" smooth={true} duration={500} className="px-4 text-white cursor-pointer hover:text-brand">
            Skills
          </Link>
          <Link to="work" smooth={true} duration={500} className="px-4 text-white cursor-pointer hover:text-brand">
            Work
          </Link>
          <Link to="contact" smooth={true} duration={500} className="px-4 text-white cursor-pointer hover:text-brand">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
