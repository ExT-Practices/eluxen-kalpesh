import { useEffect, useState } from "react";
import { Check, ArrowUpRight } from "lucide-react";

export default function Pricing() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/pricing')
      .then(res => res.json())
      .then(data => setPlans(data))
      .catch(err => console.error('Error fetching pricing:', err));
  }, []);
  return (
    <section
      className="w-full py-20 px-4 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://html.designingmedia.com/eluxen/assets/images/pricing-bg.jpg')",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <span className="text-[#FFCD29] font-semibold tracking-wider text-sm uppercase">
            Affordable Pricing
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold mt-3 text-white leading-tight">
            Transparent Pricing Plans <br /> Exceptional Service
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="group bg-[#080808] hover:bg-blue-600 transition-colors duration-300 rounded-[32px] p-8 md:p-10 flex flex-col"
            >
              <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
              <p className="text-gray-400 group-hover:text-white/90 text-sm mb-6 min-h-[40px]">
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="block text-gray-400 group-hover:text-white/80 text-sm mb-1">
                  Starting at:
                </span>
                <div className="flex items-end gap-1 text-white">
                  <sup className="text-xl font-normal relative top-[-10px]">$</sup>
                  <span className="text-[56px] font-bold leading-none">{plan.price}</span>
                  <span className="text-gray-400 group-hover:text-white/80 text-base mb-1">/Visit</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FFCD29] group-hover:text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 group-hover:text-white text-[15px]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="/pricing"
                className="inline-flex items-center gap-4 bg-blue-600 group-hover:bg-[#FFCD29] text-white group-hover:text-black pl-8 pr-2 py-2 rounded-[20px] font-bold transition-colors w-max"
              >
                Get started
                <span className="bg-black text-white group-hover:text-[#FFCD29] p-3 rounded-xl flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
