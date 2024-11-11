// src/app/config/navigationConfig.ts

import { routes, gallery } from '@/app/resources';

export interface SubNavItem {
    label: string;
    href: string;
}

export interface NavItem {
    key: string;
    label: string;
    href: string;
    icon: string;
    subItems?: SubNavItem[];
}

export const navigationItems: NavItem[] = [
    {
        key: 'home',
        label: 'Home',
        href: '/',
        icon: 'home',
    },
    {
        key: 'about',
        label: 'About',
        href: '/about',
        icon: 'person',
    },
    {
        key: 'gallery',
        label: 'Portfolio',
        href: '/gallery',
        icon: 'gallery',
        subItems: gallery.images
            .filter(image => image.is_best_seller)
            .map(image => ({
                label: image.category,
                href: image.src,
            })),
    },
];
