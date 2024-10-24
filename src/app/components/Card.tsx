// src/components/Card/Card.tsx

import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
    return (
        <div className={`${styles.card} ${className || ''}`}>
            {children}
        </div>
    );
};

export default Card;
