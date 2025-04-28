import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SocialIcons from '../components/socialicons'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const galleryImages = [
    { src: "/assets/gallery/g2.jpg", alt: "Salon Image 1" },
    { src: "/assets/gallery/g5.jpg", alt: "Salon Image 2" },
    { src: "/assets/gallery/g6.jpg", alt: "Salon Image 3" },
    { src: "/assets/gallery/g7.jpg", alt: "Salon Image 4" },
    { src: "/assets/gallery/g8.jpg", alt: "Salon Image 5" },
    { src: "/assets/gallery/g9.jpg", alt: "Salon Image 6" },
    { src: "/assets/gallery/g2.jpg", alt: "Salon Image 7" }, // Added to reach 9 images for mobile layout
    { src: "/assets/gallery/g5.jpg", alt: "Salon Image 8" }, // Added to reach 9 images for mobile layout
    { src: "/assets/gallery/g6.jpg", alt: "Salon Image 9" }, // Added to reach 9 images for mobile layout
  ];

  const openModal = useCallback((image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  }, []);

  const goToPrevious = useCallback(() => {
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[newIndex]);
    setCurrentIndex(newIndex);
    setIsLoading(true);
  }, [currentIndex, galleryImages]);

  const goToNext = useCallback(() => {
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[newIndex]);
    setCurrentIndex(newIndex);
    setIsLoading(true);
  }, [currentIndex, galleryImages]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") goToPrevious();
      if (event.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeModal, goToNext, goToPrevious]);

  return (
    <div className="flex flex-col items-center gap-6 md:gap-8 bg-white py-8 md:py-12 px-3 md:px-4 mx-auto md:ml-[350px]">
      <SocialIcons />

      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">Our Salon Gallery</h2>
      <p className="text-gray-600 max-w-2xl text-center text-sm md:text-base mb-6 md:mb-8">
        Browse through our collection of work and salon environment
      </p>

      <div className="grid grid-cols-3 gap-2 md:grid-cols-2 lg:grid-cols-3 md:gap-6 w-full max-w-7xl mx-auto">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative w-full h-28 sm:h-40 md:h-64 rounded-lg overflow-hidden shadow-md cursor-pointer group"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            onClick={() => openModal(image, index)}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover transition-opacity duration-300"
              onLoad={() => setIsLoading(false)}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-12 md:w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 md:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-6xl w-full max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 md:top-4 md:right-4 bg-white hover:bg-gray-200 transition rounded-full p-1 md:p-2 text-lg md:text-xl z-10 shadow-lg"
                onClick={closeModal}
                aria-label="Close modal"
              >
                &times;
              </button>
              
              <button
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-200 transition rounded-full p-1 md:p-3 text-lg md:text-xl z-10 shadow-lg"
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                aria-label="Previous image"
              >
                &#10094;
              </button>
              
              <button
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-200 transition rounded-full p-1 md:p-3 text-lg md:text-xl z-10 shadow-lg"
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                aria-label="Next image"
              >
                &#10095;
              </button>
              
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 md:h-12 md:w-12 border-t-2 border-b-2 border-white"></div>
                </div>
              )}
              
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                className={`w-full h-auto max-h-[90vh] object-contain rounded-lg ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => setIsLoading(false)}
              />
              
              <div className="absolute bottom-2 md:bottom-4 left-0 right-0 text-center text-white text-xs md:text-sm">
                {currentIndex + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;