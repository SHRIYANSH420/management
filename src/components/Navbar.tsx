"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export const Navbar = () => {
  const { data: session }: any = useSession();
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Management</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {!session ? (
            <>
              <Link href="/login" className="mr-5 hover:text-gray-900">
                Login
              </Link>
              <Link href="/signup" className="mr-5 hover:text-gray-900">
                SignUp
              </Link>
              <Link href="/aboutus" className="mr-5 hover:text-gray-900">
                About Us
              </Link>
              <Link href="/contactus" className="mr-5 hover:text-gray-900">
                Contact Us
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard" className="mr-5 hover:text-gray-900">
                Dashboard
              </Link>
              {session.user?.email}
              <li>
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
