// src/app/components/Header.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Flex } from '@/once-ui/components';
import styles from '@/app/components/Header.module.scss';

import NavItem from './NavItem';
import useWindowSize from '../hooks/useWindowSize';
import LocationDisplay from './LocationDisplay';
import { navigationItems } from '../resources/navigationConfig';
import { display, person } from '../resources';
import TimeDisplay from './TimeDisplay';

export const Header: React.FC = () => {
    const pathname = usePathname() ?? '';
    const { height: windowHeight } = useWindowSize();
    const [dropdownStates, setDropdownStates] = useState<Record<string, boolean>>({});
    const isDropdownAbove = windowHeight ? windowHeight <= 768 : false;

    useEffect(() => {
        console.log(isDropdownAbove); // Confirm that the value changes correctly
    }, [isDropdownAbove]);

    const handleMouseEnter = (key: string) => {
        setDropdownStates(prev => ({ ...prev, [key]: true }));
    };

    const handleMouseLeave = (key: string) => {
        setDropdownStates(prev => ({ ...prev, [key]: false }));
    };

    return (
        <Flex
            as="header"
            className={styles.header}
            zIndex={9}
            fillWidth
            padding="8"
            justifyContent="center"
        >
            {/* Left Section */}
            <Flex className={styles.leftSection}>
                { display.location && <LocationDisplay /> }
            </Flex>

            {/* Navigation Section */}
            <Flex
                className={styles.navSection}
                background="surface"
                border="neutral-medium"
                borderStyle="solid-1"
                radius="m-4"
                shadow="l"
                padding="4"
                justifyContent="center"
            >
                <Flex gap="4" textVariant="body-default-s" className={styles.navContainer}>
                    {navigationItems.map(item => {
                        const isSelected =
                            item.href === '/'
                                ? pathname === item.href
                                : pathname.startsWith(item.href);
                        const hasSubItems = !!item.subItems && item.subItems.length > 0;
                        const isDropdownVisible = dropdownStates[item.key] || false;

                        return (
                            <NavItem
                                key={item.key}
                                label={item.label}
                                href={item.href}
                                icon={item.icon}
                                isSelected={isSelected}
                                subItems={item.subItems}
                                isDropdownAbove={isDropdownAbove}
                                isDropdownVisible={isDropdownVisible}
                                onMouseEnter={() => handleMouseEnter(item.key)}
                                onMouseLeave={() => handleMouseLeave(item.key)}
                            />
                        );
                    })}
                </Flex>
            </Flex>

            {/* Right Section */}
            <Flex className={styles.rightSection}>
                {display.time && <TimeDisplay timeZone={person.location} />}
            </Flex>
        </Flex>
    );
};

