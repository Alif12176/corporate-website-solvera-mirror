"use client";

export default function Hero() {
  return (
    <section className="relative h-screen flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 z-0 ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      <div className="relative z-20 max-w-4xl mx-auto text-center px-4 ">
        <h1 className="animate-in text-4xl md:text-5xl font-bold mb-6 text-white">
          Transformasi Digital Industri:
          <br />
          Sinergi ERP dan AI
        </h1>

        <p className="animate-in delay-100 text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Integrasikan seluruh operasi industri dalam ekosistem ERP yang
          diperkuat AI. Aktifkan optimasi cerdas untuk produktivitas tinggi dan
          daya saing global.
        </p>

        <div className="animate-in delay-200">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold hover:shadow-lg hover:-translate-y-1 transform duration-200">
            Konsultasi Sekarang (Merge)
          </button>
        </div>
      </div>
    </section>
  );
}
