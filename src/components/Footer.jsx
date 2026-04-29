import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content mt-auto">

      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <Link
            href="/"
            className="text-3xl font-extrabold text-primary block mb-3"
          >
            LuxeTile.
          </Link>

          <p className="text-sm opacity-80 leading-relaxed">
            Premium Tile Gallery & Co. Elevate your space with curated
            aesthetic tile collections designed for modern living.
          </p>
        </div>

        <div>
          <h3 className="text-primary font-semibold mb-4">Contact</h3>

          <div className="space-y-2 text-sm opacity-80">
            <p>📍 Kuril, Dhaka, Bangladesh</p>

            <p><a href="mailto:support@luxetile.com" className="hover:text-primary">
              ✉ support@luxetile.com
            </a> 
            </p>

            <a href="tel:+8801234567890" className="hover:text-primary">
              📞 +880 1234 567890
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-primary font-semibold mb-4">Follow Us</h3>

          <p className="text-sm opacity-80 mb-4">
            Stay connected for latest designs & inspirations.
          </p>

          <div className="flex gap-5 text-2xl">

            <a
              href="https://facebook.com"
              className="hover:text-primary transition-transform hover:scale-110"
            >
              <FaFacebook />
            </a>

            <a
              href="https://instagram.com"
              className="hover:text-primary transition-transform hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com"
              className="hover:text-primary transition-transform hover:scale-110"
            >
              <FaTwitter />
            </a>

            <a
              href="https://linkedin.com"
              className="hover:text-primary transition-transform hover:scale-110"
            >
              <FaLinkedin />
            </a>

          </div>
        </div>

      </div>

      <div className="bg-base-300 text-center py-4 text-sm">
        © 2026 LuxeTile. All rights reserved.
      </div>

    </footer>
  );
}