import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Letter3() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Head>
        <title>Hadiah Spesial 💝</title>
        <meta name="description" content="Ini hadiah kecil dariku untukmu!" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-rose-200 text-center px-4 relative overflow-hidden font-sans">
        <h1 className="text-4xl font-bold text-pink-700 font-cursive mb-6 animate-fadeIn drop-shadow-sm">
          Untuk Kamu yang Paling Spesial 💌
        </h1>

        <div className="bg-white/90 shadow-2xl rounded-2xl p-6 mt-6 max-w-xl text-gray-800 animate-fadeInDown border border-rose-100 backdrop-blur">
          <p className="text-lg leading-relaxed font-light">
            Cinta, kamu tahu nggak? Hari demi hari bersamamu adalah anugerah terindah dalam hidupku 🌸<br /><br />
            Di setiap senyummu, aku temukan ketenangan. Di setiap pelukanmu, aku merasa pulang. Kamu adalah rumah bagi hatiku yang paling hangat dan paling aman 💗<br /><br />
            Aku berdoa semoga hubungan kita selalu diberi kelapangan hati, kekuatan, dan keberkahan dari Tuhan. Semoga setiap tantangan bisa kita hadapi bersama, dan setiap bahagia bisa kita rayakan dalam pelukan satu sama lain 💞<br /><br />
            Terima kasih karena sudah memilihku untuk jadi bagian dari hidupmu. Aku mencintaimu, hari ini, esok, dan seterusnya — sampai tak ada lagi waktu 💍
          </p>
        </div>

        <Link href="/moment">
          <span className="btn-love cursor-pointer mt-6 inline-block animate-bounce-slow">
            Menuju Kenangan Kita 🎥
          </span>
        </Link>

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
