import { useState, memo } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";

const Navbar = memo(() => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  // Helper to close menu on link click
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Client", path: "/ClientSection" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed w-full bg-white shadow-sm z-50 top-0 h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" onClick={closeMenu} className="flex items-center">
            <img src={logo} alt="Stratviz Solution" className="w-32 sm:w-40" loading="lazy" />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex gap-8 font-semibold text-[17px] text-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setActiveLink(link.name)}
                className={`hover:text-primary transition-all duration-300 relative group ${activeLink === link.name ? "text-primary" : ""}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-accent transition-all duration-300 group-hover:w-full shadow-orange ${activeLink === link.name ? "w-full" : ""}`}></span>
              </Link>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-2xl text-gray-800 focus:outline-none hover:text-primary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU (Glassmorphism) */}
      <div
        className={`fixed inset-x-0 top-20 z-50 lg:hidden transition-all duration-300 ease-in-out ${menuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
      >
        <div className="mx-auto w-[92%] bg-white/90 backdrop-blur-2xl shadow-orange-lg rounded-2xl border border-white/20 overflow-hidden mt-2">
          <ul className="py-2 text-gray-900">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={closeMenu}
                  className="block px-8 py-5 hover:bg-primary/10 hover:text-primary font-bold transition-all border-b border-gray-50 last:border-none"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
});

export default Navbar;

