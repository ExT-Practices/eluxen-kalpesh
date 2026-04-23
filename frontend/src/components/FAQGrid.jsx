import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQGrid() {
  const [faqData, setFaqData] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5050/api/faqs')
      .then(res => res.json())
      .then(data => setFaqData(data))
      .catch(err => console.error('Error fetching FAQs:', err));
  }, []);

  
  const leftColumn = faqData.slice(0, Math.ceil(faqData.length / 2));
  const rightColumn = faqData.slice(Math.ceil(faqData.length / 2));

  const AccordionItem = ({ item, index, actualIndex }) => {
    const isOpen = openIndex === actualIndex;
    return (
      <div
        className={`
          transition-all duration-500 rounded-3xl border mb-4
          ${isOpen
            ? 'bg-transparent border-[#FFCD29] shadow-[0_10px_30px_rgba(255,205,41,0.05)]'
            : 'bg-[#121212] border-transparent hover:border-white/10'
          }
        `}
      >
        <button
          onClick={() => setOpenIndex(isOpen ? -1 : actualIndex)}
          className="w-full flex items-center justify-between p-6 text-left"
        >
          <span className={`
            text-lg font-bold transition-colors duration-300 pr-4
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
  };

  return (
    <section className="w-full py-24 px-4 bg-black animate-fade-up">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {}
          <div className="flex flex-col gap-2">
            {leftColumn.map((item, index) => (
              <AccordionItem 
                key={index} 
                item={item} 
                index={index} 
                actualIndex={index} 
              />
            ))}
          </div>

          {}
          <div className="flex flex-col gap-2">
            {rightColumn.map((item, index) => (
              <AccordionItem 
                key={index} 
                item={item} 
                index={index} 
                actualIndex={index + leftColumn.length} 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
