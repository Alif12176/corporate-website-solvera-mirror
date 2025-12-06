"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterCTA() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // SSR akan render kosong → aman

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-5 mt-5 md:mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold text-blue-700 mb-2">
            Siap Optimalkan Bisnis Anda?
          </h3>
          <p className="text-gray-600">
            Dapatkan wawasan, tren, dan berita terbaru dari Solvera.
          </p>
        </div>

        <div className="w-full md:w-auto">
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Alamat Email Anda"
              className="px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition transform hover:scale-105 active:scale-95 duration-200"
            >
              Bergabung
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-3 max-w-md">
            Dengan berlangganan, Anda menerima Kebijakan Privasi kami dan setuju
            untuk menerima pembaruan.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
