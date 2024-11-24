// src/app/components/CallToAction.tsx

import { Button, Flex, Icon, Text } from '@/once-ui/components';
import styles from '@/app/about/about.module.scss';
import Link from './Link';
import clsx from 'clsx';

const CustomHeading: React.FC = () => {
    return (
        <div className={styles.customHeading}>
            <h1 className={styles.primaryHeading}>Let’s Work</h1>
            <h2 className={styles.secondaryHeading}>Together!</h2>
        </div>
    );
};

const CustomText: React.FC = () => {
    return (
        <p className={styles.text}>
            It’s time to make<br />
            something extraordinary <br />
            that leaves a lasting impression.
        </p>
    );
};


const CallToAction: React.FC = () => {
    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            className={styles.callToAction}
        >
            <Icon
                name="handshake"
                size="xl"
                onBackground="accent-strong"
                decorative
                aria-hidden="true"
                className={styles.icon}
            />

            {/* Título personalizado */}
            <CustomHeading />

            {/* Descripción */}
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

            {/* Enlace adicional como texto de bajo contraste */}
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
                    Don't forget to check the Terms and Services.
                </Link>
            </Flex>
        </Flex>
    );
};

export default CallToAction;
