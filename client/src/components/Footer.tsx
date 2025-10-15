const Footer = () => {
  return (
    <footer className="py-8 text-center text-white bg-gray-900">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="px-4 hover:text-brand">
            GitHub
          </a>
          <a href="#" className="px-4 hover:text-brand">
            LinkedIn
          </a>
          <a href="#" className="px-4 hover:text-brand">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
