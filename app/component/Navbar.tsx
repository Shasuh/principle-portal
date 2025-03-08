'use client'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-lg text-black flex justify-between">
      <h1 className="text-xl font-bold">My App</h1>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
