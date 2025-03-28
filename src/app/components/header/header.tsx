import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <nav className="flex space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/pricing">Plans & Pricing</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
      <div className="flex space-x-4">
        <button className="bg-gray-700 px-4 py-2 rounded">Sign Up</button>
        <button className="bg-gray-700 px-4 py-2 rounded">Login</button>
      </div>
    </header>
  );
}