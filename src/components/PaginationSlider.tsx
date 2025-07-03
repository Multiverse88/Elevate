import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface PaginationSliderProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationSlider: React.FC<PaginationSliderProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const selectorRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (selectorRef.current && pageRefs.current[currentPage]) {
      const targetButton = pageRefs.current[currentPage];
      const targetRect = targetButton.getBoundingClientRect();
      const containerRect = selectorRef.current.parentElement?.getBoundingClientRect();

      if (containerRect) {
        gsap.to(selectorRef.current, {
          x: targetRect.left - containerRect.left,
          width: targetRect.width,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    }
  }, [currentPage]);

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className="flex justify-center mt-10 relative">
      <div className="absolute top-0 left-0 h-full bg-blue-200 rounded-full" ref={selectorRef}></div>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          ref={(el: HTMLButtonElement | null) => { if (el) pageRefs.current[i] = el; }}
          onClick={() => handlePageClick(i)}
          className={`relative z-10 px-4 py-2 mx-1 rounded-full text-lg font-semibold transition-colors duration-200
            ${currentPage === i ? 'text-blue-800' : 'text-gray-700 hover:text-blue-600'}`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default PaginationSlider;
