import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    style?: React.CSSProperties;
}

const ImageModal: React.FC<ModalProps> = ({ isOpen, onClose, children, style }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const modalContent = (
        <div
            onClick={handleOverlayClick}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10000,
                overflow: 'auto',
                ...style,
            }}
        >
            <div
                style={{
                    position: 'relative',
                    backgroundColor: 'transparent',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        zIndex: 2,
                    }}
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );

    return typeof window !== 'undefined'
        ? createPortal(modalContent, document.body)
        : null;
};

export default ImageModal;
