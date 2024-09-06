import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    label: "National Motto of India",
    
    color: "bg-gray-400",
    image: "satyamev-jayate.svg"
  },
  {
    id: 2,
    label: "Rashtrapati Bhavan (President's House)",
    
    color: "bg-gray-500",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Delhi_India_Government.jpg/800px-Delhi_India_Government.jpg", 
  },
  {
    id: 3,
    label: "Tiranga (Tricolor)",
    
    color: "bg-gray-600",
    image : "https://static.vecteezy.com/system/resources/thumbnails/024/891/854/small_2x/flag-blowing-in-wind-symbol-of-patriotism-and-freedom-generated-by-ai-photo.jpg"
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    
    // Cleanup on unmount
    return () => clearInterval(timer);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-auto max-w- 7xl mx-auto md-6">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`w-full h-[36rem] flex-shrink-0 ${slide.color} flex items-center justify-center relative`}
            >
              {/* Slide Image */}
              <img
                src={slide.image}
                alt={slide.label}
                className="absolute inset-0 w-full h-full object-fit"
              />
              <div className="relative z-10 text-white bg-black bg-opacity-20 p-4">
                <h3 className="text-2xl font-semibold">{slide.label}</h3>
                
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous and Next Buttons with arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full focus:outline-none"
      >
        &#8592; {/* Left Arrow */}
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full focus:outline-none"
      >
        &#8594; {/* Right Arrow */}
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? 'bg-white' : 'bg-gray-500'
            }`}
          ></button>
        ))}
      </div>

    </div>
  );
};

export default Carousel;
