import React from "react";
import Header from "@/app/components/header/header"
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex justify-center items-center flex-col text-center p-8">
        <h1 className="text-5xl font-bold text-blue-200 mt-[-20px]">AI PC Builder</h1>
        <p className="text-xl text-blue-200 mt-1">Computer Builds Tailored For You.</p>
        <div className="mt-6 flex space-x-4">
          <Link href="/get-started">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">Get Started</button>
          </Link>
          <Link href="/learn-more">
            <button className="bg-gray-500 text-white px-6 py-3 rounded-lg">Learn More</button>
          </Link>
        </div>
        <div className="mt-10 max-w-2xl text-center">
          <h2 className="text-2xl font-semibold">How It Works</h2>
          <p className="text-lg mt-2">Tell our AI your needs → Get a tailored PC build → Purchase or DIY</p>
          <img src="/images/ai-pc-builder-process.png" alt="AI PC Builder Process" className="mt-4 rounded-lg shadow-lg" />
        </div>
        {children}
      </main>
    </div>
  );
}
