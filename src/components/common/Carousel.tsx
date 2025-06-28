"use client";

import React, { useState, useEffect, useRef } from 'react';

interface CarouselProps {
  children: React.ReactNode[];
  className?: string;
}

const AUTO_PLAY_INTERVAL = 4000; // 4 seconds

const Carousel: React.FC<CarouselProps> = ({ children, className = '' }) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = React.Children.count(children);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = (idx: number) => {
    setCurrent((idx + total) % total);
  };

  // Auto-play effect
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, AUTO_PLAY_INTERVAL);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, isPaused, total]);

  // Pause on hover handlers
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        {React.Children.map(children, (child, idx) => (
          <div className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
      {/* Left Arrow */}
      <button
        aria-label="Previous slide"
        onClick={() => goTo(current - 1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow p-2 z-10"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
      </button>
      {/* Right Arrow */}
      <button
        aria-label="Next slide"
        onClick={() => goTo(current + 1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow p-2 z-10"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
      </button>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {Array.from({ length: total }).map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-yellow-500' : 'bg-gray-300'} transition-colors`}
            onClick={() => goTo(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel; 