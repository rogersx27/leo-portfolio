import { Avatar, Button, Flex, Heading, Icon, IconButton, SmartImage, Tag, Text, RevealFx } from '@/once-ui/components';
import { person, about, social, baseURL } from '@/app/resources';
import TableOfContents from '@/app/about/components/TableOfContents';
import styles from '@/app/about/about.module.scss';
import Card from '../components/Card';
import CallToAction from './components/CallToAction';
import cardStyles from '@/app/components/Card.module.scss';

export function generateMetadata() {
    const title = about.title;
    const description = about.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/about`,
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

const structure = [
    {
        title: about.intro.title,
        display: about.intro.display,
        items: []
    },
    {
        title: about.bilingual.title,
        display: about.bilingual.display,
        items: about.bilingual.experiences.map(experience => experience.languages)
    },
    {
        title: about.callToAction.title,
        display: about.callToAction.display,
        items: [], // No hay subítems para esta sección
    },
    // Elimina las siguientes entradas si no usas esas secciones:
    // { 
    //   title: about.studies.title,
    //   display: about.studies.display,
    //   items: about.studies.institutions.map(institution => institution.name)
    // },
    // { 
    //   title: about.technical.title,
    //   display: about.technical.display,
    //   items: about.technical.skills.map(skill => skill.title)
    // },
    // { 
    //   title: about.work.title,
    //   display: about.work.display,
    //   items: about.work.experiences.map(experience => experience.company)
    // },
];

export default function About() {
    return (
        <Flex fillWidth maxWidth="m" direction="column" className={styles.aboutPage}>
            {/* Datos Estructurados */}
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: person.name,
                        jobTitle: person.role,
                        description: about.intro.description,
                        url: `https://${baseURL}/about`,
                        image: `${baseURL}/images/${person.avatar}`,
                        sameAs: social
                            .filter((item) => item.link && !item.link.startsWith('mailto:'))
                            .map((item) => item.link),
                    }),
                }}
            />

            {/* Table of Contents */}
            {about.tableOfContent.display && (
                <Flex
                    style={{ left: '0', top: '50%', transform: 'translateY(-50%)' }}
                    position="fixed"
                    paddingLeft="24" gap="32"
                    direction="column" hide="s">
                        <TableOfContents structure={structure} about={about} />
                </Flex>   
            )}

            {/* Contenido Principal */}
            <Flex fillWidth mobileDirection="column" justifyContent="center">
                {/* Avatar y Datos Personales */}
                {about.avatar.display && (
                    <Flex
                        minWidth="160" paddingX="l" paddingBottom="xl" gap="m"
                        flex={3} direction="column" alignItems="center">
                        <RevealFx translateY="4">
                            <Avatar src={person.avatar} size="xl" />
                        </RevealFx>
                        <RevealFx translateY={6}>
                            <Flex gap="8" alignItems="center">
                                <Icon onBackground="accent-weak" name="globe" />
                                {person.location}
                            </Flex>
                        </RevealFx>
                        {person.languages.length > 0 && (
                            <RevealFx translateY="8">
                                <Flex wrap gap="8">
                                    {person.languages.map((language, index) => (
                                        <Tag key={index} size="l">
                                            {language}
                                        </Tag>
                                    ))}
                                </Flex>
                            </RevealFx>
                        )}
                    </Flex>
                )}

                {/* Secciones de Información */}
                <Flex
                    className={styles.blockAlign}
                    fillWidth flex={9} maxWidth={40} direction="column">

                    {/* Introducción y Redes Sociales */}
                    <RevealFx translateY="4">
                        <Flex
                            id={about.intro.title}
                            fillWidth minHeight="160"
                            direction="column" justifyContent="center"
                            marginBottom="32">
                            {about.calendar.display && (
                                <Flex
                                    className={styles.blockAlign}
                                    style={{
                                        backdropFilter: 'blur(var(--static-space-1))',
                                        border: '1px solid var(--brand-alpha-medium)',
                                        width: 'fit-content'
                                    }}
                                    alpha="brand-weak" radius="full"
                                    fillWidth padding="4" gap="8" marginBottom="m"
                                    alignItems="center">
                                    <Flex paddingLeft="12">
                                        <Icon name="calendar" onBackground="brand-weak" />
                                    </Flex>
                                    <Flex paddingX="8">Schedule a call</Flex>
                                    <IconButton
                                        href={about.calendar.link}
                                        data-border="rounded"
                                        variant="tertiary"
                                        icon="chevronRight" />
                                </Flex>
                            )}
                            <Heading className={styles.textAlign} variant="display-strong-xl">
                                {person.name}
                            </Heading>
                            <Text className={styles.textAlign} variant="display-default-xs" onBackground="neutral-weak">
                                {person.role}
                            </Text>
                            {social.length > 0 && (
                                <Flex
                                    className={styles.blockAlign}
                                    paddingTop="20" paddingBottom="4" gap="8" wrap>
                                    {social.map((item) => (
                                        item.link && (
                                            <Button
                                                key={item.name}
                                                href={item.link}
                                                prefixIcon={item.icon}
                                                label={item.name}
                                                size="s"
                                                variant="tertiary" />
                                        )
                                    ))}
                                </Flex>
                            )}
                        </Flex>
                    </RevealFx>

                    {/* Descripción de Introducción */}
                    {about.intro.display && (
                        <RevealFx translateY={6}>
                            <Flex
                                direction="column"
                                textVariant="body-default-l"
                                fillWidth gap="m" marginBottom="xl">
                                {Array.isArray(about.intro.description) ? (
                                    about.intro.description.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))
                                ) : (
                                    about.intro.description
                                )}
                            </Flex>
                        </RevealFx>
                    )}

                    {/* Sección Bilingüe */}
                    {about.bilingual.display && (
                        <RevealFx translateY="8">
                            <Heading as="h2" id={about.bilingual.title} variant="display-strong-s" marginBottom="m">
                                {about.bilingual.title}
                            </Heading>
                            <Flex
                                direction="column"
                                fillWidth gap="l" marginBottom="40">
                                {about.bilingual.experiences.map((experience, index) => (
                                    <Flex
                                        key={`${experience.company}-${index}`}
                                        fillWidth
                                        direction="column">
                                        <Text id={experience.languages.replace(" ", "-")} variant="heading-strong-l">
                                            {experience.languages}
                                        </Text>
                                        <Text variant="body-default-m" onBackground="neutral-weak">
                                            {experience.achievements}
                                        </Text>
                                        {experience.images.length > 0 && (
                                            <Flex fillWidth paddingTop="m" gap="12" wrap>
                                                {experience.images.map((image, index) => (
                                                    <Flex
                                                        key={index}
                                                        border="neutral-medium"
                                                        borderStyle="solid-1"
                                                        radius="m"
                                                        minWidth={image.width} height={image.height}>
                                                        <SmartImage
                                                            enlarge
                                                            radius="m"
                                                            sizes={image.width.toString()}
                                                            alt={image.alt}
                                                            src={image.src} />
                                                    </Flex>
                                                ))}
                                            </Flex>
                                        )}
                                    </Flex>
                                ))}
                            </Flex>
                        </RevealFx>
                    )}

                    {/* Call to Action */}
                    {about.callToAction.display && (
                        <RevealFx translateY={10}>
                            <Card className={cardStyles.card}>
                                <CallToAction />
                            </Card>
                        </RevealFx>
                    )}

                    {/* Experiencias Laborales */}
                    {/* {about.work.display && (
                        <>
                            <Heading
                                as="h2"
                                id={about.work.title}
                                variant="display-strong-s"
                                marginBottom="m">
                                {about.work.title}
                            </Heading>
                            <Flex
                                direction="column"
                                fillWidth gap="l" marginBottom="40">
                                {about.work.experiences.map((experience, index) => (
                                    <Flex
                                        key={`${experience.company}-${experience.role}-${index}`}
                                        fillWidth
                                        direction="column">
                                        <Flex
                                            fillWidth
                                            justifyContent="space-between"
                                            alignItems="flex-end"
                                            marginBottom="4">
                                            <Text
                                                id={experience.company}
                                                variant="heading-strong-l">
                                                {experience.company}
                                            </Text>
                                            <Text
                                                variant="heading-default-xs"
                                                onBackground="neutral-weak">
                                                {experience.timeframe}
                                            </Text>
                                        </Flex>
                                        <Text
                                            variant="body-default-s"
                                            onBackground="brand-weak"
                                            marginBottom="m">
                                            {experience.role}
                                        </Text>
                                        <Flex
                                            as="ul"
                                            direction="column" gap="16">
                                            {experience.achievements.map((achievement, index) => (
                                                <Text
                                                    as="li"
                                                    variant="body-default-m"
                                                    key={`${experience.company}-${index}`}>
                                                    {achievement}
                                                </Text>
                                            ))}
                                        </Flex>
                                        {experience.images.length > 0 && (
                                            <Flex
                                                fillWidth paddingTop="m" paddingLeft="40"
                                                wrap>
                                                {experience.images.map((image, index) => (
                                                    <Flex
                                                        key={index}
                                                        border="neutral-medium"
                                                        borderStyle="solid-1"
                                                        radius="m"
                                                        minWidth={image.width} height={image.height}>
                                                        <SmartImage
                                                            enlarge
                                                            radius="m"
                                                            sizes={image.width.toString()}
                                                            alt={image.alt}
                                                            src={image.src} />
                                                    </Flex>
                                                ))}
                                            </Flex>
                                        )}
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )} */}

                    {/* Estudios */}
                    {/* {about.studies.display && (
                        <>
                            <Heading
                                as="h2"
                                id={about.studies.title}
                                variant="display-strong-s"
                                marginBottom="m">
                                {about.studies.title}
                            </Heading>
                            <Flex
                                direction="column"
                                fillWidth gap="l" marginBottom="40">
                                {about.studies.institutions.map((institution, index) => (
                                    <Flex
                                        key={`${institution.name}-${index}`}
                                        fillWidth gap="4"
                                        direction="column">
                                        <Text
                                            id={institution.name}
                                            variant="heading-strong-l">
                                            {institution.name}
                                        </Text>
                                        <Text
                                            variant="heading-default-xs"
                                            onBackground="neutral-weak">
                                            {institution.description}
                                        </Text>
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )} */}

                    {/* Habilidades Técnicas */}
                    {/* {about.technical.display && (
                        <>
                            <Heading
                                as="h2"
                                id={about.technical.title}
                                variant="display-strong-s" marginBottom="40">
                                {about.technical.title}
                            </Heading>
                            <Flex
                                direction="column"
                                fillWidth gap="l">
                                {about.technical.skills.map((skill, index) => (
                                    <Flex
                                        key={`${skill.title}-${index}`}
                                        fillWidth gap="4"
                                        direction="column">
                                        <Text
                                            variant="heading-strong-l">
                                            {skill.title}
                                        </Text>
                                        <Text
                                            variant="body-default-m"
                                            onBackground="neutral-weak">
                                            {skill.description}
                                        </Text>
                                        {skill.images.length > 0 && (
                                            <Flex
                                                fillWidth paddingTop="m" gap="12"
                                                wrap>
                                                {skill.images.map((image, index) => (
                                                    <Flex
                                                        key={index}
                                                        border="neutral-medium"
                                                        borderStyle="solid-1"
                                                        radius="m"
                                                        minWidth={image.width} height={image.height}>
                                                        <SmartImage
                                                            enlarge
                                                            radius="m"
                                                            sizes={image.width.toString()}
                                                            alt={image.alt}
                                                            src={image.src} />
                                                    </Flex>
                                                ))}
                                            </Flex>
                                        )}
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )} */}
                </Flex>
            </Flex>
        </Flex>
    );
}
