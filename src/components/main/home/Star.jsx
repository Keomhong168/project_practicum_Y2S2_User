// src/components/Star.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';

// Make sure to install fontawesome dependencies:
// npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/react-fontawesome

function Star({ starId, rating, onMouseEnter, onMouseLeave, onClick }) {
    const icon = starId <= rating ? faSolidStar : faRegularStar;
    const color = starId <= rating ? '#ffc107' : '#ccc';

    return (
        <FontAwesomeIcon
            icon={icon}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            style={{ cursor: 'pointer', color: color, fontSize: '2.5rem', marginRight: '0.5rem' }}
        />
    );
}

export default Star;