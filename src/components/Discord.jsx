export default function Discord() {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Gambar */}
        <div className="w-full md:w-1/2">
          <img
            src="/public/dcfrizz.png"
            alt="Komunitas Discord FcFrizzy"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Text dan tombol */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-purple-400">Join Our Discord Community</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Yuk gabung komunitas <span className="text-purple-200 font-semibold">#FrizzHood</span> di Discord!
            Di sana kamu bisa dapat info turnamen, mabar bareng, share tips & tricks, atau sekadar ngobrol santai tentang game favorit.
          </p>
          <a
            href="https://discord.gg/6TKaeQrS6Q"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-full font-semibold shadow-lg transition"
          >
            Masuk Discord Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
