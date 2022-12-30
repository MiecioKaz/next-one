import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex justify-between bg-red-50 h-12 items-center border-solid border-2">
      <div>
        <h1 className="text-3xl font-bold ml-5">Mietek Site</h1>
      </div>

      <dev className="text-xl">
        <Link href="/" className="hover:text-red-600">
          Home
        </Link>

        <Link href="/login" className="hover:text-red-600 mx-4">
          Login
        </Link>

        <Link href="/signup" className="hover:text-red-600 mr-5">
          Signup
        </Link>
      </dev>
    </nav>
  );
};

export default Navbar;
