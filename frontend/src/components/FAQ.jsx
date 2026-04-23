import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import car from "../assets/car.png";

export default function FAQ({ limit }) {
  const [faqData, setFaqData] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5050/api/faqs')
      .then(res => res.json())
      .then(data => setFaqData(data))
      .catch(err => console.error('Error fetching FAQs:', err));
  }, []);

  const displayFaqs = limit ? faqData.slice(0, limit) : faqData;

  return (
    <section className="w-full py-20 px-4 bg-black animate-fade-up">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {}
          <div className="relative overflow-hidden rounded-[40px]">
            <img
              src={car}
              alt="Car Detail"
              className={`w-full h-auto object-cover transform transition-transform duration-1000 ${
                openIndex !== -1 ? 'scale-110' : 'scale-100'
              }`}
            />
            {}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {}
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-[#FFCD29] font-semibold tracking-wider text-sm uppercase">
                Faq's
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white leading-tight">
                Your Most Frequently <br /> Asked Questions
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {displayFaqs.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`
                      transition-all duration-500 rounded-2xl border 
                      ${isOpen
                        ? 'bg-transparent border-[#FFCD29] shadow-[0_10px_30px_rgba(255,205,41,0.05)]'
                        : 'bg-[#121212] border-transparent hover:border-white/10'
                      }
                    `}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className={`
                        text-lg font-semibold transition-colors duration-300 pr-4
                        ${isOpen ? 'text-[#FFCD29]' : 'text-white'}
                      `}>
                        {item.question}
                      </span>
                      <div className={`
                        flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500
                        ${isOpen ? 'bg-[#FFCD29] text-black rotate-180' : 'bg-white/5 text-[#FFCD29]'}
                      `}>
                        {isOpen ? <Minus className="w-5 h-5 stroke-[2.5]" /> : <Plus className="w-5 h-5 stroke-[2.5]" />}
                      </div>
                    </button>

                    <div
                      className={`
                        grid transition-all duration-500 ease-in-out
                        ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0 invisible'}
                      `}
                    >
                      <div className="overflow-hidden px-6">
                        <p className="text-gray-400 text-base leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
