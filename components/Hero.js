import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Footer from "@/components/Footer";

export default function Hero() {
  const router = useRouter();
  const [btnPosition, setBtnPosition] = useState({ top: '75%', left: '65%' });
  const [isAnimating, setIsAnimating] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const audioRef = useRef(null);

  const getRandomPosition = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const padding = 80;
    let randomTop = Math.floor(Math.random() * (vh - padding * 2)) + padding;
    let randomLeft = Math.floor(Math.random() * (vw - padding * 2)) + padding;

    return {
      top: `${(randomTop / vh) * 100}%`,
      left: `${(randomLeft / vw) * 100}%`,
    };
  };

  useEffect(() => {
    setBtnPosition(getRandomPosition());
  }, []);

  const moveButton = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }

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
    <div className="hero-container relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-pink-50">
      <p className="text-base sm:text-lg md:text-2xl lg:text-3xl fade-in max-w-xl leading-relaxed text-pink-700 font-medium">
        Hai kamu yang paling spesial di hidupku 💕<br /><br />
        Hari ini aku cuma mau tanya satu hal penting banget...<br /><br />
        Mau nggak jadi pacarku... lagi? 😝❤️
      </p>

      {/* Tombol YES */}
      <button
        onClick={handleYes}
        className="mt-8 px-6 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transition-all z-20 text-sm sm:text-base"
      >
        Mau Banget!
      </button>

      {/* Tombol NO */}
      <button
        onMouseEnter={moveButton}
        onTouchStart={moveButton}
        className={`absolute px-4 py-2 bg-white border border-pink-400 text-pink-600 rounded-full font-semibold shadow-md hover:bg-pink-100 z-30 transition-all duration-300 text-sm sm:text-base ${
          isAnimating ? 'scale-125 rotate-6' : ''
        }`}
        style={{
          top: btnPosition.top,
          left: btnPosition.left,
          transform: 'translate(-50%, -50%)',
        }}
      >
        Engga 😜
      </button>

      {/* Sound Effect */}
      <audio ref={audioRef} src="/sounds/cartoon-jump-6462.mp3" preload="auto" />

      {/* POP-UP MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 text-center max-w-sm mx-auto animate-fadeIn shadow-xl">
            <h2 className="text-xl font-bold text-pink-600 mb-4">YEAAYY!! 😍</h2>
            <p className="text-pink-700 font-medium mb-6">
              Terimakasihh 😘<br />Yuk lanjut ke hadiah kecil dari aku 🎁
            </p>
            <button
              onClick={handleGift}
              className="px-5 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
            >
              🎁 Klik disini sayang..
            </button>
          </div>
        </div>
      )}

      {/* Animasi */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
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
