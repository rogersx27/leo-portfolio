"use client";

import Masonry from 'react-masonry-css';
import { SmartImage } from "@/once-ui/components";
import { gallery } from "@/app/resources";
import styles from "@/app/gallery/Gallery.module.scss";

export default function MasonryGrid() {
    const breakpointColumnsObj = {
        default: 4, // En pantallas grandes mostramos 4 columnas
        1440: 3,    // En pantallas de tamaño medio mostramos 3 columnas
        1024: 2,    // En pantallas tablet mostramos 2 columnas
        560: 1      // En móviles mostramos 1 columna
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles.masonryGrid}
            columnClassName={styles.masonryGridColumn}
        >
            {gallery.images.map((image, index) => (
                <SmartImage
                    key={index}
                    radius="m"
                    aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "9 / 16"}
                    src={image.src}
                    alt={image.alt}
                    className={styles.gridItem}
                />
            ))}
        </Masonry>
    );
}
