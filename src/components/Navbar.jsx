"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  
  const isLoggedIn = false; 

  const navLinks = (
    <>
      <li>
        <Link href="/" className={pathname === "/" ? "active font-bold text-primary" : ""}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/all-tiles" className={pathname === "/all-tiles" ? "active font-bold text-primary" : ""}>
          All Tiles
        </Link>
      </li>

        <li>
          <Link href="/my-profile" className={pathname === "/my-profile" ? "active font-bold text-primary" : ""}>
            My Profile
          </Link>
        </li>
      
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-4 lg:px-10">
      
      {/* Left: Website Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-2xl font-extrabold text-primary tracking-wide">
          LuxeTile<span className="text-base-content">.</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 text-base">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end">
        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            <Link href="/my-profile" className="avatar hover:opacity-80 transition-opacity">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Avatar" />
              </div>
            </Link>
            <button className="btn btn-error btn-sm hidden sm:flex">Logout</button>
          </div>
        ) : (
          <Link href="/login" className="btn btn-primary px-8">Login</Link>
        )}
      </div>
      
    </div>
  );
}