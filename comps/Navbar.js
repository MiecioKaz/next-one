import Link from "next/link";

const Navbar = () => {
  return (
    // <nav className="bg-slate-50 h-8">
    //   <h1 className="text-2xl font-bold inline-block absolute top-0 left-0 ml-6">Mietek Site</h1>

    //   <dev className="flex justify-end h-8 items-center text-xl mr-5">
    //     <Link href="/" className="mr-3">
    //       Home
    //     </Link>

    //     <Link href="/login">Login</Link>

    //     <Link href="/signup" className="ml-3">
    //       Signup
    //     </Link>
    //   </dev>
    // </nav>

    <nav className="flex justify-between">
      <div>
        <h1>Mietek Site</h1>
      </div>

      <dev>
        <Link href="/">Home</Link>

        <Link href="/login">Login</Link>

        <Link href="/signup">Signup</Link>
      </dev>
    </nav>
  );
};

export default Navbar;
