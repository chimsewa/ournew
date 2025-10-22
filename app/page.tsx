'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-blue-50 p-6">
      {/* Header */}
      <header className="flex h-24 items-center justify-between rounded-lg bg-blue-800 px-6 text-white md:h-28">
        <div className="flex items-center gap-3">
          <Image
            src="/mzu-logo.png"
            alt="Mzuzu University Logo"
            width={50}
            height={50}
          />
          <h1 className="text-2xl font-semibold">Mzuzu University</h1>
        </div>
        <h2 className="text-sm md:text-lg font-light">
          Online Application Portal
        </h2>
      </header>

      {/* Main Content */}
      <section className="mt-10 flex flex-col items-center justify-center gap-10 md:flex-row md:gap-16">
        {/* Left Section */}
        <div className="max-w-lg text-center md:text-left">
          <h2 className="mb-4 text-3xl font-bold text-blue-800">
            Welcome to Mzuzu University
          </h2>
          <p className="mb-6 text-gray-700 text-lg leading-relaxed">
            Apply online for your preferred programme and track your application
            easily through our portal. Join our community of learners and achieve
            academic excellence.
          </p>
          <div className="flex flex-col gap-3 md:flex-row md:gap-4">
            <Link
              href="/register"
              className="rounded-lg bg-blue-700 px-6 py-3 text-white font-semibold text-sm transition-colors hover:bg-blue-600"
            >
              Apply Now
            </Link>
            <Link
              href="/login"
              className="rounded-lg border border-blue-700 px-6 py-3 text-blue-700 font-semibold text-sm transition-colors hover:bg-blue-100"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Right Section (Campus Image) */}
        <div className="flex justify-center md:flex-1">
          <Image
            src="/mzu-campus.jpg"
            alt="Mzuzu University Campus"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>
    </main>
  );
}
