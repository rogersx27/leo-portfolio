import React from 'react';
import Carousel from './ReviewerCardCarousel';
import ReviewerCard from './ReviewerCard';
import reviewersData from '@/app/resources/reviewers_info.json';
import ReviewerCardCarousel from './ReviewerCardCarousel';

const ReviewersCarousel = () => {
    return (
        <ReviewerCardCarousel
            reviewers={reviewersData}
            autoPlay={true}
            autoPlayInterval={5000}
        />
    );
};

export default ReviewersCarousel;
