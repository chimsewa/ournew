'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col bg-blue-50 p-6">
      {/* Header Section */}
      <div className="flex h-24 items-center justify-between rounded-lg bg-blue-800 px-6 text-white md:h-28">
        <div className="flex items-center gap-3">
          <Image
            src="/mzu-logo.png" // <- Replace with actual Mzuzu University logo path
            alt="Mzuzu University Logo"
            width={50}
            height={50}
          />
          <h1 className="text-2xl font-semibold">Mzuzu University</h1>
        </div>
        <h2 className="text-sm md:text-lg font-light">
          Online Application Portal
        </h2>
      </div>

      {/* Main Login Section */}
      <div className="mt-8 flex grow flex-col items-center justify-center md:flex-row">
        {/* Left Section (Form) */}
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg md:w-2/5">
          <h2
            className={`${lusitana.className} mb-6 text-center text-2xl font-bold text-blue-800`}
          >
            Applicant Login
          </h2>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
            >
              <span>Login</span>
              <ArrowRightIcon className="w-5" />
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{' '}
            <Link
              href="/register"
              className="font-medium text-blue-700 hover:underline"
            >
              Apply Now
            </Link>
          </p>
        </div>

        {/* Right Section (Image) */}
        <div className="mt-10 flex items-center justify-center md:mt-0 md:w-3/5">
          <Image
            src="/mzu-campus.jpg" // <- Replace with an image of the Mzuzu University campus
            width={900}
            height={600}
            alt="Mzuzu University Campus"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </main>
  );
}
