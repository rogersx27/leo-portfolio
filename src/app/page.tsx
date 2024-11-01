import React from 'react';

import { Heading, Flex, Text, Button, Avatar, RevealFx } from '@/once-ui/components';
import { Projects } from '@/app/work/components/Projects';

import { about, baseURL, home, newsletter, person, routes } from '@/app/resources'
import reviewersData from '@/app/resources/reviewers_info.json';

import { Mailchimp } from '@/app/components';
import { Posts } from '@/app/blog/components/Posts';
import ReviewersCarousel from './components/ReviewersCarousel';
import Card from './components/Card';
import CallToAction from './about/components/CallToAction';
import styles from '@/app/about/about.module.scss';


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
				paddingY="l" gap="m">

				<Flex
					direction="column"
					fillWidth maxWidth="s" gap="m">
					<RevealFx translateY="4">
						<Heading
							wrap="balance"
							variant="display-strong-l">
							{home.headline}
						</Heading>
					</RevealFx>
					<RevealFx translateY="8" delay={0.2}>
						<Text
							wrap="balance"
							onBackground="neutral-weak"
							variant="body-default-l">
							{home.subline}
						</Text>
					</RevealFx>
					<RevealFx translateY="12" delay={0.4}>
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
					</RevealFx>
				</Flex>

			</Flex>
			{/* <RevealFx translateY="16" delay={0.6}>
				<Projects range={[1, 1]} />
			</RevealFx> */}
			{/* {routes['/blog'] && (
				<Flex fillWidth paddingX="20">
					<Posts range={[1, 2]} columns="2" />
				</Flex>
			)} */}
			<RevealFx translateY="16" delay={0.6}>
				<Flex direction="column" alignItems="center" gap="l">
					<Heading variant="display-strong-l">What People Are Saying</Heading>
					<ReviewersCarousel />
				</Flex>
			</RevealFx>
			<Card>
				<CallToAction
					title={about.callToAction.title}
					description={about.callToAction.description}
					button={{
						label: about.callToAction.button.label,
						link: about.callToAction.button.link
					}}
					additionalLinks={[
						{ label: "Watch my gallery", link: "/gallery" }
					]}
				/>
			</Card>
			<Projects range={[2]} />
			{newsletter.display &&
				<Mailchimp />
			}
		</Flex>
	);
}
