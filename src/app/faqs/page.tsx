// src/app/faqs/page.tsx

'use client';

import React, { useState } from 'react';
import { Flex, Text, Icon, Accordion } from '@/once-ui/components'; // Ensure that 'Accordion' is included if exported from here
import styles from './faqs.module.scss';
import Head from 'next/head';
import SearchBar from './components/SearchBar';

interface FAQ {
    id: string;
    question: string;
    answer: string;
}

const faqsData: FAQ[] = [
    {
        id: 'faq1',
        question: "How can I contact you?",
        answer: "You can contact me through the contact form on the 'Contact Me' page or by sending an email directly to your.email@example.com.",
    },
    {
        id: 'faq2',
        question: "What services do you offer?",
        answer: "I offer web development services, UI/UX design, and technological consulting to help your business achieve its digital objectives.",
    },
    {
        id: 'faq3',
        question: "What are your rates?",
        answer: "My rates vary depending on the project and its specific requirements. Please contact me to discuss your needs and obtain a personalized quote.",
    },
    {
        id: 'faq4',
        question: "Do you have experience working with startups?",
        answer: "Yes, I have worked with several startups helping them launch their products to the market and optimize their digital platforms.",
    },
    {
        id: 'faq5',
        question: "What is your average delivery time?",
        answer: "The delivery time depends on the complexity of the project. Generally, small projects can be completed within a few weeks, while larger ones may require several months.",
    },
    // Add more FAQs as needed
];

const FAQsPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const filteredFaqs = faqsData.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <Head>
                <title>Frequently Asked Questions | Your Website</title>
                <meta name="description" content="Answers to the most common questions about my services and processes." />
                <meta name="keywords" content="FAQs, Frequently Asked Questions, Services, Contact, Web Development" />
            </Head>
            <Flex
                direction="column"
                alignItems="center"
                justifyContent="flex-start"
                className={styles.faqsContainer}
            >
                <h1 className={styles.heading}>Frequently Asked Questions</h1>
                <p className={styles.subheading}>
                    Find answers to the most common questions about my services and processes.
                </p>

                {/* Search Bar */}
                <SearchBar onSearch={handleSearch} />

                {/* FAQs List */}
                <div className={styles.accordionList}>
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map(faq => (
                            <Accordion
                                key={faq.id}
                                title={faq.question}
                                open={false}
                                className={styles.accordionItem}
                            >
                                {faq.answer}
                            </Accordion>
                        ))
                    ) : (
                        <Text as="p" variant="body-default-m" className={styles.noResults}>
                            No questions matching your search were found.
                        </Text>
                    )}
                </div>

                {/* Contact Promotion */}
                <div className={styles.contactPrompt}>
                    <Text as="p" variant="body-default-m">
                        Do you have a question that's not on the list? <a href="/contact" className={styles.contactLink}>Contact me</a> and I'll be happy to help you.
                    </Text>
                </div>
            </Flex>
        </>
    );
};

export default FAQsPage;
