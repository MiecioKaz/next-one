import Link from "next/link";
import Image from "next/image";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Navbar = () => {
  const { user, logout, isLoggedin } = useContext(AuthContext);

  const handleClick = (e) => {
    // e.preventDefault()
    logout();
  };

  if (typeof window !== "undefined") {
    const menu = document.querySelector("#menu");
  }

  const displayMenu = () => {
    menu.classList.toggle("hidden");
  };

  return (
    <>
      <nav className="sticky top-0 flex justify-between items-center border-solid border-2 h-20">
        <div className="flex items-center ml-5">
          <Image
            src="/images/mietek-avatar.png"
            alt="mietek-avatar"
            width={60}
            height={60}
            className="rounded-full p-1"
          />

          <h1 className="inline-block text-2xl md:text-3xl font-bold ml-5">
            Reading List
          </h1>
        </div>
        <dev className="md:flex">
          <dev className="text-2xl max-md:hidden">
            {user && (
              <span className="text-green-400 mr-10">{`Hello ${user.displayName}!`}</span>
            )}
            <Link
              href="/"
              className="hover:text-red-600"
            >
              Home
            </Link>

            {!isLoggedin && (
              <Link
                href="/login"
                className="hover:text-red-600 mx-4"
              >
                Login
              </Link>
            )}

            {!isLoggedin && (
              <Link
                href="/signup"
                className="hover:text-red-600 mr-5"
              >
                Signup
              </Link>
            )}

            {isLoggedin && (
              <Link
                onClick={handleClick}
                href="/login"
                className="hover:text-red-600 mx-5"
              >
                Logout
              </Link>
            )}
          </dev>
          <dev>
            <Image
              src="/images/menu-icon.png"
              width={40}
              height={40}
              className="mr-6 md:hidden hover:scale-125"
              onClick={displayMenu}
            />
          </dev>
        </dev>
      </nav>

      {/* under-nav */}
      <dev className="flex flex-row">
        <dev className="basis-3/4 pt-3 pl-5">
          {user && (
            <span className="text-green-400 text-2xl md:hidden">{`Hello ${user.displayName}!`}</span>
          )}
        </dev>
        <dev
          className="text-2xl ml-auto hidden md:hidden basis-1/4"
          id="menu"
        >
          <div>
            <Link
              href="/"
              className="hover:text-red-600"
            >
              Home
            </Link>
          </div>

          {!isLoggedin && (
            <div>
              <Link
                href="/login"
                className="hover:text-red-600"
              >
                Login
              </Link>
            </div>
          )}

          {!isLoggedin && (
            <div>
              <Link
                href="/signup"
                className="hover:text-red-600 mr-5"
              >
                Signup
              </Link>
            </div>
          )}

          {isLoggedin && (
            <div>
              <Link
                onClick={handleClick}
                href="/login"
                className="hover:text-red-600 mr-5"
              >
                Logout
              </Link>
            </div>
          )}
        </dev>
      </dev>
    </>
  );
};

export default Navbar;
