"use client";

import { motion } from "framer-motion";

const CLIENTS_DATA = [
  {
    id: 1,
    name: "TechSinergi",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 001.738 10.03a.75.75 0 01-.232-1.337A60.653 60.653 0 0111.7 2.805z" />
        <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 0110.94 15.473a.75.75 0 012.12 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Global Data",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 1.68-9.75 3.75s4.365 3.75 9.75 3.75 9.75-1.68 9.75-3.75S17.385 2.25 12 2.25zM2.25 12c0 2.07 4.365 3.75 9.75 3.75s9.75-1.68 9.75-3.75V9.75c0 2.07-4.365 3.75-9.75 3.75S2.25 11.82 2.25 9.75V12zm0 6c0 2.07 4.365 3.75 9.75 3.75s9.75-1.68 9.75-3.75v-2.25c0 2.07-4.365 3.75-9.75 3.75S2.25 17.82 2.25 15.75V18z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Nusantara Net",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path
          fillRule="evenodd"
          d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 4,
    name: "FutureWave",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a4.5 4.5 0 01-4.5-4.5H5.25a.75.75 0 010-1.5H7.5a4.5 4.5 0 014.5 4.5z" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Berkah Digital",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path
          fillRule="evenodd"
          d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Apex Labs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path
          fillRule="evenodd"
          d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436h.001c-3.7 2.881-8.2 5.264-13.254 5.264a.75.75 0 01-.75-.75c0-5.056 2.383-9.555 6.084-12.436zM4.663 18.557c3.936-2.52 7.613-4.493 10.78-5.882a16.6 16.6 0 00-5.882-10.78c-2.52 3.936-4.493 7.613-5.882 10.78a16.604 16.604 0 0010.78 5.882z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function Clients() {
  const fadeInAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-blue-700 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={fadeInAnimation}
        >
          Dipercaya oleh Perusahaan Terdepan di Indonesia
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENTS_DATA.map((client, index) => (
            <motion.div
              key={client.id}
              className="bg-blue-50 rounded-lg py-8 flex items-center justify-center hover:bg-blue-100 transition-colors duration-300 cursor-default"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              // Staggered Delay
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              variants={fadeInAnimation}
            >
              <div className="flex items-center gap-4 text-blue-800">
                {/* ICON */}
                <div className="text-blue-700">{client.icon}</div>

                {/* NAMA PERUSAHAAN (Font tebal & warna biru tua) */}
                <span className="text-xl font-bold tracking-tight">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
