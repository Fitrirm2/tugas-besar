"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleRegister = async () => {
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) router.push("/login");
    else alert("Registration failed");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Buat Akun Baru</h1>

        <input
          type="text"
          placeholder="Nama Lengkap"
          className="text-gray-600 w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="text-gray-600 w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="text-gray-600 w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
        >
          Daftar
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          Sudah punya akun?{" "}
          <a href="/login" className="text-purple-600 hover:underline">
            Masuk
          </a>
        </p>
      </div>
    </div>
  );
}
