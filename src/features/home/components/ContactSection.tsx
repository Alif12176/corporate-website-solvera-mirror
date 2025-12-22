"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="space-y-6">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="text-sm font-bold text-foreground"
            >
              Mitra Transformasi Digital Anda
            </motion.p>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-brand-primary"
            >
              Mari Bicara Strategi
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-foreground text-lg leading-relaxed"
            >
              Dapatkan sesi konsultasi tanpa biaya untuk memahami tantangan
              bisnis Anda dan menemukan peluang transformasi digital yang paling
              relevan.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full h-[300px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2922429559826!2d106.65258462485465!3d-6.225144893762919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbde36d33045%3A0x61eda0942090e2fd!2sThe%20Prominence%20Office%20Tower%20Alam%20Sutera!5e0!3m2!1sid!2sid!4v1764403869969!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0 }}
            className="flex flex-col items-center"
          >
            <Mail className="w-10 h-10 text-brand-primary mb-4" />
            <h3 className="text-xl font-bold text-brand-primary mb-2">Pertanyaan</h3>
            <p className="text-foreground/75 text-sm mb-2 px-4">
              Ada pertanyaan tentang solusi atau layanan kami? Tim dukungan
              pelanggan kami siap membantu Anda.
            </p>
            <a
              href="mailto:info@solvera.id"
              className="font-semibold text-foreground border-b border-foreground hover:text-brand-primary hover:border-brand-primary transition"
            >
              info@solvera.id
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <Phone className="w-10 h-10 text-brand-primary mb-4" />
            <h3 className="text-xl font-bold text-brand-primary mb-2">Dukungan</h3>
            <p className="text-foreground/75 text-sm mb-2 px-4">
              Butuh bantuan teknis atau panduan penggunaan produk? Hubungi tim
              dukungan teknis kami sekarang.
            </p>
            <a
              href="tel:+6281390009640"
              className="font-semibold text-foreground border-b border-foreground hover:text-brand-primary hover:border-brand-primary transition"
            >
              +62 813-9000-9640
            </a>
          </motion.div>

          {/* Address */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }} // Delay 0.4s
            className="flex flex-col items-center"
          >
            <MapPin className="w-10 h-10 text-brand-primary mb-4" />
            <h3 className="text-xl font-bold text-brand-primary mb-2">
              Kunjungi Kami
            </h3>
            <p className="text-foreground/75 text-sm mb-2 px-4">
              Ingin bertemu langsung dengan tim kami? Kunjungi kantor kami di
              bawah ini.
            </p>
            <p className="text-xs text-foreground font-medium max-w-[250px] underline">
              Prominence Office Tower Level 28 Unit C, Jl. Jalur Sutera Barat
              No. 15, Kota Tangerang, Banten - 15143.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
