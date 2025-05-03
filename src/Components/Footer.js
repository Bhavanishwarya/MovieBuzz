import "../ui/Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-social">
        <a href="https://github.com/Bhavanishwarya" className="social-link">
          <FaGithub />
        </a>
        <a href="#" className="social-link">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/bhavanishwarya-y-1a3991272/" className="social-link">
          <FaLinkedinIn />
        </a>
      </div>
      <p className="footer-text">&copy; 2024 MovieBuzz. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
