'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';

interface ExpandedImageProps extends Omit<ImageProps, 'width' | 'height'> {
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
                position: 'relative',
                width: '90vw',
                height: '90vh',
                borderRadius: '8px',
                overflow: 'hidden',
                ...style,
            }}
            className={className}
        >
            <Image
                {...props}
                src={src}
                alt={alt}
                fill
                style={{
                    objectFit: 'contain',
                }}
            />
        </div>
    );
};

export default ExpandedImage;
