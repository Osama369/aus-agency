'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const autoMoveIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const itemsRef = useRef<HTMLDivElement[]>([]);
    const indicatorsRef = useRef<HTMLButtonElement[]>([]);

    const updateCarousel = useCallback((index: number) => {
        itemsRef.current.forEach((item, i) => {
            item.classList.toggle('hidden', i !== index);
        });
        indicatorsRef.current.forEach((indicator, i) => {
            indicator.setAttribute('aria-current', i === index ? 'true' : 'false');
        });
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsRef.current.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + itemsRef.current.length) % itemsRef.current.length);
    }, []);

    const startAutoMove = useCallback(() => {
        autoMoveIntervalRef.current = setInterval(nextSlide, 2000);
    }, [nextSlide]);

    const stopAutoMove = useCallback(() => {
        if (autoMoveIntervalRef.current) {
            clearInterval(autoMoveIntervalRef.current);
        }
    }, []);

    useEffect(() => {
        updateCarousel(currentIndex);
    }, [currentIndex, updateCarousel]);

    useEffect(() => {
        startAutoMove();
        return () => {
            stopAutoMove();
        };
    }, [startAutoMove, stopAutoMove]);

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="mt-8">
                <h2 className="text-center mt-6 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                    Projects
                </h2>
            </div>

            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg custom-height">
                {/* Items */}
                {['/services/gymapp.png', '/services/expensapp.png', '/services/ecommerceapp.png'].map((src, index) => (
                    <div
                        key={index}
                        className="hidden duration-700 ease-in-out"
                        data-carousel-item
                        ref={(el) => {
                            if (el) itemsRef.current[index] = el;
                        }}
                    >
                        <Image
                            src={src}
                            width={800}
                            height={800}
                            className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {[...Array(3)].map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current={index === currentIndex ? 'true' : 'false'}
                        onClick={() => setCurrentIndex(index)}
                        ref={(el) => {
                            if (el) indicatorsRef.current[index] = el;
                        }}
                    ></button>
                ))}
            </div>
            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
                onClick={prevSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
                onClick={nextSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Carousel;
