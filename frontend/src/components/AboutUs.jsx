import { CheckCircle2, ArrowUpRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto bg-blue-600 rounded-[40px] p-8 md:p-12 lg:p-16 relative overflow-hidden">
        
        {/* Car Vector Background */}
        <img 
          src="https://html.designingmedia.com/eluxen/assets/images/car-vector.png" 
          alt="Car Vector" 
          className="absolute bottom-0 right-0 w-80 md:w-[450px] lg:w-[600px] object-cover opacity-80"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* LEFT: Image Grid */}
          <div className="grid grid-cols-12 gap-4 h-full min-h-[400px]">
            <div className="col-span-7 h-full">
              <img 
                src="https://html.designingmedia.com/eluxen/assets/images/about-us-img1.jpg" 
                alt="Car Wash" 
                className="w-full h-full object-cover rounded-[32px]"
              />
            </div>
            <div className="col-span-5 flex flex-col gap-4 h-full">
              <img 
                src="https://html.designingmedia.com/eluxen/assets/images/about-us-img2.jpg" 
                alt="Car Detailing" 
                className="w-full h-1/2 flex-1 object-cover rounded-[32px]"
              />
              <img 
                src="https://html.designingmedia.com/eluxen/assets/images/about-us-img3.jpg" 
                alt="Car Polishing" 
                className="w-full h-1/2 flex-1 object-cover rounded-[32px]"
              />
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="text-white">
            <span className="text-yellow-400 font-semibold tracking-wider text-sm uppercase">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold mt-3 mb-6 leading-tight">
              Driven by Detail, <br />
              Powered by Passion
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed font-light">
              We believe your vehicle deserves more than just a wash — it deserves care, precision, and attention to detail. With years of experience in professional car detailing, we specialize in bringing out the best in every vehicle.
            </p>

            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-white w-6 h-6 flex-shrink-0 mt-0.5 bg-white text-blue-600 rounded-full fill-white" />
                <span className="text-lg font-medium">Exceptional Quality with Industry-Leading Products.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-white w-6 h-6 flex-shrink-0 mt-0.5 bg-white text-blue-600 rounded-full fill-white" />
                <span className="text-lg font-medium">Tailored Detailing Services for Every Vehicle & Lifestyle.</span>
              </li>
            </ul>

            <a 
              href="/pricing"
              className="inline-flex items-center gap-4 bg-[#FFCD29] text-black pl-8 pr-2 py-2 rounded-[20px] font-bold hover:bg-yellow-400 transition-colors"
            >
              Read more
              <span className="bg-black text-[#FFCD29] p-3 rounded-xl flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </span>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
