import React from 'react';
import { Flex, Avatar, Text } from '@/once-ui/components';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import styles from './ReviewerCard.module.scss';
import Flag from 'react-world-flags';
import { format } from 'date-fns';
interface ReviewerCardProps {
  username: string;
  reviewer_country: string;
  comment: string;
  value: number;
  user_image: string | null;
  created_at: string;
}

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const ReviewerCard: React.FC<ReviewerCardProps> = ({
  username,
  reviewer_country, // Aunque ya no lo mostramos, lo dejamos en las props por si se necesita en el futuro
  comment,
  value,
  user_image,
  created_at,
}) => {
  // Función para renderizar estrellas basadas en la calificación
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className={styles.rating} aria-label={`Qualification ${rating} Stars`}>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} style={{ color: '#FFD700' }} />
        ))}
        {halfStar && <FaStarHalfAlt style={{ color: '#FFD700' }} />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} style={{ color: '#FFD700' }} />
        ))}
      </div>
    );
  };


  const month = new Date(created_at).toLocaleString('default', { month: 'long' });
  const day = new Date(created_at).getDate();
  const year = new Date(created_at).getFullYear();

  return (
    <div className={styles.card}>
      {/* Logo en la esquina superior derecha */}
      <div
        className={styles.fiverrLogo}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 121.34831"
          height="20"
          width="50"
          fill="currentColor"
        >
          {/* Aquí van los paths del logo */}
          <path
            d="M 366.74157,58.876401 h -13.93258 c -8.98877,0 -13.93259,6.741572 -13.93259,18.426965 V 119.10112 H 311.91011 V 58.876401 h -11.23595 c -8.98877,0 -13.93259,6.741572 -13.93259,18.426965 V 119.10112 H 259.77528 V 36.404491 h 26.96629 v 12.58427 c 4.49439,-9.887641 10.33708,-12.58427 19.32585,-12.58427 h 32.80898 v 12.58427 c 4.49439,-9.887641 10.33708,-12.58427 19.32585,-12.58427 h 8.98876 z M 253.48315,84.044939 h -55.73034 c 1.34832,9.438202 7.19101,14.382022 16.62922,14.382022 7.19101,0 12.13483,-3.146067 13.93258,-8.089887 l 23.82022,6.741572 c -5.84269,14.382024 -20.22471,22.921344 -37.7528,22.921344 -29.21349,0 -42.69663,-22.921344 -42.69663,-42.696624 0,-19.325842 11.68539,-42.247189 40.89887,-42.247189 31.01124,0 41.34832,23.370785 41.34832,40.898875 0,4.044943 0,6.292134 -0.44944,8.089887 z M 227.86517,68.314603 c -0.44944,-7.191011 -5.84269,-13.483146 -14.83146,-13.483146 -8.53932,0 -13.48314,3.595505 -15.2809,13.483146 z M 124.94383,119.10112 h 23.37078 L 177.97753,36.85393 H 151.01124 L 136.62922,84.943815 122.2472,36.404491 H 95.28091 Z m -109.662917,0 H 41.797766 V 58.876401 H 67.415742 V 119.10112 H 93.932595 V 36.404491 H 41.797766 v -4.94382 c 0,-5.393258 4.044944,-8.988763 9.88764,-8.988763 H 67.415742 V 0 H 47.640462 C 28.31462,0 15.280913,12.134829 15.280913,29.662919 v 6.741572 H 0 v 22.47191 h 15.280913 z"
            fill="#ffffff"
          />
          <path
            d="m 383.37078,121.34831 c 8.98877,0 16.62922,-7.64045 16.62922,-16.62921 0,-8.988768 -7.64045,-16.629217 -16.62922,-16.629217 -8.98876,0 -16.62921,7.640449 -16.62921,16.629217 0,8.98876 7.64045,16.62921 16.62921,16.62921 z"
            fill="#1dbf73"
          />
        </svg>
      </div>

      {/* Avatar */}
      <div className={styles.avatarRatingContainer}>
        <Avatar
          size="l"
          className={styles.avatar}
          src={user_image ? `/images/reviewers/${user_image}` : '/images/reviewers/default-avatar.png'}
        />
        <div className={styles.username}>
          <Text>{username}</Text>
          {reviewer_country && <Flag code={reviewer_country} className={styles.flag} aria-label={`País: ${reviewer_country}`} />}
        </div>
        {renderStars(value)}
      </div>

      {/* Comentario */}
      <div className={styles.content}>
        <Text className={styles.comment}>{comment}</Text>
      </div>

      {/* Fecha */}
      <Text className={styles.date} as="time" dateTime={created_at}>
        {capitalize(format(new Date(created_at), 'MMMM d, yyyy'))}
      </Text>
    </div>
  );
};

export default ReviewerCard;
