import { useState, useEffect } from "react";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5050/api/testimonials')
      .then(res => res.json())
      .then(data => setTestimonials(data))
      .catch(err => console.error('Error fetching testimonials:', err));
  }, []);

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
    <section className="w-full py-16 md:py-20 px-4 animate-fade-up">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {}
          <div>

            {}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-6">

              <div>
                <span className="text-[#FFCD29] font-semibold tracking-wider text-xs sm:text-sm uppercase">
                  Testimonials
                </span>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold mt-3 text-white leading-tight">
                  What Our Clients are <br className="hidden sm:block" />
                  Saying About Us.
                </h2>
              </div>

              {}
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition"
                >
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <button
                  onClick={handleNext}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition"
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {}
            <div className="relative overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial._id}
                    className="w-full min-w-full flex flex-col sm:flex-row gap-4 sm:gap-6"
                  >

                    {}
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center">
                        <Quote className="w-4 h-4 sm:w-6 sm:h-6 text-white fill-white" />
                      </div>
                    </div>

                    {}
                    <div className="w-full">
                      <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-6">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>

                      <div className="flex items-center gap-3 sm:gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                        />

                        <div>
                          <h6 className="text-white font-bold text-sm sm:text-base md:text-lg">
                            {testimonial.name}
                          </h6>
                          <p className="text-gray-400 text-xs sm:text-sm">
                            {testimonial.role}
                          </p>

                          <div className="flex gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFCD29] fill-[#FFCD29]"
                              />
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

          {}
          <div className="w-full">
            <img
              src="https://html.designingmedia.com/eluxen/assets/images/testimonials-img.jpg"
              alt="Client"
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-full object-cover rounded-2xl sm:rounded-[40px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
