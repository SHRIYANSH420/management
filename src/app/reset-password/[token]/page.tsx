"use client";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

export default function ResetPage({ params,
 }: {
     params: { token: string };
 }) {
  const searchParam = useSearchParams();
  const [authState, setAuthState] = useState({
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();
  // const session = useSession();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);

  const handleReset = async (e: any) => {
    e.preventDefault();

    const password = authState.password;
    const email = params.token;
    const signature = searchParam.get("signature");


    console.log(password,email,signature)

    try {
      const res = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            signature,
          password,
        }),
      });
      if (res.status === 400) {
        setError("Url is invalid");
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
            <h1 className="text-center text-2xl font-bold mb-6">
              Reset-Password
            </h1>
            <form onSubmit={handleReset}>
              <div className="mb-4">
                <input
                  placeholder="Password"
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  onChange={(e) =>
                    setAuthState({ ...authState, password: e.target.value })
                  }
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
          </div>
        </div>
      </>
    )
  );
}
