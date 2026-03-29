import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { memo } from "react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Our Client", path: "/ClientSection" },
  { name: "Contact Us", path: "/contact" },
];

const Footer = memo(() => {
  return (
    <footer className="bg-linear-to-t from-black/70 via-primary-light/30 to-white text-black">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* COMPANY INFO */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="src/assets/logo1.png"
                alt="Stratviz Solution Logo"
                className="w-34 h-21"
                width={100}
                height={100}
                loading="lazy"
              />
            </Link>

            <p className="text-[16px] text-black">
              Strategic Digital Excellence. Providing ethical, professional, and
              advanced IT solutions to empower modern businesses.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-[16px] text-black">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-primary transition">
                    {link.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

            <div className="flex gap-2 md:gap-4 items-center">
              <a
                href="https://www.facebook.com/profile.php?id=61585329104927"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-primary hover:text-white transition shadow-sm hover:shadow-orange"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/stratviz_solutions2026/"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-primary hover:text-white transition shadow-sm hover:shadow-orange"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/company/stratviz-solutions/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-primary hover:text-white transition shadow-sm hover:shadow-orange"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-primary hover:text-white transition shadow-sm hover:shadow-orange"
              >
                <FaYoutube />
              </a>
              {/* LOGIN BUTTON */}
              <Link
                to="/admin/login"
                className="ml-4 px-4 py-2 rounded-lg text-white bg-primary hover:bg-primary-dark transition-all duration-200 font-medium shadow-orange hover:shadow-orange-lg"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-[16px] text-gray-800">
          © {new Date().getFullYear()} Developed & Maintained by{" "}
          <span className="font-bold text-primary-dark">Stratviz Solution</span>
        </div>
      </div>
    </footer>
  );
});

export default Footer;

