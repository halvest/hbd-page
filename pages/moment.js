import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaVolumeMute,
  FaVolumeUp,
  FaChevronLeft,
  FaChevronRight,
  FaRedo,
  FaHeart,
  FaPlay,
  FaPause,
} from 'react-icons/fa';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const storyline = [
  { image: '/images/1.jpg', caption: 'Aku masih ingat tatapan pertamamu — hangat, dan entah kenapa langsung terasa dekat.' },
  { image: '/images/2.jpg', caption: 'Di sudut kedai itu, tawa kecilmu mencairkan seluruh keraguan yang kupunya.' },
  { image: '/images/3.jpg', caption: 'Kamu cemberut waktu aku bercanda — tapi justru itu yang bikin aku makin sayang.' },
  { image: '/images/4.jpg', caption: 'Tanpa sadar, kamu berubah dari “teman” jadi “rumah”.' },
  { image: '/images/5.jpg', caption: 'Detik demi detik bersamamu, rasanya waktu nggak perlu buru-buru jalan.' },
  { image: '/images/6.jpg', caption: 'Ada tenang di matamu — seperti lagu yang ingin kudengarkan setiap malam.' },
  { image: '/images/7.jpg', caption: 'Kita mungkin bukan pasangan sempurna, tapi kita saling memilih setiap hari.' },
  { image: '/images/8.jpg', caption: 'Senja pernah cantik, tapi tidak pernah seindah saat kita menikmatinya berdua.' },
  { image: '/images/9.jpg', caption: 'Dalam genggaman tanganmu, aku merasa dunia ini baik-baik saja.' },
  { image: '/images/10.jpg', caption: 'Cintamu itu seperti lagu favorit — nggak pernah bikin bosan, malah pengen diulang terus.' },
  { image: '/images/11.jpg', caption: 'Sejak kamu datang, pagi jadi lebih cerah — bahkan saat langit mendung sekalipun.' },
  { image: '/images/12.jpg', caption: 'Tempat paling nyaman bukan di mana, tapi bersama siapa — dan itu kamu.' },
  { image: '/images/13.jpg', caption: 'Senyumanmu cukup untuk menyelamatkan hari-hariku yang paling berat.' },
  { image: '/images/14.jpg', caption: 'Kita bukan tentang sempurna, tapi tentang saling melengkapi dengan cara paling sederhana.' },
  { image: '/images/15.jpg', caption: 'Jantungku masih berdebar tiap kamu senyum. Aneh ya, padahal kita udah sejauh ini.' },
  { image: '/images/16.jpg', caption: 'Kita udah seperti dua kutub yang tak bisa jauh terlalu lama.' },
  { image: '/images/17.jpg', caption: 'Kalau hidup ini bisa kuulang, aku tetap akan memilih jatuh cinta padamu — lagi dan lagi.' },
  { image: '/images/18.jpg', caption: 'Tawamu... ah, seperti nyanyian alam yang cuma bisa kudengar kalau kamu bahagia.' },
  { image: '/images/19.jpg', caption: 'Kisah kita nggak selalu mulus, tapi justru itu yang membuatnya pantas diceritakan.' },
  { image: '/images/20.jpg', caption: 'Satu foto bisa menyimpan sejuta rasa — dan semuanya tentang kamu.' },
  { image: '/images/21.jpg', caption: 'Ini bukan penutup, tapi awal dari cerita cinta yang terus tumbuh... bersamamu.' },
];

