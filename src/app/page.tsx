import React from 'react';

import { Heading, Flex, Text, Button, Avatar, RevealFx, Icon } from '@/once-ui/components';
import { Projects } from '@/app/work/components/Projects';

import { about, baseURL, home, newsletter, person, routes, imagesForHome } from '@/app/resources'
import reviewersData from '@/app/resources/reviewers_info.json';

import { Mailchimp } from '@/app/components';
import { Posts } from '@/app/blog/components/Posts';
import ReviewersCarousel from './components/ReviewersCarousel';
import Card from './components/Card';
import CallToAction from './about/components/CallToAction';
import ImageCarousel from './components/ImageCarousel';
import headingStyles from '@/app/components/headingStyles.module.scss';


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
		<Flex
			maxWidth="m" fillWidth gap="xl"
			direction="column" alignItems="center">
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
			<Flex
				fillWidth
				direction="column"
				paddingY="l"
				gap="m"
				alignItems="center">

				<Flex
					direction="column"
					maxWidth="s"
					gap="m"
					alignItems="center">
					<RevealFx translateY="4">
						<Heading
							wrap="balance"
							variant="display-strong-l"
							className={headingStyles.twoLinesHeading} // Aplicar la clase SCSS
						>
							{home.headline}
						</Heading>
					</RevealFx>
					<RevealFx translateY="8" delay={0.1}>
						<Text
							wrap="balance"
							onBackground="neutral-weak"
							variant="body-default-l"
							style={{ textAlign: 'center', margin: '0 0 5px 0' }}
						>
							{home.subline}
						</Text>
					</RevealFx>
					<RevealFx translateY="12" delay={0.1}>
						<Flex gap="m">
							<Button
								data-border="rounded"
								href="/about"
								variant="tertiary"
								suffixIcon="chevronRight"
								size="m">
								<Flex
									gap="8"
									alignItems="center">
									{about.avatar.display && (
										<Avatar
											style={{ marginLeft: '-0.75rem', marginRight: '0.25rem' }}
											src={person.avatar}
											size="m" />
									)}
									About me
								</Flex>
							</Button>
							<Button
								data-border="rounded"
								href="/gallery"
								variant="tertiary"
								suffixIcon="chevronRight"
								size="m">
								<Flex
									gap="8"
									alignItems="center">
									<Icon name="gallery" />
									Portfolio
								</Flex>
							</Button>
						</Flex>
					</RevealFx>
				</Flex>

			</Flex>
			<ImageCarousel
				aspectRatio="16 / 9"
				indicator="thumbnail"
				images={imagesForHome}
				autoPlay={true}
			/>
			<Heading variant="display-strong-l" style={{ textAlign: 'center', margin: '0 0 5px 0' }}>What People Are Saying</Heading>
			<ReviewersCarousel />
			<Card>
				<CallToAction />
			</Card>
			<Projects range={[2]} />
			{newsletter.display &&
				<Mailchimp />
			}
		</Flex>
	);
}
