export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-10 px-6 bg-pink-100 text-center text-pink-800 text-sm sm:text-base font-light">
      {/* Garis hiasan atas */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-1.5 bg-pink-300 rounded-full z-10"></div>

      {/* Emoji animasi manis */}
      <div className="absolute bottom-4 right-6 text-pink-300 text-3xl animate-floating z-0">
        💗
      </div>
      <div className="absolute bottom-4 left-6 text-pink-300 text-3xl animate-pulse-slow z-0">
        💞
      </div>

      {/* Konten utama footer */}
      <div className="relative z-10 max-w-xl mx-auto">
        <p className="leading-relaxed">
          Dibuat dengan sepenuh hati untuk seseorang yang sangat spesial ❤️ <br />
          &copy; {new Date().getFullYear()} – With Love.
        </p>
        <p className="mt-4 italic text-xs sm:text-sm text-pink-600">
          *Maaf ya kalau ada typo, bikinnya sambil senyum-senyum 😳
        </p>
      </div>

      {/* Tambahan animasi */}
      <style jsx>{`
        .animate-floating {
          animation: floating 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 2.5s infinite;
        }

        @keyframes floating {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </footer>
  );
}
