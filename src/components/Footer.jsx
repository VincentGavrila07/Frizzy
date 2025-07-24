import { FaTiktok, FaYoutube, FaDiscord, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-12 pb-8 px-4 border-t border-purple-700 relative">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white tracking-wide mb-2">🎮 FcFrizzy</h3>
          <p className="text-sm text-gray-500">Tempatnya FIFA Mobile & keseruan gaming lainnya!</p>
        </div>

        {/* Socials */}
        <div className="flex gap-6 text-2xl">
          <a href="https://www.tiktok.com/@fcfrizzy?_t=ZS-8yGwX2REsSe&_r=1" className="hover:text-purple-500 hover:scale-125 transition">
            <FaTiktok />
          </a>
          <a href="https://www.youtube.com/@FcFrizzy" className="hover:text-red-600 hover:scale-125 transition">
            <FaYoutube />
          </a>
          <a href="https://discord.gg/6TKaeQrS6Q" className="hover:text-indigo-500 hover:scale-125 transition">
            <FaDiscord />
          </a>
          {/* <a href="#" className="hover:text-pink-500 hover:scale-125 transition">
            <FaInstagram />
          </a> */}
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-sm text-gray-600 text-center">
        © 2025 <span className="text-purple-500 font-semibold">FcFrizzy</span>. All rights reserved.
      </div>

      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700"></div>
    </footer>
  );
}
