"use client";

import React from "react";
import { Flex, Text, Accordion } from "@/once-ui/components";
import styles from "./terms.module.scss";
import Head from "next/head";

const termsData = [
  {
    title: "Scope of Services",
    content: `
      • I provide professional design services for (Mainly but not limited) social media platforms, including posts, stories, banners, ads, thumbnails, etc.
      • Design requests must be clear and detailed to ensure alignment with your vision.
    `,
  },
  {
    title: "Deliverables",
    content: `
      • Final designs will be delivered in the agreed formats (e.g., PNG, JPEG) based on your requirements.
      • Editable file (PSD) is provided upon request, which may incur additional fees.
    `,
  },
  {
    title: "Turnaround Time",
    content: `
      • Standard delivery times are outlined in the service description (1-2 days). Rush orders are available for an additional charge.
      • Delays caused by incomplete or unclear information from the client will not be my responsibility.
    `,
  },
  {
    title: "Revisions",
    content: `
      • The service includes unlimited revisions per design.
      • What’s not considered a revision:
        - A different design idea.
        - Adding any extra elements, not specified in the beginning.
      • Revisions must be requested within 2 days after the initial design delivery.
    `,
  },
  {
    title: "Payments",
    content: `
      • Payments are processed through secure platforms PayPal, or direct bank transfer, depending on the agreed method.
      • A 50% deposit of the total price is required upfront unless otherwise negotiated for long-term projects.
    `,
  },
  {
    title: "Refund Policy",
    content: `
      • Refunds are available only if the work has not been initiated or fails to meet the agreed-upon terms after reasonable revisions.
      • No refunds will be issued for completed work once approved by the client.
    `,
  },
  {
    title: "Copyright and Usage",
    content: `
      • Upon final payment, the client owns the rights to the final design.
      • I reserve the right to showcase the designs in my portfolio or marketing materials unless explicitly requested otherwise.
      • Clients must not resell or redistribute the designs without prior permission.
    `,
  },
  {
    title: "Client Responsibilities",
    content: `
      • Provide accurate and complete details for the project, including branding guidelines, dimensions, and any reference material.
      • Ensure timely feedback and communication to avoid delays.
    `,
  },
  {
    title: "Cancellations",
    content: `
      • Either party may cancel the project at any time. If the client cancels after work has started, compensation will be required for the completed portion.
    `,
  },
  {
    title: "Confidentiality",
    content: `
      • All information shared by the client will be treated as confidential and not disclosed to third parties.
      • Clients are responsible for securing the intellectual property rights for any material they provide (e.g., images, logos).
    `,
  },
  {
    title: "Disclaimers",
    content: `
      • Designs are created based on the information provided by the client. I am not responsible for any disputes related to copyright infringement or brand violations due to inaccurate or incomplete information.
      • Results may vary depending on the platform and audience engagement.
    `,
  },
  {
    title: "Modifications to Terms",
    content: `
      • I reserve the right to update these terms and policies at any time. Clients will be notified of significant changes via e-mail. For this, please subscribe to the newsletter.
    `,
  },
];

const TermsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Your Website</title>
        <meta
          name="description"
          content="Detailed terms and conditions for our design services."
        />
        <meta
          name="keywords"
          content="Terms, Policies, Conditions, Design Services"
        />
      </Head>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        className={styles.termsContainer}
      >
        <h1 className={styles.heading}>Terms and Conditions</h1>
        <p className={styles.subheading}>
          Please review the following terms and policies before using our
          services.
        </p>
        <div className={styles.accordionList}>
          {termsData.map((term, index) => (
            <Accordion
              key={index}
              title={term.title}
              className={styles.accordionItem}
            >
              <Text as="p">{term.content}</Text>
            </Accordion>
          ))}
        </div>
      </Flex>
    </>
  );
};

export default TermsPage;