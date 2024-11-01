'use client';
import { Flex, RevealFx, Scroller, SmartImage, Button } from "@/once-ui/components";
import ImageModal from './ImageModal';
import ExpandedImage from './ExpandedImage';
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
    autoPlay?: boolean;
    autoPlayInterval?: number;
}

export const ImageCarousel: React.FC<CarouselProps> = ({
    images = [],
    indicator = 'line',
    aspectRatio = '16 / 9',
    sizes,
    autoPlay = false,
    autoPlayInterval = 3000,
}) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Bloquear el scroll cuando el modal está abierto
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    if (images.length === 0) {
        return null;
    }

    return (
        <Flex fillWidth gap="12" direction="column">
            <Flex position="relative" onClick={handleImageClick}>
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

                {/* Botón de expansión */}
                <Button
                    onClick={(e) => {
                        e.stopPropagation();
                        openModal();
                    }}
                    variant="secondary"
                    style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        zIndex: 2,
                        opacity: 0.8,
                        padding: '0.5rem 1rem',
                    }}
                >
                    Expand
                </Button>
            </Flex>

            {/* Modal para mostrar la imagen ampliada */}
            <ImageModal isOpen={isModalOpen} onClose={closeModal}>
                <ExpandedImage
                    src={images[activeIndex]?.src}
                    alt={images[activeIndex]?.alt}
                    sizes="100vw"
                    style={{
                        maxWidth: '90vw',
                        maxHeight: '90vh',
                    }}
                />
            </ImageModal>

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
