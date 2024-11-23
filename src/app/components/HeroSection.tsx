// src/app/home/components/HeroSection.tsx
'use client'; // Solo si este componente necesita interactuar con el cliente

import React from 'react';
import { Heading, Flex, Text, Button, Avatar, RevealFx, Icon } from '@/once-ui/components';
import headingStyles from '@/app/components/headingStyles.module.scss';
import styles from '@/app/home.module.scss';

interface HeroSectionProps {
    titleLine1: string;
    titleLine2: string;
    subline: string | JSX.Element;
    about: {
        avatar: {
            display: boolean;
        };
    };
    person: {
        avatar: string;
        name: string;
    };
}

const HeroSection: React.FC<HeroSectionProps> = ({ titleLine1, titleLine2, subline, about, person }) => {
    return (
        <section className={styles.heroSection}>
            <Flex
                direction="column"
                maxWidth="s"
                gap="m"
                alignItems="center">
                <RevealFx translateY="4">
                    <Heading
                        wrap="balance"
                        variant="display-strong-l"
                        className={headingStyles.twoLinesHeading}
                        as="h1"
                    >
                        <Flex direction="column" alignItems="center">
                            <span className={headingStyles.line1}>{titleLine1}</span>
                            <span className={headingStyles.line2}>{titleLine2}</span>
                        </Flex>
                    </Heading>
                </RevealFx>
                <RevealFx translateY="8">
                    <Text
                        wrap="balance"
                        onBackground="neutral-weak"
                        variant="body-default-l"
                        className={styles.sublineText}
                    >
                        {subline}
                    </Text>
                </RevealFx>
                <RevealFx translateY="12">
                    <Flex gap="m">
                        <Button
                            data-border="rounded"
                            href="/about"
                            variant="tertiary"
                            suffixIcon="chevronRight"
                            size="m">
                            <Flex
                                gap="8"
                                alignItems="center">
                                {about.avatar.display && (
                                    <Avatar
                                        className={styles.avatarMargin}
                                        src={person.avatar}
                                        size="m" />
                                )}
                                About me
                            </Flex>
                        </Button>
                        <Button
                            data-border="rounded"
                            href="/gallery"
                            variant="tertiary"
                            suffixIcon="chevronRight"
                            size="m">
                            <Flex
                                gap="8"
                                alignItems="center">
                                <Icon name="gallery" />
                                Portfolio
                            </Flex>
                        </Button>
                    </Flex>
                </RevealFx>
            </Flex>
        </section>
    );
};

export default HeroSection;
