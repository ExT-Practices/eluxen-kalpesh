import { useState } from "react";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "I couldn't believe the transformation. I brought in my SUV after a long road trip with kids, pets, and plenty of wear and tear. When I picked it up, it looked and smelled like it just came off the showroom floor. Every surface was spotless, the paint had an incredible shine, and even the smallest crevices were cleaned to perfection.",
    name: "Alina James",
    role: "Happy Client",
    image: "https://html.designingmedia.com/eluxen/assets/images/review-person.png"
  },
  {
    id: 2,
    quote: "Absolutely phenomenal service! The team was highly professional and treated my car as if it was their own. The interior feels brand new, and the exterior detail is flawless. I highly recommend them to anyone who wants top-tier care for their vehicle in record time.",
    name: "Michael Smith",
    role: "Regular Customer",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    quote: "Outstanding experience start to finish. I've used several auto detailing services before, but none compare to the attention to detail provided here. The ceramic coating they applied looks amazing. My car has never looked this good since I bought it.",
    name: "Sarah Jenkins",
    role: "Car Enthusiast",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Content & Slider */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
              <div>
                <span className="text-[#FFCD29] font-semibold tracking-wider text-sm uppercase">
                  Testimonials
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold mt-3 text-white leading-tight">
                  What Our Clients are <br />
                  Saying About Us.
                </h2>
              </div>
              
              {/* Universal Slider Navigation Arrows - Now at the Top Right */}
              <div className="flex gap-3 z-20 relative">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Previous Testimonial"
                  type="button"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Next Testimonial"
                  type="button"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden w-full pb-4">
              <div
                className="flex transition-transform duration-500 ease-in-out w-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full min-w-full flex-shrink-0 flex gap-4 md:gap-6 pr-4">
                    {/* Quote Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                        <Quote className="w-5 h-5 md:w-6 md:h-6 text-white fill-white" />
                      </div>
                    </div>

                    {/* Review Content */}
                    <div className="w-full block">
                      <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6 block min-h-[120px]">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>

                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover"
                        />
                        <div>
                          <h6 className="text-white font-bold text-base md:text-lg">{testimonial.name}</h6>
                          <p className="text-gray-400 text-sm mb-1">{testimonial.role}</p>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-[#FFCD29] fill-[#FFCD29]" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="h-full">
            <img
              src="https://html.designingmedia.com/eluxen/assets/images/testimonials-img.jpg"
              alt="Client checking car"
              className="w-full h-[400px] lg:h-full object-cover rounded-[40px] max-h-[600px] lg:max-h-none"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
