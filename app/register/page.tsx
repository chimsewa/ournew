'use client';

import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import { supabase } from '../lib/supabaseClient';

import bcrypt from 'bcryptjs';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    level: '',
    password: '',
    confirm_password: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    // Validate passwords
    if (formData.password !== formData.confirm_password) {
      setMessage('Passwords do not match!');
      return;
    }

    setLoading(true);

    try {
      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(formData.password, 10);

      const { data, error } = await supabase.from('applicants').insert([
        {
          fullname: formData.full_name,
          email: formData.email,
          phone: formData.phone,
          level: formData.level,
          password: hashedPassword,
        },
      ]);

      if (error) {
        setMessage('Error: ' + error.message);
      } else {
        setMessage('Registration successful! 🎉');
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          level: '',
          password: '',
          confirm_password: '',
        });
      }
    } catch (err) {
      console.error(err);
      setMessage('Unexpected error occurred.');
    }

    setLoading(false);
  };

  return (
    <main className="flex min-h-screen flex-col bg-blue-50 p-6">
      {/* Header */}
      <div className="flex h-24 items-center justify-between rounded-lg bg-blue-800 px-6 text-white md:h-28">
        <div className="flex items-center gap-3">
          <Image src="/mzu-logo.png" alt="Mzuzu University Logo" width={50} height={50} />
          <h1 className="text-2xl font-semibold">Mzuzu University</h1>
        </div>
        <h2 className="text-sm md:text-lg font-light">Online Application Portal</h2>
      </div>

      {/* Main Registration Section */}
      <div className="mt-8 flex grow flex-col items-center justify-center md:flex-row">
        {/* Form */}
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg md:w-2/5">
          <h2 className={`${lusitana.className} mb-6 text-center text-2xl font-bold text-blue-800`}>
            Applicant Registration
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Programme Level</label>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Select programme level</option>
                <option value="ODL">ODL</option>
                <option value="Masters">Masters</option>
                <option value="PhD">PhD</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                placeholder="Re-enter your password"
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
            >
              {loading ? 'Registering...' : 'Register'}
              <ArrowRightIcon className="w-5" />
            </button>

            {message && <p className="mt-3 text-center text-sm text-gray-700">{message}</p>}
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-blue-700 hover:underline">
              Login
            </Link>
          </p>
        </div>

        {/* Right Section Image */}
        <div className="mt-10 flex items-center justify-center md:mt-0 md:w-3/5">
          <Image
            src="/mzu-campus.jpg"
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
