import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2025-05-01T00:00:00");
  const [timeLeft, setTimeLeft] = useState({});
  const [isClient, setIsClient] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsExpired(true);
        clearInterval(timer);
        return;
      }

      const seconds = Math.floor((difference / 1000) % 60);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // run immediately
    return () => clearInterval(timer);
  }, []);

  if (!isClient) return null;

  return (
    <section className="py-20 px-6 bg-pink-100 text-center">
      <h2 className="text-3xl md:text-4xl font-[Great_Vibes] text-pink-800 mb-10 fade-in">
        {isExpired ? "Selamat Ulang Tahun! 🎂🎉" : "Hitung Mundur ke Hari Spesial 💝"}
      </h2>

      {!isExpired && (
        <div className="flex flex-wrap justify-center gap-6 text-pink-900 text-lg font-semibold fade-in">
          {Object.entries(timeLeft).map(([unit, value], idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-pink-300 min-w-[90px] transition-all duration-500"
            >
              <div className="text-3xl font-bold">{value.toString().padStart(2, "0")}</div>
              <div className="capitalize">{unit}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
