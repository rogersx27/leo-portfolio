// src/once-ui/components/Link.tsx

import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import clsx from 'clsx';
import styles from './Link.module.scss';

interface LinkProps extends NextLinkProps {
    className?: string;
    children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ className, children, ...props }) => {
    return (
        <NextLink {...props} className={clsx(styles.link, className)}>
            {children}
        </NextLink>
    );
};

export default Link;
