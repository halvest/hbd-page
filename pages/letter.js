import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Footer from "@/components/Footer";

export default function Hadiah() {
  const [opened, setOpened] = useState(false);
  const [musicOn, setMusicOn] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      musicOn ? audioRef.current.play().catch(() => {}) : audioRef.current.pause();
    }
  }, [musicOn]);

  return (
    <>
      <Head>
        <title>Hadiah Spesial 💝</title>
        <meta name="description" content="Ini hadiah kecil dariku untukmu!" />
      </Head>

      <audio ref={audioRef} src="/sounds/backsound.mp3" loop autoPlay />

      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-100 to-pink-200 text-center px-4 relative overflow-hidden font-sans">
        <h1 className="text-4xl font-bold text-pink-700 font-cursive mb-6 animate-fadeIn drop-shadow-sm">
          Untuk Kamu yang Selalu di Hati 💌
        </h1>

        {!opened ? (
          <>
            <div className="relative w-64 h-64 animate-pulse-slow">
              <Image
                src="/images/love-letter.png"
                alt="Surat Cinta"
                layout="fill"
                objectFit="contain"
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>

            <button
              onClick={() => setOpened(true)}
              className="btn-love mt-8 shadow-md"
            >
              Buka Suratnya 💖
            </button>
          </>
        ) : (
          <>
            <div className="bg-white/90 shadow-2xl rounded-2xl p-6 mt-6 max-w-xl text-gray-800 animate-fadeInDown border border-rose-100 backdrop-blur">
              <p className="text-lg leading-relaxed font-light">
                Sayangku, terima kasih sudah jadi bagian paling indah dalam hidupku. 🌷<br /><br />
                Kamu itu seperti senja yang tenang — selalu kunanti, tak pernah bosan kupandangi. Kamu cahaya di hari-hariku, dan pelukan hangat di dinginnya dunia. 💕<br /><br />
                Di hari ini, aku cuma mau kamu tahu: cintaku untukmu nggak akan pernah pudar. Semoga senyummu selalu tumbuh, seperti bunga yang mekar tiap pagi. 🌸
              </p>
            </div>

            <Link href="/letter2">
              <span className="btn-love mt-6 cursor-pointer inline-block animate-bounce-slow">
                Lanjut bacanya yuk, cinta.. 🌹
              </span>
            </Link>
          </>
        )}

        <style jsx>{`
          .btn-love {
            padding: 0.75rem 1.5rem;
            background: linear-gradient(to right, #ec4899, #f43f5e);
            color: white;
            border-radius: 9999px;
            font-weight: 600;
            font-size: 1rem;
            transition: transform 0.3s ease;
          }

          .btn-love:hover {
            transform: scale(1.05);
            background: linear-gradient(to right, #db2777, #e11d48);
          }

          .font-cursive {
            font-family: 'Great Vibes', cursive;
          }

          .animate-fadeIn {
            animation: fadeIn 0.6s ease-in-out;
          }

          .animate-fadeInDown {
            animation: fadeInDown 0.6s ease-out;
          }

          .animate-pulse-slow {
            animation: pulse 3s infinite;
          }

          .animate-bounce-slow {
            animation: bounce 2.5s infinite;
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

          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
