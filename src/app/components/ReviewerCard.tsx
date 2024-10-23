import React from 'react';
import { Flex, Avatar, Text } from '@/once-ui/components'; // Importar componentes necesarios
import styles from './ReviewerCard.module.css'; // Asegúrate de tener un archivo CSS o puedes hacerlo inline si prefieres.

const ReviewerCard = ({ username, reviewer_country, comment, value }) => {
  return (
    <Flex direction="column" alignItems="center" gap="m" className={styles.card}>
      <Text variant="heading-small" className={styles.username}>{username}</Text>
      <Text variant="body-small" className={styles.country}>{reviewer_country}</Text>
      <Text variant="body-default" wrap="balance" className={styles.comment}>{comment}</Text>
      <Text variant="body-small" className={styles.rating}>Rating: {value}/5</Text>
    </Flex>
  );
};

export default ReviewerCard;
