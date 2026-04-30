"use client";
import { authClient } from "@/lib/auth-client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const { data: session } = authClient.useSession()
  const user = session?.user

  //console.log(user, "user")

  const pathname = usePathname();

  const isLoggedIn = false;

  const navItemStyle = (path) =>
    pathname === path
      ? "text-white bg-[#244d3f] px-4 py-2 rounded-full font-semibold"
      : "text-gray-700 hover:text-[#244d3f] transition duration-300 px-4 py-2";

  const navLinks = (
    <>
      <li>
        <Link href="/" className={navItemStyle("/")}>
          Home
        </Link>
      </li>

      <li>
        <Link href="/all-tiles" className={navItemStyle("/all-tiles")}>
          All Tiles
        </Link>
      </li>

      <li>
        <Link href="/my-profile" className={navItemStyle("/my-profile")}>
          My Profile
        </Link>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200 shadow-sm">
      
      <div className="navbar  mx-auto px-4 lg:px-8 py-2">

        {/* Left */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-2xl"
            >
              <HiOutlineMenuAlt3 />
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 z-[100] p-4 shadow-xl bg-white rounded-2xl w-60 space-y-2"
            >
              {navLinks}
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-black tracking-tight"
          >
            <span className="text-[#244d3f]">Luxe</span>
            <span className="text-base-content">Tile</span>
          </Link>
        </div>

        {/* Center Nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 text-[15px] font-medium">
            {navLinks}
          </ul>
        </div>

        {/* Right */}
       <div className="navbar-end flex gap-2">

{user ? (
  <div className="avatar">
  <div className="w-10 rounded-full">
    <Link href="/my-profile">
    <img src={user.image} />
    </Link>
  </div>
</div>
) : ("")}
      
        
           {user ? ( <Link
              href="/login"
              className="btn bg-[#244d3f] hover:bg-[#1d4034] text-white border-none rounded-full px-8 shadow-md"
            onClick={async() => await authClient.signOut()}
>
              Logout
            </Link>) : (


            <Link
              href="/login"
              className="btn bg-[#244d3f] hover:bg-[#1d4034] text-white border-none rounded-full px-8 shadow-md"
            >
              Login
            </Link>
            )}
        </div>
      </div>
    </div>
  );
}