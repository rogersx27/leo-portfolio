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

    // Ordenar las imágenes para que las destacadas aparezcan primero
    const sortedImages = [...gallery.images].sort((a, b) => {
        if (a.is_best_seller && !b.is_best_seller) return -1;
        if (!a.is_best_seller && b.is_best_seller) return 1;
        if (a.offert_alert && !b.offert_alert) return -1;
        if (!a.offert_alert && b.offert_alert) return 1;
        return 0;
    });

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles.masonryGrid}
            columnClassName={styles.masonryGridColumn}
        >
            {sortedImages.map((image, index) => (
                <div key={index} className={styles.gridItem}>
                    {/* Mostrar el título y categoría */}
                    <Flex direction="column" alignItems="center" marginTop="s">
                        <Text className={styles.imageTitle}>
                            {image.title}
                        </Text>
                        {image.is_best_seller && (
                            <Text className={styles.imageCategory}>
                                {image.category}
                            </Text>
                        )}
                    </Flex>
                    {/* Contenedor de la imagen para posicionar elementos superpuestos */}
                    <div className={styles.imageContainer}>
                        <SmartImage
                            radius="m"
                            aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "9 / 16"}
                            src={image.src}
                            alt={image.alt}
                            loading='lazy'
                        />
                        {/* Mostrar badge si tiene offert_alert */}
                        {image.offert_alert && (
                            <div className={styles.offerBadge}>
                                Oferta
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </Masonry>
    );
}
