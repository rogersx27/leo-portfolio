// ReviewerCardCarousel.tsx
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
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    if (autoPlay && reviewers.length > 1) {
      const interval = setInterval(() => {
        const nextIndex = (activeIndex + 1) % reviewers.length;
        setActiveIndex(nextIndex);
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, activeIndex, reviewers.length]);

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % reviewers.length;
    setActiveIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + reviewers.length) % reviewers.length;
    setActiveIndex(prevIndex);
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
        // Deslizó hacia la izquierda (siguiente)
        handleNext();
      } else if (diff < -50) {
        // Deslizó hacia la derecha (anterior)
        handlePrev();
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

        {/* Tarjeta actual */}
        <div className={styles.cardWrapper}>
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

      {/* Indicadores */}
      <div className={styles.indicators}>
        {reviewers.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`${styles.indicator} ${
              activeIndex === index ? styles.active : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewerCardCarousel;
