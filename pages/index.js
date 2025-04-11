import Head from "next/head";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Happy Birthday, Sayang 💖</title>
        <meta name="description" content="Halaman ulang tahun yang romantis dan spesial." />
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/9444/9444300.png" />
      </Head>
      <main>
        <Hero />
        <Footer />
      </main>
    </>
  );
}
