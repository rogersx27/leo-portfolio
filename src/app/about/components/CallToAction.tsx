import { Button, Flex, Icon, Text } from '@/once-ui/components';
import styles from '@/app/about/about.module.scss';

const CustomHeading: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', lineHeight: '1.1', marginBottom: '1rem' }}>
            <span
                style={{
                    fontSize: '2.5em',       // Tamaño grande para "Let’s Work"
                    display: 'inline-block',
                    marginBottom: '-0.3rem', // Reducir margen inferior
                    fontWeight: 'bold',     // Negrita
                }}
            >
                Let’s Work
            </span>
            <br />
            <span
                style={{
                    fontSize: '1.75em',    // Tamaño un poco menor para "Together!"
                    padding: '0',
                    fontWeight: 'bold',     // Negrita

                }}
            >
                Together!
            </span>
        </div>
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
            <Text
                variant="body-default-l"
                marginBottom="m"
                className={styles.text}
            >
                It’s time to make something extraordinary that leaves a lasting impression.
            </Text>

            {/* Botón principal */}
            <Button
                href="/contact"
                variant="primary"
                size="m"
                className={styles.button}
            >
                Contact Now
            </Button>

            {/* Enlace adicional */}
            <Flex
                className={styles.additionalLinks}
                gap="8"
                marginTop="m"
            >
                <Button
                    href="/faq"
                    size="s"
                    variant="secondary"
                    className="button-secondary"
                >
                    Don’t forget to check the FAQ
                </Button>
            </Flex>
        </Flex>
    );
};

export default CallToAction;
