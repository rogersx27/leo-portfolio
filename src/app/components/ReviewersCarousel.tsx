import React from 'react';
import Carousel from './Carousel';
import ReviewerCard from './ReviewerCard';
import reviewersData from '@/app/resources/reviewers_info.json';

const ReviewersCarousel = () => {
    return (
        <Carousel slidesToShow={2}>
            {reviewersData.map((reviewer, index) => (
                <ReviewerCard
                    key={index}
                    username={reviewer.username}
                    reviewer_country={reviewer.reviewer_country}
                    comment={reviewer.comment}
                    value={reviewer.value}
                    user_image={reviewer.user_image}
                />
            ))}
        </Carousel>
    );
};

export default ReviewersCarousel;
