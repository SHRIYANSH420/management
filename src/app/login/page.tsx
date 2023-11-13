"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Perform client-side validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    // Perform authentication logic (e.g., API call) here
    // For simplicity, this example assumes successful login
    console.log('Authentication successful!');

    // Reset form fields and error message
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-8 bg-white shadow-md rounded-md">
          <h1 className="text-center text-2xl font-bold mb-6">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p>
              <Link href="/" legacyBehavior>
                <a className=" hover:text-blue-500">
              Forget Password?
              </a>
              </Link>
            </p>
            {error && <p className=" text-red-500 ">{error}</p>}
            <button
              type="submit"
              className= " mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
