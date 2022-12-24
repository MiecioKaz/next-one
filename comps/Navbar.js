import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <h1>Mietek Site</h1>
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
    </nav>
  );
};

export default Navbar;
