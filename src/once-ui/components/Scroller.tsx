"use client";

import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Flex, IconButton } from '.';
import styles from './Scroller.module.scss';

interface ScrollerProps {
    children: React.ReactNode;
    direction?: 'row' | 'column';
    contained?: boolean;
    className?: string;
    style?: React.CSSProperties;
    [key: string]: any;
}

const Scroller: React.FC<ScrollerProps> = ({
    children,
    direction = 'row',
    contained = false,
    className,
    style,
    ...props
}) => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [showPrevButton, setShowPrevButton] = useState<boolean>(false);
    const [showNextButton, setShowNextButton] = useState<boolean>(false);
    const [isOverflowing, setIsOverflowing] = useState<boolean>(false);

    const checkOverflow = () => {
        const scroller = scrollerRef.current;
        if (scroller) {
            const isRow = direction === 'row';
            const scrollSize = isRow ? scroller.scrollWidth : scroller.scrollHeight;
            const clientSize = isRow ? scroller.clientWidth : scroller.clientHeight;
            setIsOverflowing(scrollSize > clientSize);
            // Actualizar visibilidad de botones
            setShowPrevButton(isRow ? scroller.scrollLeft > 0 : scroller.scrollTop > 0);
            setShowNextButton(isRow ? scroller.scrollLeft < scrollSize - clientSize - 1 : scroller.scrollTop < scrollSize - clientSize - 1);
        }
    };

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (scroller) {
            checkOverflow();
            scroller.addEventListener('scroll', checkOverflow);
            window.addEventListener('resize', checkOverflow);
            return () => {
                scroller.removeEventListener('scroll', checkOverflow);
                window.removeEventListener('resize', checkOverflow);
            };
        }
    }, [direction, children]);

    const handleScrollNext = () => {
        const scroller = scrollerRef.current;
        if (scroller) {
            const scrollAmount = direction === 'row' ? scroller.clientWidth / 2 : scroller.clientHeight / 2;
            scroller.scrollBy({ [direction === 'row' ? 'left' : 'top']: scrollAmount, behavior: 'smooth' });
        }
    };

    const handleScrollPrev = () => {
        const scroller = scrollerRef.current;
        if (scroller) {
            const scrollAmount = direction === 'row' ? scroller.clientWidth / 2 : scroller.clientHeight / 2;
            scroller.scrollBy({ [direction === 'row' ? 'left' : 'top']: -scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <Flex
            fillWidth
            minWidth={0}
            position="relative"
            className={className}
            {...(contained && {
                padding: "2",
                radius: "m-4",
                border: "neutral-medium",
                borderStyle: "solid-1",
                overflowX: "hidden",
                overflowY: "hidden",
            })}
            style={style}>
            {showPrevButton && (
                <div className={classNames(styles.scrollMaskContainer, styles.scrollMaskPrev)}>
                    <div className={styles.scrollMask}></div>
                    <IconButton
                        icon={direction === 'row' ? 'chevronLeft' : 'chevronUp'}
                        onClick={handleScrollPrev}
                        size="s"
                        variant="secondary"
                        className={classNames(styles.scrollButton, styles.scrollButtonPrev)}
                        aria-label="Scroll Previous" />
                </div>
            )}
            <Flex
                fillWidth
                ref={scrollerRef}
                className={classNames(styles.scroller, {
                    [styles.row]: direction === 'row',
                    [styles.column]: direction === 'column',
                })}
                {...props}
                style={{
                    justifyContent: isOverflowing ? 'flex-start' : 'center',
                    ...props.style
                }}>
                {children}
            </Flex>
            {showNextButton && (
                <div className={classNames(styles.scrollMaskContainer, styles.scrollMaskNext)}>
                    <div className={styles.scrollMask}></div>
                    <IconButton
                        icon={direction === 'row' ? 'chevronRight' : 'chevronDown'}
                        onClick={handleScrollNext}
                        size="s"
                        variant="secondary"
                        className={classNames(styles.scrollButton, styles.scrollButtonNext)}
                        aria-label="Scroll Next" />
                </div>
            )}
        </Flex>
    );
};

Scroller.displayName = 'Scroller';

export { Scroller };
export type { ScrollerProps };
