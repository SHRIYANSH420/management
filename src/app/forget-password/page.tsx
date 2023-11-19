"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const ForgetPage: React.FC = () => {
  const [Email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  // const session = useSession();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email:string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  }

  const handleForget = async (e: any) => {
    e.preventDefault();

    const email = e.target[0].value;

    if(!isValidEmail(email)) {
        setError("Email is invalid");
        return 
    }

    try {
        const res = await fetch("/api/forget-password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            
          }),
        });
        if (res.status === 400) {
          setError("User of this email not registered");
        }
        if (res.status === 200) {
          setError("");
          router.push("/login");
        }
      } catch (error) {
        setError("Error, try again");
        console.log(error);
      }
};

  if (sessionStatus === "loading") {
    return <div className="spinner-border text-blue-500"></div>;
  }


  return (
    sessionStatus !== "authenticated" && (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full p-8 bg-white shadow-md rounded-md">
            <h1 className="text-center text-2xl font-bold mb-6">Forget-Password</h1>
            <form onSubmit={handleForget}>
              <div className="mb-4">
                
                <input
                  type="email"
                  className="mt-6 w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
        {error && <p className=" text-red-500 ">{error}</p>}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
            <p className="mt-2">
              Login {" "}
              <Link href="/login" legacyBehavior>
                <a className="hover:text-blue-500">here</a>
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  );
};

export default ForgetPage;
