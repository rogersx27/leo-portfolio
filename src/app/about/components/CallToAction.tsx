"use client";

import { Button, Flex, Icon } from "@/once-ui/components";
import styles from "@/app/about/about.module.scss";
import Link from "./Link";
import clsx from "clsx";

const CustomHeading: React.FC = () => (
    <div className={styles.customHeading}>
        <h1 className={styles.primaryHeading}>Let’s Work</h1>
        <h2 className={styles.secondaryHeading}>Together!</h2>
    </div>
);

const CustomText: React.FC = () => (
    <p className={styles.text}>
        It’s time to make<br />
        something extraordinary <br />
        that leaves a lasting impression.
    </p>
);

const CallToAction: React.FC = () => (
    <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={styles.callToAction}
    >
        {/* Ícono decorativo */}
        <Icon
            name="handshake"
            size="xl"
            onBackground="accent-strong"
            decorative
            aria-hidden="true"
            className={styles.icon}
        />

        {/* Encabezado personalizado */}
        <CustomHeading />

        {/* Texto descriptivo */}
        <CustomText />

        {/* Botón principal */}
        <Button
            href="/contact"
            variant="primary"
            size="m"
            className={styles.button}
        >
            Contact Now
        </Button>

        {/* Enlaces adicionales */}
        <Flex
            className={styles.additionalLinks}
            gap="8"
            marginTop="m"
        >
            <Link
                href="/faqs"
                className={clsx(styles.faqLink)}
            >
                Don’t forget to check the FAQ
            </Link>
            <Link
                href="/terms"
                className={clsx(styles.faqLink)}
            >
                Don’t forget to check the Terms and Services.
            </Link>
        </Flex>
    </Flex>
);

export default CallToAction;
