'use client';
import React, { useEffect, useState, useRef } from 'react';
import ReviewerCard from './ReviewerCard';
import styles from './ReviewerCardCarousel.module.scss';

interface Reviewer {
  username: string;
  reviewer_country: string;
  comment: string;
  value: number;
  user_image: string | null;
  created_at: string;
}

interface CarouselProps {
  reviewers: Reviewer[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const ReviewerCardCarousel: React.FC<CarouselProps> = ({
  reviewers = [],
  autoPlay = false,
  autoPlayInterval = 5000,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [exiting, setExiting] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    if (autoPlay && reviewers.length > 1) {
      const interval = setInterval(() => {
        handleNext();
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, activeIndex, reviewers.length]);

  const handleNext = () => {
    setExiting(activeIndex); // Marca la tarjeta actual como saliente
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviewers.length);
      setExiting(null); // Reinicia el estado saliente
    }, 500); // Duración de la animación
  };

  const handlePrev = () => {
    setExiting(activeIndex);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + reviewers.length) % reviewers.length);
      setExiting(null);
    }, 500);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) {
        handleNext(); // Deslizó hacia la izquierda (siguiente)
      } else if (diff < -50) {
        handlePrev(); // Deslizó hacia la derecha (anterior)
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (reviewers.length === 0) {
    return null;
  }

  return (
    <div
      className={styles.carouselContainer}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.carouselInner}>
        {/* Tarjeta anterior difuminada */}
        <div
          className={`${styles.cardWrapper} ${styles.prevCard}`}
          onClick={handlePrev}
        >
          <ReviewerCard
            {...reviewers[(activeIndex - 1 + reviewers.length) % reviewers.length]}
          />
        </div>

        {/* Tarjeta actual con animación */}
        <div
          className={`${styles.cardWrapper} ${exiting === activeIndex ? styles.exitingCard : styles.activeCard
            }`}
        >
          <ReviewerCard {...reviewers[activeIndex]} />
        </div>

        {/* Tarjeta siguiente difuminada */}
        <div
          className={`${styles.cardWrapper} ${styles.nextCard}`}
          onClick={handleNext}
        >
          <ReviewerCard
            {...reviewers[(activeIndex + 1) % reviewers.length]}
          />
        </div>
      </div>


      <div className={styles.indicators}>
        {reviewers.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`${styles.indicator} ${activeIndex === index ? styles.active : ''
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewerCardCarousel;