export default function LoveTimeCapsule() {
  const [current, setCurrent] = useState(0);
  const [musicOn, setMusicOn] = useState(true);
  const [volume, setVolume] = useState(0.3);
  const [isLoved, setIsLoved] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
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
    if (!autoPlay) return;
    const timeout = setTimeout(() => {
      if (current < storyline.length - 1) setCurrent((prev) => prev + 1);
    }, 6000);
    return () => clearTimeout(timeout);
  }, [current, autoPlay]);

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
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Quicksand:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <main
        className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-300 flex flex-col items-center justify-center px-4 pt-6 relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Audio */}
        <audio ref={audioRef} src="/sounds/beautiful.mp3" loop autoPlay />

        {/* Floating hearts background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-pink-200 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                top: `${Math.random() * 100}%`,
              }}
            >
              💕
            </div>
          ))}
        </div>

        {/* Image & Caption */}
        <div className="relative w-full max-w-[500px] aspect-[3/4] rounded-[2rem] border-[20px] border-white shadow-2xl backdrop-blur-xl bg-white/40 overflow-hidden z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={storyline[current].image}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={storyline[current].image}
                alt={`Moment ${current + 1}`}
                fill
                className="object-cover rounded-[1.5rem]"
                quality={90}
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
                <motion.h3
                  className="caption-romantic mt-2 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {storyline[current].caption}
                </motion.h3>
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

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-5 z-10">
          {storyline.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? 'bg-pink-600 scale-125' : 'bg-white/60'}`}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-pink-700 z-10">
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
              className="accent-pink-500 w-24 rounded-full overflow-hidden bg-pink-100 shadow-inner"
            />
          </div>

          <button onClick={() => setAutoPlay(!autoPlay)} className="btn">
            {autoPlay ? <FaPause className="mr-2" /> : <FaPlay className="mr-2" />}AutoPlay
          </button>

          <button onClick={() => setIsLoved(!isLoved)} className={`btn text-lg ${isLoved ? 'bg-pink-500 text-white' : ''}`}>
            <FaHeart className={`transition-transform ${isLoved ? 'scale-125 text-white drop-shadow-md' : 'text-pink-500'}`} />
            <span className="ml-2 font-semibold">{isLoved ? 'You ❤️ this!' : 'Love this moment?'}</span>
          </button>

          {/* Final Modal */}
          {isFinal && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
              >
                <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full text-center relative">
                  <button
                    onClick={() => setCurrent(storyline.length - 2)}
                    className="absolute top-3 right-4 text-pink-500 hover:text-pink-700 text-lg"
                  >
                    ✖️
                  </button>
                  <h2 className="text-2xl font-script text-pink-600 mb-3">Akhirnya sampai di sini 💖</h2>
                  <p className="text-sm text-gray-600 mb-6">Kita udah sampai di akhir momen, <br></br>terima kasih ya 💖</p>
                  <div className="flex flex-col gap-3">
                    <button onClick={() => router.push('/gift')} className="btn w-full text-base">
                      🎁 Lanjut ke halaman selanjutnya..
                    </button>
                    <button
                      onClick={handleReplay}
                      className="btn w-full text-base bg-white border border-pink-300 text-pink-500 hover:bg-pink-50"
                    >
                      <FaRedo className="mr-1" /> Ulangi dari awal
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </main>

      <Footer />

      <style jsx>{`
        main {
          font-family: 'Quicksand', sans-serif;
        }

        h3,
        .caption-romantic {
          font-family: 'Great Vibes', cursive;
          font-size: 1.75rem;
          color: #fff0f5;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .btn {
          background: linear-gradient(to right, #ffc0cb, #ffe4e1);
          color: #a61e4d;
          padding: 0.6rem 1.2rem;
          border-radius: 9999px;
          box-shadow: 0 4px 12px rgba(255, 192, 203, 0.4);
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          font-weight: 600;
        }

        .btn:hover {
          background: linear-gradient(to right, #fbb6ce, #fff0f5);
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 6px 18px rgba(255, 192, 203, 0.5);
        }

        .animate-float {
          animation: float 16s linear infinite;
          opacity: 0.5;
          font-size: 1.5rem;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }

        .caption-romantic {
          font-family: 'Great Vibes', cursive;
          font-size: 2rem;
          line-height: 2.75rem;
          color: #fff0f5;
          text-align: center;
          padding: 0.5rem 1rem;
          text-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
          background: rgba(0, 0, 0, 0.2);
          border-radius: 1rem;
          backdrop-filter: blur(3px);
        }

        .caption-romantic::before {
          content: '💌 ';
          font-size: 1.2rem;
          margin-right: 0.4rem;
        }

        p.text-xs.mt-1.italic.opacity-80 {
          font-style: normal;
          font-size: 0.75rem;
          color: #ffe4e1;
          opacity: 0.7;
          margin-top: 0.25rem;
          text-align: center;
        }
      `}</style>
    </>
  );
}