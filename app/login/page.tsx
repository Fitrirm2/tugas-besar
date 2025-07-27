"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!res?.error) {
      router.push("/dashboard");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white">
      {/* Left Form */}
      <div className="flex items-center justify-center p-10">
        <form onSubmit={handleLogin} className="w-full max-w-md space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">Selamat Datang Kembali</h1>
          <p className="text-sm text-gray-500">Hai-hai</p>

          <input
            type="email"
            placeholder="Email"
            className="text-gray-600 w-full p-3 border border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="text-gray-600 w-full p-3 border border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="flex justify-between items-center text-sm text-gray-600">
            <label>
              <input type="checkbox" className="mr-1" /> Ingat aku
            </label>
            <a href="#" className="text-purple-600 hover:underline">Lupa Password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Masuk
          </button>

          <p className="text-gray-600 text-center text-sm">
            Belum punya akun?{" "}
            <a href="/register" className="text-purple-600 hover:underline">Daftar Yuk!</a>
          </p>
        </form>
      </div>

      {/* Right Illustration */}
      <div className="hidden md:flex items-center justify-center bg-purple-100 p-8">
        <Image
          src="/illustration.png"
          alt="Login Illustration"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
    </div>
  );
}
