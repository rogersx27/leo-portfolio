// src/app/faqs/page.tsx

"use client";

import React, { useState } from "react";
import { Flex, Text, Icon, Accordion } from "@/once-ui/components"; // Ensure that 'Accordion' is included if exported from here
import styles from "./faqs.module.scss";
import Head from "next/head";
import SearchBar from "./components/SearchBar";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  faqs: FAQ[];
}

const faqsData: FAQSection[] = [
  {
    title: "General FAQs",
    faqs: [
      {
        id: "faq1",
        question: "What services do you offer?",
        answer:
          "Youtube thumbnails, Instagram / Facebook ad creatives, stories, posts, banners, flyers, photo manipulation, skin retouch. (Ask me if I do something more specific).",
      },
      {
        id: "faq2",
        question: "What platforms and industries do you design for?",
        answer:
          "I can make designs for any type of platform / industry that there is. Except for adult platforms / industry.",
      },
      {
        id: "faq3",
        question: "Do you make thumbnails in other languages?",
        answer: "Sure, as long as you provide the text.",
      },
      {
        id: "faq4",
        question: "What design tools or software do you use?",
        answer: "I use Photoshop.",
      },
    ],
  },
  {
    title: "Design Process and Workflow",
    faqs: [
      {
        id: "faq5",
        question: "How does the design process work?",
        answer:
          "Once you provide your project details, I’ll create a draft design (if needed). After reviewed, we proceed with the payment, and I will send the design on the agreed date.",
      },
      {
        id: "faq6",
        question: "What do you need to get started?",
        answer:
          "I’ll need details like brand colors, logo, text, specific images, and any inspiration or examples of what you like.",
      },
      {
        id: "faq7",
        question: "How long does it take to create a design?",
        answer:
          "1-2 days, but rush options are available for an additional fee.",
      },
      {
        id: "faq8",
        question: "Can you help if I don’t know what I want?",
        answer:
          "Absolutely! We can brainstorm ideas together based on your content and audience to come up with a design strategy.",
      },
      {
        id: "faq9",
        question: "Is there a revision policy?",
        answer: "I offer unlimited revisions per project.",
      },
      {
        id: "faq10",
        question: "Why is the final design watermarked?",
        answer:
          "I will only send the final design without watermark once you are happy with the outcome and the rest of the payment is made.",
      },
    ],
  },
  {
    title: "Pricing and Packages",
    faqs: [
      {
        id: "faq11",
        question: "How much does a thumbnail or social media design cost?",
        answer:
          "I offer both individual designs and package deals. Contact me for a custom quote based on your needs.",
      },
      {
        id: "faq12",
        question: "Do you offer discounts for bulk orders?",
        answer:
          "Yes, I offer discounts for bulk orders or ongoing work. Let’s discuss your needs, and I’ll create a custom package.",
      },
      {
        id: "faq13",
        question: "Are there any additional fees?",
        answer:
          "I’ll always be transparent about any additional costs, like rush fees or additional elements.",
      },
    ],
  },
  {
    title: "Deliverables & File Types",
    faqs: [
      {
        id: "faq14",
        question: "What file types will I receive?",
        answer: "I can provide JPG or PNG files.",
      },
      {
        id: "faq15",
        question: "Do you offer source files?",
        answer:
          "Source file (PSD) is available for an additional fee if you’d like the option to make future edits.",
      },
      {
        id: "faq16",
        question:
          "Can you provide the designs in different sizes for various platforms?",
        answer:
          "Yes, I can resize designs for various social media platforms to ensure they fit perfectly everywhere. This might have an extra cost, depending on the complexity of the design.",
      },
    ],
  },
  {
    title: "Payment & Refund",
    faqs: [
      {
        id: "faq17",
        question: "What payment methods do you accept?",
        answer:
          "For now, I accept payments via PayPal, and direct bank transfers.",
      },
      {
        id: "faq18",
        question: "Do you require an upfront deposit?",
        answer:
          "Yes, I require a 50% deposit to start the project, with the remainder due upon completion.",
      },
      {
        id: "faq19",
        question: "What’s your refund policy?",
        answer:
          "If you’re not satisfied after final design, I offer a full refund of what you paid.",
      },
    ],
  },
  {
    title: "License and Stock Images",
    faqs: [
      {
        id: "faq20",
        question: "Do you use any stock images?",
        answer:
          "I have access to a wide variety of stock images that can be used in any of the designs you need with no extra cost.",
      },
      {
        id: "faq21",
        question: "Can you use images from Google?",
        answer:
          "Images from Google are not free to use. Instead, I can offer stock images.",
      },
    ],
  },
  {
    title: "Additional Questions",
    faqs: [
      {
        id: "faq22",
        question: "Can you work with specific brand guidelines?",
        answer:
          "Definitely! If you have brand guidelines, please provide them so I can ensure consistency with your existing look.",
      },
      {
        id: "faq23",
        question: "How do you stay updated with current design trends?",
        answer:
          "I continually research trends, styles, and updates in YouTube and social media design to ensure my work is fresh and appealing.",
      },
    ],
  },
];

const FAQsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Filtrar FAQs por búsqueda en todas las secciones
  const filteredFaqSections = faqsData
    .map((section) => ({
      ...section,
      faqs: section.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((section) => section.faqs.length > 0); // Solo mantener secciones con FAQs coincidentes

  return (
    <>
      <Head>
        <title>Frequently Asked Questions | Your Website</title>
        <meta
          name="description"
          content="Answers to the most common questions about my services and processes."
        />
        <meta
          name="keywords"
          content="FAQs, Frequently Asked Questions, Services, Contact, Web Development"
        />
      </Head>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        className={styles.faqsContainer}
      >
        <h1 className={styles.heading}>Frequently Asked Questions</h1>
        <p className={styles.subheading}>
          Find answers to the most common questions about my services and
          processes.
        </p>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />

        {/* FAQs List */}
        <div className={styles.faqList}>
          {filteredFaqSections.length > 0 ? (
            filteredFaqSections.map((section) => (
              <div key={section.title} className={styles.section}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                {section.faqs.map((faq) => (
                  <div key={faq.id} className={styles.faqItem}>
                    <p className={styles.question}>{faq.question}</p>
                    <p className={styles.answer}>{faq.answer}</p>
                  </div>
                ))}
              </div>
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
            Do you have a question that's not on the list?{" "}
            <a href="/contact" className={styles.contactLink}>
              Contact me
            </a>{" "}
            and I'll be happy to help you.
          </Text>
        </div>
      </Flex>
    </>
  );
};

export default FAQsPage;

