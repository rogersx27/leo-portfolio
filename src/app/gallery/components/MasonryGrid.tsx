"use client";

import Masonry from 'react-masonry-css';
import { SmartImage, Text, Flex } from "@/once-ui/components";
import { gallery } from "@/app/resources";
import styles from "@/app/gallery/Gallery.module.scss";

export default function MasonryGrid() {
    const breakpointColumnsObj = {
        default: 4, // En pantallas grandes mostramos 4 columnas
        1440: 3,    // En pantallas de tamaño medio mostramos 3 columnas
        1024: 2,    // En pantallas tablet mostramos 2 columnas
        560: 1      // En móviles mostramos 1 columna
    };

    // Ordenar las imágenes para que las que tienen is_best_seller: true aparezcan primero
    const sortedImages = [...gallery.images].sort((a, b) => (b.is_best_seller ? 1 : 0) - (a.is_best_seller ? 1 : 0));

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles.masonryGrid}
            columnClassName={styles.masonryGridColumn}
        >
            {sortedImages.map((image, index) => (
                <div key={index} className={styles.gridItem}>
                    {/* Mostrar el título */}
                    <Flex direction="column" alignItems="center" marginTop="s">
                        <Text className={styles.imageTitle}>
                            {image.title}
                        </Text>
                        {/* Mostrar la categoría solo si es best seller */}
                        {image.is_best_seller && (
                            <Text className={styles.imageCategory}>
                                {image.category}
                            </Text>
                        )}
                    </Flex>
                    <SmartImage
                        radius="m"
                        aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "9 / 16"}
                        src={image.src}
                        alt={image.alt}
                    />
                </div>
            ))}
        </Masonry>
    );
}
