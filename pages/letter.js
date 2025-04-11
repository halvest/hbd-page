import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

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

      <main className="min-h-screen flex flex-col items-center justify-center bg-pink-50 text-center px-4 relative overflow-hidden">
        <h1 className="text-4xl font-bold text-pink-600 font-cursive mb-6 animate-fadeIn">
          Untuk Kamu yang Paling Spesial 💌
        </h1>

        {!opened ? (
          <>
            <div className="relative w-60 h-60 animate-envelope">
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
              className="btn-love mt-8"
            >
              Baca Pesannya 💖
            </button>
          </>
        ) : (
          <>
            <div className="bg-white shadow-xl rounded-xl p-6 mt-6 max-w-xl text-gray-800 animate-fadeInDown">
              <p className="text-lg leading-relaxed">
                Sayang, terima kasih sudah jadi bagian dari hidupku. Kamu itu cahaya dalam hariku, pelangi setelah hujan, dan alasan aku terus tersenyum 💕<br /><br />
                Di hari spesial ini, aku cuma mau bilang... aku sayang kamu lebih dari kata-kata yang bisa diucapkan. Semoga kebahagiaan selalu menyertaimu 💖
              </p>
            </div>

            <Link href="/letter2">
              <span className="btn-love mt-6 cursor-pointer inline-block animate-bounce-slow">
                Klik lagi cintaa.. 🌹
              </span>
            </Link>
          </>
        )}
      </main>
    </>
  );
}
