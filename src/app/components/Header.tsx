// src/app/components/Header.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Flex, ToggleButton } from '@/once-ui/components';
import styles from './Header.module.scss';

import { navigationItems } from '../resources';

import DropdownMenu from './DropdownMenu';
import LocationDisplay from './LocationDisplay';
import TimeDisplay from './TimeDisplay';
import useWindowSize from '../hooks/useWindowSize';
import { display, person } from '../resources';

export const Header: React.FC = () => {
    const pathname = usePathname() ?? '';
    const { height: windowHeight } = useWindowSize();
    const [visibleDropdown, setVisibleDropdown] = useState<string | null>(null);
    const isDropdownAbove = windowHeight ? windowHeight <= 768 : false;

    useEffect(() => {
        console.log('Is dropdown above:', isDropdownAbove);
    }, [isDropdownAbove]);

    const handleMouseEnter = (key: string) => {
        setVisibleDropdown(key);
    };

    const handleMouseLeave = () => {
        setVisibleDropdown(null);
    };

    return (
        <header className={styles.position}>
            <Flex className={styles.headerContainer}>
                {/* Sección Izquierda */}
                <Flex className={styles.leftSection}>
                    { display.location && <LocationDisplay />}
                </Flex>

                {/* Sección de Navegación */}
                <Flex className={styles.navSection}>
                    <div className={styles.navContainer}>
                        {navigationItems.map(item => {
                            const isSelected =
                                item.href === '/'
                                    ? pathname === item.href
                                    : pathname.startsWith(item.href);
                            const hasSubItems = !!item.subItems && item.subItems.length > 0;
                            const isVisible = visibleDropdown === item.key;

                            return (
                                <div
                                    key={item.key}
                                    className={styles.menuContainer}
                                    onMouseEnter={() => handleMouseEnter(item.key)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <ToggleButton
                                        prefixIcon={item.icon}
                                        href={item.href}
                                        selected={isSelected}
                                        className={`${styles.toggleButton} ${isSelected ? styles.selected : ''}`}
                                    >
                                        {item.label}
                                    </ToggleButton>
                                    {hasSubItems && (
                                        <>
                                            <div className={styles.bridge}></div>
                                            <DropdownMenu
                                                isVisible={isVisible}
                                                isAbove={isDropdownAbove}
                                                items={item.subItems!}
                                            />
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </Flex>

                {/* Sección Derecha */}
                <Flex className={styles.rightSection}>
                    {display.time && <TimeDisplay timeZone={person.location} />}
                </Flex>
            </Flex>
        </header>
    );
};

