'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';

interface ExpandedImageProps extends ImageProps {
    className?: string;
    style?: React.CSSProperties;
}

const ExpandedImage: React.FC<ExpandedImageProps> = ({
    className,
    style,
    src,
    alt = '',
    ...props
}) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw', // Toma todo el ancho de la ventana
                height: '100vh', // Toma toda la altura de la ventana
                overflow: 'hidden',
                borderRadius: '8px',
                ...style,
            }}
            className={className}
        >
            <Image
                {...props}
                src={src}
                alt={alt}
                layout="responsive"
                width={1920} // Ajuste temporal, puede adaptarse según el tamaño de la imagen
                height={1080}
                style={{
                    objectFit: 'contain', // Asegura que la imagen se ajuste al contenedor sin recortar
                    maxWidth: '100%',
                    maxHeight: '100%',
                }}
            />
        </div>
    );
};

export default ExpandedImage;
