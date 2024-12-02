import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components";
import { person, social } from "@/app/resources";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Flex
            as="footer"
            position="relative"
            fillWidth
            padding="8"
            zIndex={999}
            justifyContent="center"
            alignItems="center"
            direction="column"
        >
            {/* Links to Terms and FAQs */}
            <Flex direction="column" alignItems="center" gap="12" marginBottom="2">
                <SmartLink href="/terms" style={{ textDecoration: "none" }}>
                    <Text variant="body-default-s" onBackground="neutral-strong">
                        Terms & Conditions
                    </Text>
                </SmartLink>
                <SmartLink href="/faqs" style={{ textDecoration: "none" }}>
                    <Text variant="body-default-s" onBackground="neutral-strong">
                        FAQs
                    </Text>
                </SmartLink>
            </Flex>

            {/* Social Icons */}
            <Flex gap="16" marginBottom="16">
                {social.map((item) => (
                    item.link && (
                        <IconButton
                            key={item.name}
                            href={item.link}
                            icon={item.icon}
                            tooltip={item.name}
                            size="s"
                            variant="ghost"
                        />
                    )
                ))}
            </Flex>

            {/* Footer Text */}
            <Text
                variant="body-default-s"
                onBackground="neutral-strong"
                align="center"
            >
                <Text onBackground="neutral-weak">© {currentYear} /</Text>
                <Text paddingX="4">{person.name}</Text>
                <Text onBackground="neutral-weak">
                    / Build using{" "}
                    <SmartLink
                        style={{ marginLeft: "-0.125rem" }}
                        href="https://once-ui.com/templates/magic-portfolio"
                    >
                        Once UI
                    </SmartLink>
                </Text>
            </Text>
        </Flex>
    );
};
