"use client";
import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { useRouter } from "next/navigation";

const SignupPage: React.FC = () => {
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const rout = useRouter();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;

    if (newPassword.length >= 8) {
      if (/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
        if (/[A-Z]/.test(newPassword)) {
          setPassword(newPassword);

          setPasswordError(null);
        } else {
          setPasswordError(
            "Password must contain at least one uppercase letter"
          );
        }
      } else {
        setPasswordError(
          "Password must contain at least one special character"
        );
      }
    } else {
      setPasswordError("Password must be at least 8 characters long");
    }
  };

  const handleSignup = async (e: any) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 200) {
        setError("");
        rout.push("/login");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-#182237-50">
        <div className="max-w-md w-full p-8 bg-white shadow-md rounded-md">
          <h1 className="text-center text-2xl font-bold mb-6 text-black">
            SIGN UP
          </h1>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <input
                placeholder="Name"
                type="string"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                required
              />
            </div>
            <div className="mb-4">
              <input
                placeholder="Email"
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                required
              />
            </div>
            <div className="mb-4">
              <input
                placeholder="Password"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                minLength={8}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  handlePasswordChange(e);
                }}
                required
              />
              {passwordError && <p className="text-danger text-red-500">{passwordError}</p>}
            </div>
            <div className="mb-4">
              <input
                placeholder="Confirm Password"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-2 text-black">
            Already have an account?{" "}
            <Link href="/login" legacyBehavior>
              <a className="hover:text-red-500">Login here</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
