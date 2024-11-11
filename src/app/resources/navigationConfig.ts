// src/app/config/navigationConfig.ts

import { gallery } from '@/app/resources'; // Asegúrate de que esto esté correctamente importado

/**
 * @typedef {Object} SubNavItem
 * @property {string} label - Texto a mostrar en el submenú.
 * @property {string} href - Ruta a la que enlaza el submenú.
 */
export interface SubNavItem {
    label: string;
    href: string;
}

/**
 * @typedef {Object} NavItem
 * @property {string} key - Clave única para el elemento de navegación.
 * @property {string} label - Texto a mostrar en el menú de navegación.
 * @property {string} href - Ruta a la que enlaza el elemento.
 * @property {string} icon - Nombre del icono a mostrar.
 * @property {SubNavItem[]} [subItems] - Sub-elementos para menús desplegables.
 */
export interface NavItem {
    key: string;
    label: string;
    href: string;
    icon: string;
    subItems?: { label: string; href: string }[];
}

/** @type {NavItem[]} */
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
    {
        key: 'contact',
        label: 'Contact',
        href: '/contact',
        icon: 'contact',
    }
];
