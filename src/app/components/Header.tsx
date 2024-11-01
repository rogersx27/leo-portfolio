"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Flex, ToggleButton } from "@/once-ui/components";
import styles from '@/app/components/Header.module.scss';

import { routes, display } from '@/app/resources';
import { person, home, about, blog, work, gallery } from '@/app/resources';
import useWindowSize from "../hooks/useWindowSize";

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
    const isClient = typeof window !== "undefined";
    const { height: windowHeight } = isClient ? useWindowSize() : { height: undefined };
    const [isGalleryMenuVisible, setGalleryMenuVisible] = useState(false);
    const isDropdownAbove = windowHeight ? windowHeight <= 768 : false;

    useEffect(() => {
        console.log(isDropdownAbove); // Confirma que el valor cambia correctamente
    }, [isDropdownAbove]);

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
                            style={{ padding: '2px 8px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Flex paddingX="0" gap="0" hide="s" justifyContent="center" alignItems="center"> {/* Ajuste de gap y padding */}
                                {home.label}
                            </Flex>
                        </ToggleButton>
                    )}
                    {routes['/about'] && (
                        <ToggleButton
                            prefixIcon="person"
                            href="/about"
                            selected={pathname === "/about"}
                            style={{ padding: '2px 8px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} // Centrado en este botón también
                        >
                            <Flex paddingX="0" hide="s" justifyContent="center" alignItems="center">
                                {about.label}
                            </Flex>
                        </ToggleButton>
                    )}
                    {routes['/work'] && (
                        <ToggleButton
                            prefixIcon="grid"
                            href="/work"
                            selected={pathname.startsWith('/work')}
                            style={{ padding: '4px 8px', height: '30px' }}
                        >
                            <Flex paddingX="1" hide="s">
                                {work.label}
                            </Flex>
                        </ToggleButton>
                    )}
                    {routes['/blog'] && (
                        <ToggleButton
                            prefixIcon="book"
                            href="/blog"
                            selected={pathname.startsWith('/blog')}
                            style={{ padding: '4px 8px' }}
                        >
                            <Flex paddingX="2" hide="s">
                                {blog.label}
                            </Flex>
                        </ToggleButton>
                    )}
                    {/* Menú desplegable de galería */}
                    {routes['/gallery'] && (
                        <div
                            onMouseEnter={() => setGalleryMenuVisible(true)}
                            onMouseLeave={() => setGalleryMenuVisible(false)}
                            className={styles.menuContainer}
                        >
                            <ToggleButton
                                prefixIcon="gallery"
                                href="/gallery"
                                selected={pathname.startsWith('/gallery')}
                                style={{ height: '30px' }}
                            >
                                <Flex paddingX="2" hide="s">
                                    Gallery
                                </Flex>
                            </ToggleButton>
                            <div className={styles.bridge}></div>
                            <div className={`${styles.dropdownMenu} ${isGalleryMenuVisible ? styles.dropdownMenuVisible : ''} ${isDropdownAbove ? styles.dropdownAbove : ''}`}>
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
