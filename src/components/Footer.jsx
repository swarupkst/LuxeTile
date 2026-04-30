import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#244d3f] text-white mt-auto border-t border-white/10">
      
      <div className="container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand Section */}
        <div>
          <Link
            href="/"
            className="text-4xl font-extrabold tracking-tight text-white block mb-4"
          >
            LuxeTile.
          </Link>

          <p className="text-sm text-white/70 leading-relaxed max-w-sm">
            Premium Tile Gallery & Co. Elevate your interiors with elegant,
            modern, and timeless tile collections crafted for luxurious living.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-white">
            Contact
          </h3>

          <div className="space-y-3 text-sm text-white/70">
            <p>📍 Kuril, Dhaka, Bangladesh</p>

            <a
              href="mailto:support@luxetile.com"
              className="block hover:text-white transition duration-300"
            >
              ✉ support@luxetile.com
            </a>

            <a
              href="tel:+8801234567890"
              className="block hover:text-white transition duration-300"
            >
              📞 +880 1234 567890
            </a>
          </div>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-white">
            Follow Us
          </h3>

          <p className="text-sm text-white/70 mb-5">
            Get inspired with our latest tile trends and interior ideas.
          </p>

          <div className="flex items-center gap-4">

            <a
              href="https://facebook.com"
              target="_blank"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#244d3f] transition-all duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#244d3f] transition-all duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#244d3f] transition-all duration-300"
            >
              <FaTwitter />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#244d3f] transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">
        © 2026 LuxeTile. All rights reserved.
      </div>
    </footer>
  );
}