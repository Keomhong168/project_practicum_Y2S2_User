// src/components/StarRating.js
import React from 'react'; // No longer need useState
import Star from './Star';

function StarRating({ rating, setRating }) {
    // The hover state has been removed to disable the hover effect.
    return (
        <div className="rating-stars mb-4 text-center">
            {[1, 2, 3, 4, 5].map((starIndex) => (
                <Star
                    key={starIndex}
                    starId={starIndex}
                    rating={rating}
                    // UPDATED: This logic now allows for deselecting.
                    // If the clicked star is the same as the current rating, it resets the rating to 0.
                    // Otherwise, it sets the new rating.
                    onClick={() => setRating(starIndex === rating ? 0 : starIndex)}
                />
            ))}
        </div>
    );
}

export default StarRating;