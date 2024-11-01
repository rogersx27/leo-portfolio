'use client';

import { Flex, RevealFx, Scroller, SmartImage } from "@/once-ui/components";
import { useEffect, useState } from "react";

interface Image {
    src: string;
    alt: string;
}

interface CarouselProps {
    images: Image[];
    indicator?: 'line' | 'thumbnail';
    aspectRatio?: string;
    sizes?: string;
    autoPlay?: boolean;  // Nuevo prop para activar la reproducción automática
    autoPlayInterval?: number; // Intervalo de tiempo para la reproducción automática
}

export const ImageCarousel: React.FC<CarouselProps> = ({
    images = [],
    indicator = 'line',
    aspectRatio = '16 / 9',
    sizes,
    autoPlay = false,         // Valor predeterminado para autoPlay
    autoPlayInterval = 3000,  // Intervalo predeterminado (3 segundos)
}) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Manejo del temporizador automático si autoPlay está activado
    useEffect(() => {
        if (autoPlay && images.length > 1) {
            const interval = setInterval(() => {
                setIsTransitioning(false);
                const nextIndex = (activeIndex + 1) % images.length;
                handleControlClick(nextIndex);
            }, autoPlayInterval);

            return () => clearInterval(interval);
        }
    }, [autoPlay, autoPlayInterval, activeIndex, images.length]);

    const handleImageClick = () => {
        if (images.length > 1) {
            setIsTransitioning(false);
            const nextIndex = (activeIndex + 1) % images.length;
            handleControlClick(nextIndex);
        }
    };

    const handleControlClick = (index: number) => {
        if (index !== activeIndex) {
            setIsTransitioning(false);
            setTimeout(() => {
                setActiveIndex(index);
                setIsTransitioning(true);
            }, 500);
        }
    };

    if (images.length === 0) {
        return null;
    }

    return (
        <Flex fillWidth gap="12" direction="column">
            <Flex onClick={handleImageClick}>
                <RevealFx
                    style={{ width: '100%' }}
                    trigger={isTransitioning}
                    translateY="16"
                    speed="fast">
                    <SmartImage
                        sizes={sizes}
                        priority
                        tabIndex={0}
                        radius="l"
                        alt={images[activeIndex]?.alt}
                        aspectRatio={aspectRatio}
                        src={images[activeIndex]?.src}
                        style={{
                            border: '1px solid var(--neutral-alpha-weak)',
                            ...(images.length > 1 && {
                                cursor: 'pointer',
                            }),
                        }}
                    />
                </RevealFx>
            </Flex>
            {images.length > 1 && (
                <>
                    {indicator === 'line' ? (
                        <Flex
                            gap="4"
                            paddingX="s"
                            fillWidth
                            justifyContent="center">
                            {images.map((_, index) => (
                                <Flex
                                    key={index}
                                    onClick={() => handleControlClick(index)}
                                    style={{
                                        background:
                                            activeIndex === index
                                                ? 'var(--neutral-on-background-strong)'
                                                : 'var(--neutral-alpha-medium)',
                                        cursor: 'pointer',
                                        transition: 'background 0.3s ease',
                                    }}
                                    fillWidth
                                    height="2"></Flex>
                            ))}
                        </Flex>
                    ) : (
                        <Scroller fillWidth gap="4">
                            {images.map((image, index) => (
                                <Flex
                                    key={index}
                                    style={{
                                        border:
                                            activeIndex === index
                                                ? '2px solid var(--brand-solid-strong)'
                                                : 'none',
                                        cursor: 'pointer',
                                        borderRadius: 'var(--radius-m-nest-4)',
                                        transition: 'border 0.3s ease',
                                    }}
                                    padding="4"
                                    width="80"
                                    height="80">
                                    <SmartImage
                                        alt={image.alt}
                                        aspectRatio="1 / 1"
                                        sizes="120px"
                                        src={image.src}
                                        onClick={() => handleControlClick(index)}
                                        style={{
                                            cursor: 'pointer',
                                            borderRadius: 'var(--radius-m)',
                                            transition: 'background 0.3s ease',
                                        }} />
                                </Flex>
                            ))}
                        </Scroller>
                    )}
                </>
            )}
        </Flex>
    );
};

export default ImageCarousel;
