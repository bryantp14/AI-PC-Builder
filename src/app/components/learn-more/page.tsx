import React from "react";
import Header from "@/app/components/header/header";
import Link from "next/link";

export default function LearnMore() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center text-center p-8">
        <h1 className="text-4xl font-bold text-blue-200">Learn More About AI PC Builder</h1>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl">
          Our AI-powered PC Builder takes the guesswork out of custom PC configurations.
        </p>
        <div className="mt-6">
          <Link href="/get-started">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">Get Started</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
