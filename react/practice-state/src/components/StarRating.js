import React, { useState } from 'react';
import Star from './Star';

const StarRating = () => {
    // Initialize a 'courseRating' state
    const [courseRating, setCourseRating] = useState(0);



    // Write a function that returns 5 Star components
    const renderStars = () => {
        let stars = [];
        const maxRating = 5;
        for (let i = 0; i < maxRating; i++) {
            stars.push(
                <Star
                    isSelected = {courseRating > i}
                    setRating = {() => handleSetRating(i + 1)}
                    key={i}
                />
            );
        }
        return stars;
    }

    // Write an event handler that updates the courseRating state.
    // Pass the function to a Star component via props
    const handleSetRating = (rating) => {
        if (courseRating === rating) {
            setCourseRating(0);
        } else {
            setCourseRating(rating);
        }
    }

    return (
        <ul className='course--stars'>
            {renderStars()}
        </ul>
    );
}

export default StarRating;