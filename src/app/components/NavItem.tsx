// src/app/components/NavItem.tsx

'use client';

import React from 'react';
import { ToggleButton } from '@/once-ui/components';
import { Flex } from '@/once-ui/components';
import styles from '@/app/components/Header.module.scss';
import DropdownMenu from './DropdownMenu';

interface NavItemProps {
    label: string;
    href: string;
    icon: string;
    isSelected: boolean;
    subItems?: { label: string; href: string }[];
    isDropdownAbove: boolean;
    isDropdownVisible: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
    label,
    href,
    icon,
    isSelected,
    subItems,
    isDropdownAbove,
    isDropdownVisible,
    onMouseEnter,
    onMouseLeave,
}) => {
    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={styles.menuContainer}
        >
            <ToggleButton
                prefixIcon={icon}
                href={href}
                selected={isSelected}
                className={styles.toggleButton}
            >
                <Flex paddingX="0" hide="s" justifyContent="center" alignItems="center">
                    {label}
                </Flex>
            </ToggleButton>
            {subItems && (
                <DropdownMenu
                    isVisible={isDropdownVisible}
                    isAbove={isDropdownAbove}
                    items={subItems}
                />
            )}
        </div>
    );
};

export default NavItem;
