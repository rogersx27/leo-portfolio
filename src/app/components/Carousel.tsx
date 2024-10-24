"use client";
import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ children, slidesToShow = 1 }) => {
    const [currentIndex, setCurrentIndex] = useState(1); // Iniciar en la primera tarjeta "real"
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [visibleSlides, setVisibleSlides] = useState(slidesToShow); // Estado para controlar cuántas tarjetas se muestran
    const transitionDuration = 500; // Duración de la transición en ms
    const autoPlayDelay = 3000; // Tiempo entre slides en ms
    const childrenArray = React.Children.toArray(children);

    // Clonamos el primer y último slide para simular el bucle
    const slides = [
        childrenArray[childrenArray.length - 1], // Clon del último slide
        ...childrenArray,
        childrenArray[0], // Clon del primer slide
    ];

    // Función para avanzar al siguiente slide
    const nextSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    // Cambio de slide automático con delay
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, autoPlayDelay);

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar
    }, []); // Solo queremos que este useEffect se ejecute una vez al montar

    // Detecta cuándo llegar a los clones y ajusta el índice para el bucle continuo
    useEffect(() => {
        if (currentIndex === slides.length - 1) {
            // Si llegamos al clon del primer slide
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(1); // Ir a la primera tarjeta "real"
            }, transitionDuration);
        } else if (currentIndex === 0) {
            // Si llegamos al clon del último slide
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(slides.length - 2); // Ir a la última tarjeta "real"
            }, transitionDuration);
        } else {
            setTimeout(() => setIsTransitioning(false), transitionDuration);
        }
    }, [currentIndex, slides.length]);

    // Función para ajustar la cantidad de tarjetas mostradas en función del tamaño de la pantalla
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleSlides(1); // Solo una tarjeta en vista mobile
            } else {
                setVisibleSlides(slidesToShow); // Mantener el número de tarjetas configuradas por defecto
            }
        };

        window.addEventListener("resize", handleResize);

        // Establecer la configuración correcta al cargar la página
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [slidesToShow]);

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselWrapper}>
                <div
                    className={styles.carouselContent}
                    style={{
                        transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`, // Ajustamos el desplazamiento dependiendo de cuántos slides se muestran
                        transition: isTransitioning ? `transform ${transitionDuration}ms ease` : "none",
                        width: `${slides.length * (100 / visibleSlides)}%`, // Ajustamos el ancho del contenedor
                    }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={styles.carouselSlide}
                            style={{ width: `${100 / visibleSlides}%` }} // Ajustamos el ancho de cada slide
                        >
                            {slide}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
