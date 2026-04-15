import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const formatTime = (num) => (num < 10 ? `0${num}` : num);

  useEffect(() => {
    const targetDate = new Date("December 31, 2026 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-black text-white px-4 sm:px-6">

      <div className="max-w-4xl w-full text-center">

        {/* Logo */}
        <Link to="/" className="block mb-6">
          <img
  src="https://html.designingmedia.com/eluxen/assets/images/logo.png"
  alt="logo-icon"
  className="w-28 sm:w-36 mx-auto opacity-0 animate-fade-in"
/>
        </Link>

        {/* Text */}
        <h3 className="text-sm sm:text-base md:text-lg text-gray-400 font-medium">
          Our Website is under construction
        </h3>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-2">
          Coming Soon
        </h1>

        {/* Countdown */}
        <div className="mt-8">
          <ul className="flex justify-center items-center gap-3 sm:gap-6 flex-wrap">

            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Min", value: timeLeft.minutes },
              { label: "Sec", value: timeLeft.seconds },
            ].map((item, i) => (
              <li key={i} className="flex flex-col items-center">

                {/* Yellow Box */}
                <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 text-black px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-[0_0_20px_rgba(255,204,77,0.4)] min-w-[70px] sm:min-w-[80px] text-center hover:scale-105 transition">

                  <span className="text-xl sm:text-3xl font-bold">
                    {formatTime(item.value)}
                  </span>

                </div>

                {/* Label */}
                <span className="mt-2 text-xs sm:text-sm text-gray-400">
                  {item.label}
                </span>

              </li>
            ))}

          </ul>
        </div>

        {/* Back Button */}
        <Link
          to="/"
          className="mt-8 inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Back to Home
        </Link>

      </div>
    </section>
  );
}