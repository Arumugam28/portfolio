import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            Port<span className="text-gradient">folio.</span>
          </div>
          <p className="footer-copyright">
            &copy; {currentYear} Arumugam B. All rights reserved. Built with React & Vite.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
