// src/app/components/DropdownMenu.tsx

'use client';

import React from 'react';
import styles from '@/app/components/Header.module.scss';
import Link from 'next/link';

interface DropdownMenuProps {
    isVisible: boolean;
    isAbove: boolean;
    items: { label: string; href: string }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isVisible, isAbove, items }) => {
    return (
        <div
            className={`${styles.dropdownMenu} ${isVisible ? styles.dropdownMenuVisible : ''
                } ${isAbove ? styles.dropdownAbove : ''}`}
        >
            {items.map((item, index) => (
                <Link key={index} href={item.href} className={styles.dropdownItem}>
                    {item.label}
                </Link>
            ))}
        </div>
    );
};

export default DropdownMenu;
