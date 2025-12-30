"use client";

import { useState } from "react";

interface ApiResponse {
  success: boolean;
  message?: string;
  exists?: boolean;
  status?: 'active' | 'inactive';
}

export const useNewsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error" | "info">("idle");
  const [message, setMessage] = useState("");

  const subscribe = async () => {
    // Validasi email sederhana
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus("error");
      setMessage("Mohon masukkan alamat email yang valid.");
      return;
    }

    setIsLoading(true);
    setStatus("idle");
    setMessage("");

    try {
      const BASE_URL = "https://form-solvera.vercel.app/api"; 
      
      const checkPayload = new URLSearchParams();
      checkPayload.append("email", email);

      const checkResponse = await fetch(`${BASE_URL}/check_newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: checkPayload,
      });

      const checkData: ApiResponse = await checkResponse.json();

      if (checkData.success && checkData.exists && checkData.status === 'active') {
        setStatus("info");
        setMessage("Email ini sudah terdaftar di newsletter kami.");
        setIsLoading(false);
        return; 
      }

      const submitPayload = new URLSearchParams();
      submitPayload.append("email", email);
      submitPayload.append("force_update", "true"); 

      const submitResponse = await fetch(`${BASE_URL}/submit_newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: submitPayload,
      });

      const submitData: ApiResponse = await submitResponse.json();

      if (submitResponse.ok && submitData.success) {
        setStatus("success");
        setMessage(submitData.message || "Terima kasih! Anda telah berhasil berlangganan.");
        setEmail("");
      } else {
        throw new Error(submitData.message || "Gagal mendaftarkan email.");
      }

    } catch (error: unknown) {
      console.error("Newsletter Error:", error);
      setStatus("error");
      
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("Terjadi kesalahan koneksi. Silakan coba lagi.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    isLoading,
    status,
    message,
    subscribe
  };
};