export default function Header() {
  return (
    <header className="relative py-6 px-6 bg-pink-100 text-pink-800 text-center shadow-md">
      {/* Hiasan garis kecil */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-pink-300 rounded-full z-10"></div>

      {/* Emoji animasi lucu */}
      <div className="absolute top-4 left-6 text-pink-300 text-2xl animate-float-slow z-0">
        🌸
      </div>
      <div className="absolute top-4 right-6 text-pink-300 text-2xl animate-bounce-soft z-0">
        💕
      </div>

      {/* Konten utama header */}
      <div className="relative z-10">
        <h1 className="text-3xl sm:text-4xl font-cursive font-bold drop-shadow">
          LoveTime Capsule 💌
        </h1>
        <p className="mt-1 text-sm sm:text-base italic text-pink-600">
          Momen-momen kecil, cinta yang besar.
        </p>
      </div>

      {/* Animasi */}
      <style jsx>{`
        .animate-float-slow {
          animation: floatSlow 4s ease-in-out infinite;
        }

        .animate-bounce-soft {
          animation: bounceSoft 2.5s infinite;
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes bounceSoft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </header>
  );
}
