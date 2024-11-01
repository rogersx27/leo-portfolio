"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Flex, ToggleButton } from "@/once-ui/components";
import styles from '@/app/components/Header.module.scss';

import { routes, display } from '@/app/resources';
import { person, home, about, blog, work, gallery } from '@/app/resources';

type TimeDisplayProps = {
    timeZone: string;
    locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = 'en-GB' }) => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            };
            const timeString = new Intl.DateTimeFormat(locale, options).format(now);
            setCurrentTime(timeString);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, [timeZone, locale]);

    return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
    const pathname = usePathname() ?? '';
    const [isGalleryMenuVisible, setGalleryMenuVisible] = useState(false);
    const [isDropdownAbove, setDropdownAbove] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // Check if the window height is below a certain threshold
            setDropdownAbove(window.innerHeight < 600); // Ajusta el valor según tus necesidades
        };

        // Inicializa el estado al cargar
        handleResize();

        // Agrega el listener para manejar cambios de tamaño
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Flex
            style={{ height: 'fit-content' }}
            className={styles.position}
            as="header"
            zIndex={9}
            fillWidth padding="8"
            justifyContent="center"
        >
            <Flex
                hide="s"
                paddingLeft="12"
                fillWidth
                alignItems="center"
                textVariant="body-default-s"
            >
                {display.location && <>{person.location}</>}
            </Flex>
            <Flex
                background="surface"
                border="neutral-medium"
                borderStyle="solid-1"
                radius="m-4"
                shadow="l"
                padding="4"
                justifyContent="center"
            >
                <Flex gap="4" textVariant="body-default-s">
                    {routes['/'] && (
                        <ToggleButton
                            prefixIcon="home"
                            href="/"
                            selected={pathname === "/"}
                        >
                            <Flex paddingX="2" hide="s">
                                {home.label}
                            </Flex>
                        </ToggleButton>
                    )}
                    {routes['/about'] && (
                        <ToggleButton
                            prefixIcon="person"
                            href="/about"
                            selected={pathname === "/about"}
                        >
                            <Flex paddingX="2" hide="s">
                                {about.label}
                            </Flex>
                        </ToggleButton>
                    )}
                    {routes['/work'] && (
                        <ToggleButton
                            prefixIcon="grid"
                            href="/work"
                            selected={pathname.startsWith('/work')}
                        >
                            <Flex paddingX="2" hide="s">
                                {work.label}
                            </Flex>
                        </ToggleButton>
                    )}
                    {routes['/blog'] && (
                        <ToggleButton
                            prefixIcon="book"
                            href="/blog"
                            selected={pathname.startsWith('/blog')}
                        >
                            <Flex paddingX="2" hide="s">
                                {blog.label}
                            </Flex>
                        </ToggleButton>
                    )}
                    {/* Menú desplegable de galería */}
                    {routes['/gallery'] && (
                        <div
                            onMouseEnter={() => setGalleryMenuVisible(true)} // Mostrar el menú al pasar el mouse sobre el botón o puente
                            onMouseLeave={() => setGalleryMenuVisible(false)} // Ocultar el menú al salir
                            className={styles.menuContainer}
                        >
                            <ToggleButton
                                prefixIcon="gallery"
                                href="/gallery"
                                selected={pathname.startsWith('/gallery')}
                            >
                                <Flex paddingX="2" hide="s">
                                    Gallery
                                </Flex>
                            </ToggleButton>
                            <div className={styles.bridge}></div>
                            {/* Puente invisible entre el botón y el menú */}
                            {isGalleryMenuVisible && <div className={styles.bridge}></div>}
                            <div className={`${styles.dropdownMenu} ${isGalleryMenuVisible ? styles.dropdownMenuVisible : ''}`}>
                                {gallery.images.map((image, index) => (
                                    image.is_best_seller && (
                                        <a key={index} href={image.src} className={styles.dropdownItem}>
                                            {image.category}
                                        </a>
                                    )
                                ))}
                            </div>
                        </div>
                    )}

                </Flex>
            </Flex>
            <Flex
                hide="s"
                paddingRight="12"
                fillWidth
                justifyContent="flex-end"
                alignItems="center"
                textVariant="body-default-s"
            >
                {display.time && <TimeDisplay timeZone={person.location} />}
            </Flex>
        </Flex>
    );
};
