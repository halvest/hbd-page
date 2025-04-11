import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Hadiah() {
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
            Sayangku, selamat ulang tahun ya 🎂💖<br /><br />
            Di hari spesialmu ini, aku berdoa semoga semua harapan-harapan indahmu satu per satu jadi nyata. Semoga langkahmu selalu dimudahkan, rezekimu diluaskan, dan hatimu selalu dipenuhi ketenangan dan kebahagiaan.<br /><br />
            Kamu pantas mendapatkan segala yang terbaik di dunia ini, karena kamu begitu tulus, kuat, dan luar biasa. Aku akan selalu ada di sampingmu, mendukungmu, mencintaimu, dan tumbuh bersamamu 💕<br /><br />
            Happy birthday, cinta. Semoga kita selalu diberi waktu yang panjang untuk saling mencintai dan menjaga, sampai tua nanti... 💫
              </p>
            </div>

            <Link href="/letter3">
             <span className="btn-love cursor-pointer mt-6 transition-transform duration-500 hover:scale-105">
               Klik lagi cintaa.. 🌹
              </span>
            </Link>
      </main>
    </>
  );
}
