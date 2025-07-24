export default function Hero() {

  return (
    <section className="relative h-screen text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="/public/hero.png" // Simpan di: public/assets/hero-gaming-setup.png
        alt="Gaming Setup"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay untuk gelapin gambar */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to <span className="text-purple-400">FcFrizzy</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6 drop-shadow">
          Content Creator | Gamer | Tournament 
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="https://bagibagi.co/frizzy"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-full font-semibold shadow-lg transition"
          >
            Mau Donk Di Saweerr 😁
          </a>
          <a
            href="#schedule"
            className="bg-transparent border border-white hover:bg-white hover:text-black py-2 px-6 rounded-full transition"
          >
            Lihat Jadwal Live
          </a>
        </div>
      </div>
    </section>
  );
}
