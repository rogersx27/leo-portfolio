// src/app/page.tsx o src/app/home/page.tsx según tu estructura

import React from 'react';
import { Flex, Heading, Text, Button, Avatar, RevealFx, Icon } from '@/once-ui/components';
import { Projects } from '@/app/work/components/Projects';
import { about, baseURL, home, newsletter, person, routes, imagesForHome } from '@/app/resources';
import reviewersData from '@/app/resources/reviewers_info.json';
import { Mailchimp } from '@/app/components';
import ReviewersCarousel from './components/ReviewersCarousel';
import Card from './components/Card';
import CallToAction from './about/components/CallToAction';
import ImageCarousel from './components/ImageCarousel';
import headingStyles from '@/app/components/headingStyles.module.scss';
import HeroSection from './components/HeroSection';
import styles from './home.module.scss'; // Importar el nuevo archivo de estilos

export function generateMetadata() {
    const title = home.title;
    const description = home.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}`,
            images: [
                {
                    url: ogImage,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}

export default function Home() {
    return (
        <main className={styles.mainContainer}>
            {/* JSON-LD para SEO */}
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        name: home.title,
                        description: home.description,
                        url: `https://${baseURL}`,
                        image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
                        publisher: {
                            '@type': 'Person',
                            name: person.name,
                            image: {
                                '@type': 'ImageObject',
                                url: `${baseURL}${person.avatar}`,
                            },
                        },
                    }),
                }}
            />

            {/* Sección Principal */}
			<HeroSection
                titleLine1="Turning Ideas"
                titleLine2="Into Eye-Catching Visuals"
                subline={home.subline}
                about={about}
                person={person}
            />

            {/* Carrusel de Imágenes */}
            <ImageCarousel
                aspectRatio="16 / 9"
                indicator="dots"
                images={imagesForHome}
                autoPlay={true}
            />

            {/* Sección de Reseñas */}
            <section className={styles.reviewsSection}>
                <Heading variant="display-strong-l" as="h2" style={{ textAlign: 'center', margin: '1.5rem 0' }}>
                    What People Are Saying
                </Heading>
                <ReviewersCarousel />
            </section>

            {/* Call to Action */}
            <Card>
                <CallToAction />
            </Card>

            {/* Proyectos */}
            <Projects range={[2]} />

            {/* Newsletter */}
            {newsletter.display && <Mailchimp />}
        </main>
    );
}
