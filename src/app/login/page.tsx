"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";


const LoginPage: React.FC = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if(session?.status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [session, router])


  const handleLogin = async (e: any) => {
    e.preventDefault();

    // Perform client-side validation
    if (!Email || !Password) {
      setError("Please enter both email and password");
      return;
    }

    const email = e.target[0].value;
    const password = e.target[1].value;


    const res = await signIn("credentials", {
      redirect: false,
      email,
      password
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/dashboard");
    } else {
      setError("");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-8 bg-white shadow-md rounded-md">
          <h1 className="text-center text-2xl font-bold mb-6">LOGIN</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                required
              />
            </div>
            <p>
              <Link href="/" legacyBehavior>
                <a className=" hover:text-blue-500">Forget Password?</a>
              </Link>
            </p>
            {error && <p className=" text-red-500 ">{error}</p>}
            <button
              type="submit"
              className=" mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <button
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            onClick={() => {
              signIn("github");
            }}
          >
            Sign In with Github
          </button>
          <p className="mt-2">
            Need an account?{" "}
            <Link href="/signup" legacyBehavior>
              <a className="hover:text-blue-500">here</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
