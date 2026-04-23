import { useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://html.designingmedia.com/eluxen/assets/images/gallery-img1.jpg",
      alt: "Professional car detailing",
      size: "large"
    },
    {
      id: 2,
      src: "https://html.designingmedia.com/eluxen/assets/images/gallery-img2.jpg",
      alt: "Car polishing service",
      size: "medium"
    },
    {
      id: 3,
      src: "https://html.designingmedia.com/eluxen/assets/images/gallery-img3.jpg",
      alt: "Interior detailing",
      size: "small"
    },
    {
      id: 4,
      src: "https://html.designingmedia.com/eluxen/assets/images/gallery-img4.jpg",
      alt: "Exterior cleaning",
      size: "small"
    }
  ];

  return (
    <section className="w-full py-20 px-4 relative text-center">
      <div className="max-w-7xl mx-auto">
        {}
        <div className="mb-16">
          <span className="text-[#FFCD29] font-semibold tracking-wider text-sm uppercase inline-block mb-4 animate-fade-in">
            Gallery
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-tight">
            See What We've Done<br />
            for Our Clients
          </h2>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[260px] gap-6">
          
          {}
          <div 
            className="md:col-span-1 md:row-span-2 group cursor-pointer overflow-hidden rounded-2xl relative h-[300px] md:h-full"
            onClick={() => setSelectedImage(galleryImages[0])}
          >
            <img 
              src={galleryImages[0].src} 
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </span>
            </div>
          </div>

          {}
          <div 
            className="md:col-span-2 md:row-span-1 group cursor-pointer overflow-hidden rounded-2xl relative h-[200px] md:h-full"
            onClick={() => setSelectedImage(galleryImages[1])}
          >
            <img 
              src={galleryImages[1].src} 
              alt={galleryImages[1].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </span>
            </div>
          </div>

          {}
          <div 
            className="md:col-span-1 md:row-span-1 group cursor-pointer overflow-hidden rounded-2xl relative h-[200px] md:h-full"
            onClick={() => setSelectedImage(galleryImages[2])}
          >
            <img 
              src={galleryImages[2].src} 
              alt={galleryImages[2].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </span>
            </div>
          </div>

          {}
          <div 
            className="md:col-span-1 md:row-span-1 group cursor-pointer overflow-hidden rounded-2xl relative h-[200px] md:h-full"
            onClick={() => setSelectedImage(galleryImages[3])}
          >
            <img 
              src={galleryImages[3].src} 
              alt={galleryImages[3].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </span>
            </div>
          </div>

        </div>
      </div>

      {}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-[#FFCD29] transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}