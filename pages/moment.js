import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { FaVolumeMute, FaVolumeUp, FaChevronLeft, FaChevronRight, FaRedo } from 'react-icons/fa';
import Footer from '@/components/Footer';

const storyline = [
  { image: '/images/1.webp', caption: 'Hari itu, pertama kalinya aku melihat senyummu lebih lama 💖', date: '2023-02-14' },
  { image: '/images/2.webp', caption: 'Kita duduk berdua, ditemani aroma kopi dan rasa nyaman ☕️✨', date: '2023-03-10' },
  { image: '/images/3.webp', caption: 'Kamu cemberut, aku senyum. Karena kamu lucu walau kesal 🥺', date: '2023-04-21' },
  { image: '/images/4.webp', caption: 'Dan kini, kamu bagian penting dari kisah hidupku 💘', date: 'Selamanya' },
];

export default function LoveTimeCapsule() {
  const [current, setCurrent] = useState(0);
  const [musicOn, setMusicOn] = useState(true);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef(null);
  const touchStartX = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      musicOn ? audioRef.current.play().catch(() => {}) : audioRef.current.pause();
    }
    return () => {
      if (audioRef.current) audioRef.current.pause();
    };
  }, [musicOn, volume]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (current < storyline.length - 1) setCurrent(prev => prev + 1);
    }, 6000);
    return () => clearTimeout(timeout);
  }, [current]);

  const handleNext = () => current < storyline.length - 1 && setCurrent(current + 1);
  const handlePrev = () => current > 0 && setCurrent(current - 1);
  const handleReplay = () => setCurrent(0);

  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) handlePrev();
    else if (diff < -50) handleNext();
  };

  const isFinal = current === storyline.length - 1;

  return (
    <>
      <Head>
        <title>LoveTime Capsule 💌</title>
      </Head>

      <main
        className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 flex flex-col items-center justify-center px-4 pt-6 relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <audio ref={audioRef} src="/sounds/beautiful.mp3" loop autoPlay />

        {/* Particle Heart Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-pink-300 text-xl animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                top: `${Math.random() * 100}%`
              }}
            >
              💖
            </div>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-pink-700 mb-6 text-center font-cursive z-10">
          LoveTime Capsule 📸
        </h1>

        <div className="relative w-[90%] max-w-[400px] aspect-[9/16] bg-white border-[10px] border-white rounded-[2rem] shadow-xl overflow-hidden z-10">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                key={storyline[current].image}
                src={storyline[current].image}
                alt={`Moment ${current + 1}`}
                width={400}
                height={711} // 9:16 ratio
                className="w-full h-full object-cover rounded-[2rem]"
                quality={90}
                loading={current === 0 ? 'eager' : 'lazy'}
                priority={current === 0}
                sizes="(max-width: 640px) 100vw, 400px"
              />

              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <p className="text-sm">
                  {storyline[current].date === 'Selamanya'
                    ? 'Selamanya'
                    : new Date(storyline[current].date).toLocaleDateString('id-ID', {
                        year: 'numeric', month: 'long', day: 'numeric'
                      })}
                </p>
                <h3 className="text-lg font-semibold mt-1">{storyline[current].caption}</h3>
                <p className="text-xs mt-1 italic opacity-80">Geser atau tap untuk lanjut ⏭️</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {!isFinal && (
            <>
              <button onClick={handlePrev} className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-xl">
                <FaChevronLeft />
              </button>
              <button onClick={handleNext} className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-xl">
                <FaChevronRight />
              </button>
            </>
          )}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-pink-600 z-10">
          <div className="flex items-center gap-3">
            <button onClick={() => setMusicOn(!musicOn)} className="btn">
              {musicOn ? <FaVolumeUp /> : <FaVolumeMute />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="accent-pink-500 w-24"
            />
          </div>

          {isFinal ? (
            <>
              <button onClick={() => router.push('/gift')} className="btn px-4 py-2 text-base">🎁 Lihat Hadiah</button>
              <button onClick={handleReplay} className="btn px-3 py-2 text-base"><FaRedo className="mr-1" /> Ulangi</button>
            </>
          ) : null}
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .btn {
          background-color: #fde8f0;
          color: #d63384;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          box-shadow: 0 4px 6px rgba(255, 192, 203, 0.3);
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          font-weight: 500;
        }
        .btn:hover {
          background-color: #fbb6ce;
          color: #a61e4d;
          transform: translateY(-2px);
        }
        @keyframes float {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
        .animate-float {
          animation: float 12s linear infinite;
        }
      `}</style>
    </>
  );
}
