'use client';
import React, { useEffect, useState } from 'react';
import { Flex, Button } from '@/once-ui/components';
import ReviewerCard from './ReviewerCard';

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

  useEffect(() => {
    if (autoPlay && reviewers.length > 1) {
      const interval = setInterval(() => {
        const nextIndex = (activeIndex + 1) % reviewers.length;
        setActiveIndex(nextIndex);
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, activeIndex, reviewers.length]);

  const handlePrevClick = () => {
    const prevIndex = (activeIndex - 1 + reviewers.length) % reviewers.length;
    setActiveIndex(prevIndex);
  };

  const handleNextClick = () => {
    const nextIndex = (activeIndex + 1) % reviewers.length;
    setActiveIndex(nextIndex);
  };

  if (reviewers.length === 0) {
    return null;
  }

  return (
    <Flex direction="column" alignItems="center" gap="m">
      <Flex alignItems="center" gap="m">
        <Button onClick={handlePrevClick}>Anterior</Button>
        <ReviewerCard {...reviewers[activeIndex]} />
        <Button onClick={handleNextClick}>Siguiente</Button>
      </Flex>
      {/* Indicadores */}
      <Flex gap="s" justifyContent="center" marginTop="s">
        {reviewers.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: activeIndex === index ? 'var(--brand-solid-strong)' : 'var(--neutral-alpha-medium)',
              cursor: 'pointer',
            }}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default ReviewerCardCarousel;
