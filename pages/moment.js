// pages/moment.js
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaVolumeMute, FaVolumeUp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Footer from '@/components/Footer';

const storyline = [
  { image: '/images/1.jpeg', caption: 'Waktu pertama kali kita jalan bareng 💖', date: '2023-02-14' },
  { image: '/images/2.jpeg', caption: 'Ngopi lucu sore-sore ☕️✨', date: '2023-03-10' },
  { image: '/images/3.jpeg', caption: 'Momen lucu pas kamu marah-marah tapi tetep gemes 🥺', date: '2023-04-21' },
  { image: '/images/4.jpeg', caption: 'Terima kasih sudah jadi bagian paling indah dalam hidupku 💘 Yuk terus tulis cerita kita bersama.', date: 'Selamanya' }
];

export default function Storyline() {
  const [current, setCurrent] = useState(0);
  const [showReaction, setShowReaction] = useState(false);
  const [reactionEmoji, setReactionEmoji] = useState('');
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

  const handleNext = () => {
    if (current < storyline.length - 1) setCurrent(current + 1);
  };

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) handlePrev();
    else if (diff < -50) handleNext();
  };

  const emojis = ['😍', '🥰', '😘', '🤗', '💖'];
  const handleReact = () => {
    const random = emojis[Math.floor(Math.random() * emojis.length)];
    setReactionEmoji(random);
    setShowReaction(true);
    setTimeout(() => setShowReaction(false), 1000);
  };

  return (
    <>
      <Head>
        <title>Storyline Romantis Kita 💖</title>
      </Head>

      <main
        className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center justify-center px-4 pt-4 relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <audio ref={audioRef} src="/sounds/backsound.mp3" loop autoPlay />

        {/* Stars */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 w-0.5 h-1 bg-white opacity-70 animate-shooting-star"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-pink-700 mb-4 text-center animate-fadeIn font-cursive z-10">
          Cerita Cinta Kita yang Penuh Warna 💕
        </h2>

        <div className="relative w-[90%] max-w-[400px] aspect-[9/16] rounded-[2rem] border-[12px] border-white bg-white shadow-2xl overflow-hidden animate-fadeIn z-10">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-pink-200 rounded-full z-10"></div>

          {/* Progress */}
          <div className="absolute top-0 left-0 w-full flex gap-1 p-2 z-20">
            {storyline.map((_, i) => (
              <div key={i} className="h-1 flex-1 bg-white/50 rounded-full relative overflow-hidden">
                <div
                  className={`absolute top-0 left-0 h-full bg-white transition-all duration-[6000ms] ${i === current ? 'w-full' : i < current ? 'w-full' : 'w-0'}`}
                />
              </div>
            ))}
          </div>

          <Image
            src={storyline[current].image}
            alt={`Moment ${current + 1}`}
            fill
            className="object-cover transition-opacity duration-700 ease-in-out"
            priority
          />

          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white z-10">
            <p className="text-sm mb-1">
              {storyline[current].date === 'Selamanya'
                ? 'Selamanya'
                : new Date(storyline[current].date).toLocaleDateString('id-ID', {
                    year: 'numeric', month: 'long', day: 'numeric'
                  })}
            </p>
            <h3 className="text-lg font-semibold drop-shadow-md">{storyline[current].caption}</h3>
            <p className="text-xs mt-1 italic opacity-80">Tap atau geser untuk lanjut ⏭️</p>
          </div>

          <div className="absolute bottom-4 right-4 text-white text-xs bg-pink-600/50 px-2 py-1 rounded-full shadow">
            #ourmoment 💘
          </div>

          {showReaction && (
            <div className="absolute inset-0 flex items-center justify-center z-30">
              <div className="text-6xl animate-pop drop-shadow-md">{reactionEmoji}</div>
            </div>
          )}

          <button onClick={handlePrev} className="absolute left-2 top-1/2 -translate-y-1/2 text-white z-30 text-2xl opacity-70 hover:opacity-100">
            <FaChevronLeft />
          </button>
          <button onClick={handleNext} className="absolute right-2 top-1/2 -translate-y-1/2 text-white z-30 text-2xl opacity-70 hover:opacity-100">
            <FaChevronRight />
          </button>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-pink-600 z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMusicOn(!musicOn)}
              className="btn"
              title={musicOn ? 'Matikan Musik' : 'Nyalakan Musik'}
            >
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

          <button onClick={handleReact} className="btn px-4 py-2 text-xl">
            😍
          </button>

          <button
            onClick={() => router.push('/gift')}
            className="btn px-4 py-2 text-base"
          >
            🎁 Ke Hadiah
          </button>
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
          justify-content: center;
          font-weight: 500;
        }
        .btn:hover {
          background-color: #fbb6ce;
          color: #a61e4d;
          transform: translateY(-2px);
        }
        @keyframes shooting-star {
          0% {
            transform: translateY(-100%) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(30vw);
            opacity: 0;
          }
        }
        .animate-shooting-star {
          animation-name: shooting-star;
          animation-timing-function: ease-in;
          animation-iteration-count: infinite;
        }
      `}</style>
    </>
  );
}
