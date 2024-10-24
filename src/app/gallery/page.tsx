import { Flex } from "@/once-ui/components";
import MasonryGrid from "./components/MasonryGrid";
import { baseURL, gallery, person, niche_in_category } from "../resources";
import styles from "@/app/gallery/Gallery.module.scss";
import PyramidCategory from "../components/PyramidCategory";


export function generateMetadata() {
    const title = gallery.title;
    const description = gallery.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/gallery`,
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

function NicheInCategorySection() {
    return (
        <div className={styles.nicheInCategorySection}>
            <h2>Categories and Niches</h2>
            <div className={styles.categoriesGrid}>
                {Object.entries(niche_in_category).map(([category, niches]) => (
                    <div key={category} className={styles.categoryColumn}>
                        <h3 className={styles.categoryTitle}>{category}</h3>
                        <ul className={styles.nicheList}>
                            {niches.map((niche) => (
                                <li key={niche} className={styles.nicheItem}>{niche}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default function Gallery() {
    return (
        <Flex fillWidth direction="column" alignItems="center" padding="l">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ImageGallery',
                        name: gallery.title,
                        description: gallery.description,
                        url: `https://${baseURL}/gallery`,
                        image: gallery.images.map((image) => ({
                            '@type': 'ImageObject',
                            url: `${baseURL}${image.src}`,
                            description: image.alt,
                        })),
                        author: {
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
            <h1>{gallery.title}</h1>
            <p>{gallery.description}</p>
            <MasonryGrid />
            <NicheInCategorySection />
        </Flex>
    );
}
