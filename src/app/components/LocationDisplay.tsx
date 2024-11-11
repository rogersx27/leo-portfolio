// src/app/components/LocationDisplay.tsx

'use client';

import React from 'react';
import { Flex } from '@/once-ui/components';
import styles from '@/app/components/Header.module.scss';
import { person } from '@/app/resources';

const LocationDisplay: React.FC = () => {
    return (
        <Flex
            hide="s"
            paddingLeft="12"
            fillWidth
            alignItems="center"
            textVariant="body-default-s"
            className={styles.location}
        >
            {person.location}
        </Flex>
    );
};

export default LocationDisplay;
