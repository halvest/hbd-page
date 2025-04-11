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

      <main className="min-h-screen flex flex-col items-center justify-center bg-pink-50 text-center px-4 relative overflow-hidden">
        <h1 className="text-4xl font-bold text-pink-600 font-cursive mb-6 fade-in">
          Untuk Kamu yang Paling Spesial 💌
        </h1>

        <div className="bg-white shadow-lg rounded-xl p-6 mt-6 max-w-xl fade-in">
          <p className="text-lg text-gray-800 leading-relaxed">
            Cinta, kamu tahu nggak? Hari demi hari bersamamu adalah anugerah terindah dalam hidupku 🌸<br /><br />
            Di setiap senyummu, aku temukan ketenangan. Di setiap pelukanmu, aku merasa pulang. Kamu adalah rumah bagi hatiku yang paling hangat dan aman 💗<br /><br />
            Aku berdoa semoga hubungan kita selalu diberi kelapangan hati, kekuatan, dan keberkahan dari Tuhan. Semoga setiap tantangan bisa kita hadapi bersama, dan setiap bahagia bisa kita rayakan dalam pelukan satu sama lain 💞<br /><br />
            Terima kasih sudah memilihku untuk jadi bagian dari hidupmu. Aku mencintaimu, hari ini, esok, dan seterusnya — sampai tak ada lagi waktu 💍
          </p>
        </div>

        <Link href="/moment">
          <span className="btn-love cursor-pointer mt-6 transition-transform duration-500 hover:scale-105">
            Menuju Kenangan Kita 🎥
          </span>
        </Link>
      </main>
    </>
  );
}
