import { useEffect, useState } from "react";

export default function Letter() {
  const fullText = `
Sayangku tersayang,

Terima kasih telah hadir dalam hidupku dan membawa warna yang tak pernah kuduga.
Setiap senyummu adalah semangatku, dan setiap pelukmu adalah rumah ternyaman bagiku.

Di hari spesialmu ini, aku hanya ingin kamu tahu—aku bangga, aku bersyukur, dan aku
sangat mencintaimu. Selamanya.

💖 Dengan sepenuh hati,
Aku.
  `;

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 30); // kecepatan ketik (ms)
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section className="py-20 px-6 bg-pink-50 text-center relative overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-[Great_Vibes] text-pink-800 mb-10 fade-in">
        Surat Cinta Untukmu 💌
      </h2>

      <div className="max-w-3xl mx-auto bg-white/90 p-8 rounded-3xl shadow-xl border border-pink-200 backdrop-blur-sm fade-in">
        <p className="text-lg md:text-xl text-pink-700 leading-relaxed font-serif whitespace-pre-line">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>
      </div>

      {/* animasi emoji cinta */}
      <div className="absolute top-10 right-8 text-pink-300 text-5xl animate-bounce">💗</div>
      <div className="absolute bottom-8 left-10 text-pink-200 text-4xl animate-pulse">💞</div>
    </section>
  );
}
