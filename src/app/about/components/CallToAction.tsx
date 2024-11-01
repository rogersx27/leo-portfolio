import { Button, Flex, Heading, Icon, Text } from '@/once-ui/components';
import styles from '@/app/about/about.module.scss';

interface CallToActionProps {
    title: string;
    description: JSX.Element;
    button: {
        label: string;
        link: string;
    };
    additionalLinks?: { label: string; link: string }[];
}

const CallToAction: React.FC<CallToActionProps> = ({ title, description, button, additionalLinks = [] }) => {
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

            <Heading
                variant="display-strong-m"
                marginBottom="m"
                className={styles.heading}
            >
                {title}
            </Heading>

            <Text
                variant="body-default-l"
                marginBottom="m"
                className={styles.text}
            >
                {description}
            </Text>

            <Button
                href={button.link}
                variant="primary"
                size="m"
                className={styles.button}
            >
                {button.label}
            </Button>

            {/* Enlaces adicionales (opcional) */}
            {additionalLinks.length > 0 && (
                <Flex
                    className={styles.additionalLinks}
                    gap="8"
                    marginTop="m"
                >
                    {additionalLinks.map((link, index) => (
                        <Button
                            key={index}
                            href={link.link}
                            size="s"
                            className="button-secondary"
                        >
                            {link.label}
                        </Button>
                    ))}
                </Flex>
            )}
        </Flex>
    );
};

export default CallToAction;
