// src/app/components/DropdownMenu.tsx

'use client';

import React, { useRef, useEffect } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';

interface DropdownMenuProps {
    isVisible: boolean;
    isAbove: boolean;
    items: { label: string; href: string }[];
    onClose?: () => void; // Opcional: para cerrar el dropdown al hacer clic fuera
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isVisible, isAbove, items, onClose }) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose?.();
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose?.();
            }
        };

        if (isVisible && onClose) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isVisible, onClose]);

    return (
        <div
            ref={menuRef}
            className={`${styles.dropdownMenu} ${isVisible ? styles.dropdownMenuVisible : ''
                } ${isAbove ? styles.dropdownAbove : ''}`}
            role="menu"
            aria-hidden={!isVisible}
        >
            {items.map((item, index) => (
                <Link key={index} href={item.href} className={styles.dropdownItem} role="menuitem">
                    <span className="dropdownText">{item.label}</span>
                </Link>
            ))}
        </div>
    );
};

export default DropdownMenu;
