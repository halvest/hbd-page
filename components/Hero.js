'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function Hero() {
  const router = useRouter();
  const [btnPosition, setBtnPosition] = useState({ top: '75%', left: '65%' });
  const [isAnimating, setIsAnimating] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const audioRef = useRef(null);


  const getRandomPosition = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const padding = 80;
    const randomTop = Math.floor(Math.random() * (vh - padding * 2)) + padding;
    const randomLeft = Math.floor(Math.random() * (vw - padding * 2)) + padding;

    return {
      top: `${(randomTop / vh) * 100}%`,
      left: `${(randomLeft / vw) * 100}%`,
    };
  };

  const moveButton = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }

    setHasMoved(true);
    setIsAnimating(true);
    setBtnPosition(getRandomPosition());

    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  };

  const handleYes = () => {
    setShowModal(true);
  };

  const handleGift = () => {
    router.push('/letter');
  };

  return (
    <div className="hero-container relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-pink-100 to-rose-200 overflow-hidden">
      <p className="text-romantic fade-in max-w-xl">
        Hai kamu, yang selalu ada di setiap detak rinduku 💗<br /><br />
        Hari ini... aku cuma mau tanya satu hal kecil tapi penting banget —<br /><br />
        Bolehkah aku jatuh cinta padamu... sekali lagi, dan seterusnya? 😌❤️
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-8 z-10 items-center">
        {!showModal && (
          <button
            onClick={handleYes}
            className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transition-all text-romantic-btn shadow-lg"
          >
            Iya, sayang 💖
          </button>
        )}

        {!hasMoved ? (
          <button
            onMouseEnter={moveButton}
            onTouchStart={moveButton}
            className="px-6 py-3 bg-white border border-pink-300 text-pink-600 rounded-full font-semibold shadow-md hover:bg-rose-100 transition-all text-romantic-btn mt-4 sm:mt-0"
          >
            Engga ah 😝
          </button>
        ) : (
          <button
            onMouseEnter={moveButton}
            onTouchStart={moveButton}
            className={`absolute px-4 py-2 bg-white border border-pink-300 text-pink-600 rounded-full font-semibold shadow-md hover:bg-rose-100 transition-all duration-300 text-sm sm:text-base ${
              isAnimating ? 'scale-125 rotate-6' : ''
            }`}
            style={{
              top: btnPosition.top,
              left: btnPosition.left,
              transform: 'translate(-50%, -50%)',
            }}
          >
            Engga ah 😝
          </button>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 text-center max-w-sm mx-auto animate-fadeIn shadow-xl border border-rose-200">
            <h2 className="text-2xl font-bold text-pink-600 mb-3">YEAAYY!! 🥰</h2>
            <p className="text-pink-700 font-medium mb-6">
              Makasih udah bilang iya 💘<br />Sekarang, aku punya pesan spesial buat kamu 💌
            </p>
            <button
              onClick={handleGift}
              className="px-5 py-2 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full hover:scale-105 transition font-semibold shadow-md"
            >
              💌 Buka pesannya yuk...
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .text-romantic {
          font-family: 'Great Vibes', cursive;
          font-size: 1.75rem;
          line-height: 2.6rem;
          color: #b91c1c;
        }

        .text-romantic-btn {
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
